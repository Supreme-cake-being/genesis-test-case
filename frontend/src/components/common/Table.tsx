import {
  Button,
  Table as TableComponent,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { DeleteButton, EditButton } from "./IconButtons";
import { CreateModal } from "../CreateModal";
import { EditModal } from "../EditModal";
import { DeleteModal } from "../DeleteModal";

interface ITable {
  tableInstance: string;
  createButtonText: string;
  columns: string[];
  data: Record<string, any>[];
}

export const Table = ({
  tableInstance,
  createButtonText = "Create",
  columns,
  data = [],
}: ITable) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <CreateModal />
      </div>

      <TableComponent aria-label={`${tableInstance} table`}>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column} className="capitalize">
              {column}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data?.map(({ id, ...row }) => (
            <TableRow key={id}>
              {columns.map((col) => {
                if (col === "actions")
                  return (
                    <TableCell key={col}>
                      <div className="flex gap-2">
                        <EditModal />
                        <DeleteModal trackName={row.title} />
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
