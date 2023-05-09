/* eslint-disable max-len */
import { flexRender, type RowData, type Table } from "@tanstack/react-table"

import { SortDownIcon, SortUpIcon } from "./icons"

interface ITableHeadProps<TData extends RowData> {
  table: Table<TData>
}

export const TableHead = <TData extends RowData>({
  table,
}: ITableHeadProps<TData>) => (
  <thead className=" sticky top-0 z-50 border-b-0">
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th key={header.id} colSpan={header.colSpan}>
            {header.isPlaceholder ? null : (
              <div
                {...{
                  className: header.column.getCanSort()
                    ? "cursor-pointer select-none flex items-center justify-between"
                    : "flex items-center justify-between",
                  onClick: header.column.getToggleSortingHandler(),
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
                {/* {header.column.getCanFilter() ? (
                    <div>
                      <Filter column={header.column} table={table} />
                    </div>
                  ) : null} */}
                {{
                  asc: <SortUpIcon className="h-4 w-4 text-gray-400" />,
                  desc: <SortDownIcon className="h-4 w-4 text-gray-400" />,
                }[header.column.getIsSorted() as string] ?? (
                  <div className="w-4"></div>
                )}
              </div>
            )}
          </th>
        ))}
      </tr>
    ))}
  </thead>
)
