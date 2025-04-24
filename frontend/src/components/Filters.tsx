import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import { Input, Select, SelectItem } from "@heroui/react";
import { useGenres } from "@/src/hooks/useGenres";
import { useSearchParamsUpdate } from "@/src/hooks/useSearchParamsUpdate";

interface IFilters {
  fetchData: (params: Record<string, any>) => void;
}

export const Filters = ({ fetchData }: IFilters) => {
  const searchParams = useSearchParams();

  // Hydration state
  const [hasHydrated, setHasHydrated] = useState(false);

  // Params state
  const [sort, setSort] = useState("title");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");

  // Search params update function
  const { handleSearchParamsUpdate } = useSearchParamsUpdate();

  // Select options
  const { genres } = useGenres();
  const sortList = ["title", "artist", "album", "createdAt"];
  const orderList = ["asc", "desc"];

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  // Awaiting hydration
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // If hydrated, get search params and update the state
  useEffect(() => {
    if (!hasHydrated) return;

    const _sort = searchParams.get("sort");
    const _order = searchParams.get("order");
    const _search = searchParams.get("search");
    const _genre = searchParams.get("genre");
    const _artist = searchParams.get("artist");

    if (_sort) setSort(_sort);
    if (_order) setOrder(_order);
    if (_search) setSearch(_search);
    if (_genre) setGenre(_genre);
    if (_artist) setArtist(_artist);

    fetchData({
      sort,
      order,
      search,
      genre,
      artist,
      page,
      limit: limit || 10,
    });
  }, [hasHydrated, searchParams]);

  // If hydrated and filter values updated, make an api call
  // If some parameter changed, reset page to 1
  useEffect(() => {
    if (!hasHydrated) return;

    handleSearchParamsUpdate({
      sort,
      order,
      search,
      genre,
      artist,
      page: 1,
      limit: limit || 10,
    });
    fetchData({ sort, order, search, genre, artist, page: 1, limit });
  }, [sort, order, genre]);

  // Debounce for inputs
  const debouncedInput = useCallback(
    debounce((values) => {
      handleSearchParamsUpdate(values);
      fetchData(values);
    }, 400),
    []
  );

  // If hydrated, make an api call with delay
  // If some parameter changed, reset page to 1
  useEffect(() => {
    if (!hasHydrated) return;
    debouncedInput({
      sort,
      order,
      search,
      genre,
      artist,
      page: 1,
      limit: limit || 10,
    });
  }, [search, artist]);

  return (
    <div className="flex w-full justify-center items-center gap-4">
      <Select
        label="Sort by"
        size="sm"
        className="h-36px"
        value={sort}
        selectedKeys={[sort]}
        disabledKeys={[sort]}
        onChange={(e) => setSort(e.target.value)}
      >
        {sortList.map((sort: string) => (
          <SelectItem key={sort}>{sort}</SelectItem>
        ))}
      </Select>

      <Select
        label="Order"
        size="sm"
        className="h-36px"
        value={order}
        selectedKeys={[order]}
        disabledKeys={[order]}
        onChange={(e) => setOrder(e.target.value)}
      >
        {orderList.map((order: string) => (
          <SelectItem key={order}>{order}</SelectItem>
        ))}
      </Select>

      <Input
        label="Search"
        size="sm"
        className="h-36px"
        value={search}
        defaultValue={search || ""}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
        label="Genre"
        size="sm"
        className="h-36px"
        value={genre}
        selectedKeys={[genre]}
        onChange={(e) => setGenre(e.target.value)}
      >
        {genres?.map((item: string) => (
          <SelectItem key={item}>{item}</SelectItem>
        ))}
      </Select>

      <Input
        label="Artist"
        size="sm"
        className="h-36px"
        value={artist}
        defaultValue={artist || ""}
        onChange={(e) => setArtist(e.target.value)}
      />
    </div>
  );
};
