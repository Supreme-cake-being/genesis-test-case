import {
  Table as TableComponent,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
  Image,
} from "@heroui/react";
import { Pagination } from "@/src/components/common/Pagination";
import { CreateModal } from "../modals/CreateModal";
import { EditModal } from "../modals/EditModal";
import { DeleteModal } from "../modals/DeleteModal";
import { IMeta } from "@/src/types/meta";
import { Filters } from "../Filters";

import FallBackImage from "@/public/fallback.webp";

interface ITable {
  tableInstance: string;
  columns: string[];
  data: Record<string, any>[];
  loading: boolean;
  meta: IMeta;
  fetchData: (params: Record<string, any>) => void;
}

export const Table = ({
  tableInstance,
  columns,
  data = [],
  loading,
  meta,
  fetchData,
}: ITable) => {
  const loadingState = loading ? "loading" : "idle";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <CreateModal fetchData={fetchData} />
      </div>

      <TableComponent
        aria-label={`${tableInstance} table`}
        topContent={<Filters fetchData={fetchData} />}
        bottomContent={<Pagination meta={meta} />}
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column} className="capitalize">
              {column}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          loadingState={loadingState}
          loadingContent={<Spinner />}
          emptyContent={
            "No results match your filters. Try adjusting your search."
          }
        >
          {data?.map(({ id, ...row }) => (
            <TableRow key={id}>
              {columns.map((col) => {
                if (col === "coverImage")
                  return (
                    <TableCell key={col}>
                      <Image
                        alt={`Cover for ${row.title}`}
                        src={row[col] || FallBackImage.src}
                        width={100}
                        height={100}
                      />
                    </TableCell>
                  );

                if (col === "audioFile") {
                  return (
                    <TableCell key={col}>
                      {row[col] ? (
                        <audio controls className="w-full max-w-[200px]">
                          <source src={row[col]} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      ) : (
                        <span className="text-sm text-gray-500">No audio</span>
                      )}
                    </TableCell>
                  );
                }

                if (col === "createdAt" || col === "updatedAt") {
                  const displayValue = new Date(row[col]).toLocaleString();
                  return <TableCell key={col}>{displayValue}</TableCell>;
                }

                if (col === "actions")
                  return (
                    <TableCell key={col}>
                      <div className="flex gap-2">
                        <EditModal slug={row.slug} />
                        <DeleteModal
                          id={id}
                          trackName={row.title}
                          fetchData={fetchData}
                        />
                      </div>
                    </TableCell>
                  );

                const cellValue = row[col];
                const displayValue = Array.isArray(cellValue)
                  ? cellValue.join(", ")
                  : String(cellValue);
                return <TableCell key={col}>{displayValue}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </TableComponent>
    </div>
  );
};
