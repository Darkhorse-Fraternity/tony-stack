import { flexRender, type RowData, type Table } from "@tanstack/react-table"

interface ITableFooterProps<TData extends RowData> {
  table: Table<TData>
}

export const TableFooter = <TData extends RowData>({
  table,
}: ITableFooterProps<TData>) => (
  <tfoot className=" border-t-0">
    {table.getFooterGroups().map((footerGroup) => (
      <tr key={footerGroup.id}>
        {footerGroup.headers.map((header) => (
          <th key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.footer, header.getContext())}
          </th>
        ))}
      </tr>
    ))}
  </tfoot>
)
