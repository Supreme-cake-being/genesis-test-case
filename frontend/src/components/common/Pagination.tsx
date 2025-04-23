import { useEffect, useState } from "react";
import { IMeta } from "@/src/types/meta";
import {
  Pagination as PaginationComponent,
  Select,
  SelectItem,
} from "@heroui/react";

interface IPagination {
  meta: IMeta;
  fetchData: (params: Record<string, any>) => void;
}

export const Pagination = ({ meta, fetchData }: IPagination) => {
  const [page, setPage] = useState(meta?.page);
  const [limit, setLimit] = useState(meta?.limit);

  useEffect(() => {
    fetchData({ page, limit });
  }, [page, limit]);

  const limitList = [10, 20, 30, 40, 50];

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
