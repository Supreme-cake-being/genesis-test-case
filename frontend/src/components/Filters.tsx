import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { Input, Select, SelectItem } from "@heroui/react";
import { useGenres } from "@/src/hooks/useGenres";
import { useSearchParamsUpdate } from "../hooks/useSearchParamsUpdate";
import { useSearchParams } from "next/navigation";

interface IFilters {
  fetchData: (params: Record<string, any>) => void;
}

export const Filters = ({ fetchData }: IFilters) => {
  const searchParams = useSearchParams();

  //Hydration state
  const [hasHydrated, setHasHydrated] = useState(false);

  // Params state
  const [sort, setSort] = useState("title");
  const [order, setOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [artist, setArtist] = useState("");

  // Serach params update function
  const { handleSearchParamsUpdate } = useSearchParamsUpdate();

  // Select options
  const { genres } = useGenres();
  const sortList = ["title", "artist", "album", "createdAt"];
  const orderList = ["asc", "desc"];

  useEffect(() => {
    setHasHydrated(true);
  }, []);

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
  }, [hasHydrated, searchParams]);

  useEffect(() => {
    if (!hasHydrated) return;

    handleSearchParamsUpdate({
      sort,
      order,
      search,
      genre,
      artist,
    });
    fetchData({ sort, order, search, genre, artist });
    console.log("updated!!!");
  }, [sort, order, genre]);

  // const debouncedSearch = debounce((val: string) => {
  //   handleSearchParamsUpdate({ search: val });
  //   fetchData({ sort, order, search: val, genre, artist });
  // }, 400);

  // const debouncedArtist = debounce((val: string) => {
  //   handleSearchParamsUpdate({ artist: val });
  //   fetchData({ sort, order, search, genre, artist: val });
  // }, 400);

  // useEffect(() => {
  //   debouncedSearch(search);
  // }, [search]);

  // useEffect(() => {
  //   debouncedArtist(artist);
  // }, [artist]);

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
