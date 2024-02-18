import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import * as React from "react";
import { OrderIcon } from "@/assets/icons/OrderIcon";

export interface DataTableProps<Data extends object> {
  data: Data[];
  columns: ColumnDef<Data, any>[];
}

interface SortTableProps {
  tClass?: string;
  theadClass?: string;
  thClass?: string;
  tdClass?: string;
  tbodyClass?: string;
  trClass?: string;
}

export function SortTable<Data extends object>({
  data,
  columns,
  tClass,
  tbodyClass,
  tdClass,
  trClass,
  thClass,
  theadClass,
}: DataTableProps<Data> & SortTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <Table className={`${tClass}`}>
      <TableHeader className={theadClass}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className={`${trClass} hover:cursor-text hover:bg-[none]`}
          >
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className={thClass}
                >
                  <div className="flex align-middle justify-center">
                    <p className="mr-1.5">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </p>
                    <OrderIcon fill="#ccc" width="16px" />
                  </div>
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className={tbodyClass}>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className={trClass}>
            {row.getVisibleCells().map((cell) => {
              return (
                <TableCell key={cell.id} className={tdClass}>
                  <p>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </p>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
