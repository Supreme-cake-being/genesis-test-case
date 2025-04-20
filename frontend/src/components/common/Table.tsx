import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
// import { Modal } from "./Modal";

interface ITable {
  createButtonText: string;
  columns: string[];
  data: Record<string, any>[];
}

export const TableComponent = ({
  createButtonText = "Create",
  columns,
  data = [],
}: ITable) => {
  return (
    <div className="flex justify-center">
      <Button>{createButtonText}</Button>

      <Table>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column}>{column}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data?.map(({ id, ...row }) => (
            <TableRow key={id}>
              {columns.map((col) => {
                if (col === "Actions")
                  return <TableCell key={col}>{displayValue}</TableCell>;

                const cellValue = row[col];
                const displayValue = Array.isArray(cellValue)
                  ? cellValue.join(", ")
                  : String(cellValue);
                return <TableCell key={col}>{displayValue}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
