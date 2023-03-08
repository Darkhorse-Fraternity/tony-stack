import { flexRender, type RowData, type Table } from "@tanstack/react-table"

interface ITableBodyProps<TData extends RowData> {
  table: Table<TData>
}

export const TableBody = <TData extends RowData>({
  table,
}: ITableBodyProps<TData>) => (
  <tbody>
    {table.getRowModel().rows.map((row) => (
      <tr key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
)
