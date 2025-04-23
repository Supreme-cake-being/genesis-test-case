import { useEffect, useState } from "react";
import { IMeta } from "@/src/types/meta";
import {
  Pagination as PaginationComponent,
  Select,
  SelectItem,
} from "@heroui/react";
import { useSearchParams } from "next/navigation";
import { useSearchParamsUpdate } from "@/src/hooks/useSearchParamsUpdate";

interface IPagination {
  meta: IMeta;
  fetchData: (params: Record<string, any>) => void;
}

export const Pagination = ({ meta, fetchData }: IPagination) => {
  const searchParams = useSearchParams();

  // Hydration state
  const [hasHydrated, setHasHydrated] = useState(false);

  // Page and limit states
  const [page, setPage] = useState(meta?.page);
  const [limit, setLimit] = useState(meta?.limit);

  // Search params update function
  const { handleSearchParamsUpdate } = useSearchParamsUpdate();

  const sort = searchParams.get("sort");
  const order = searchParams.get("order");
  const search = searchParams.get("search");
  const genre = searchParams.get("genre");
  const artist = searchParams.get("artist");

  // Awaiting hydration
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // If hydrated, get params and make an api call
  useEffect(() => {
    if (!hasHydrated) return;

    handleSearchParamsUpdate({
      sort: sort || "",
      order: order || "",
      search: search || "",
      genre: genre || "",
      artist: artist || "",
      page,
      limit,
    });
    fetchData({ page, limit, sort, order, search, genre, artist });
  }, [page, limit]);

  const limitList = [10, 20, 30, 40, 50];

  // When changing limit, reset page to 1
  const handleLimitChange = (e: any) => {
    setPage(1);
    setLimit(Number(e.target.value));
  };

  return (
    <div className="flex w-full justify-center items-center gap-4">
      <PaginationComponent
        showControls
        isCompact
        page={page}
        total={meta?.totalPages}
        onChange={(page) => setPage(page)}
      />
      <Select
        label="Limit"
        size="sm"
        className="w-20 h-36px"
        value={limit}
        onChange={handleLimitChange}
      >
        {limitList.map((limit) => (
          <SelectItem key={limit}>{limit}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
