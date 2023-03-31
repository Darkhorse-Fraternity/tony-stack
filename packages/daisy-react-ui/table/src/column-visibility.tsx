import { type RowData, type Table } from "@tanstack/react-table"

import { ColumnsIcon } from "./icons"

export interface IColumnVisibilityProps<TData extends RowData> {
  table: Table<TData>
}

export const ColumnVisibility = <TData extends RowData>({
  table,
}: IColumnVisibilityProps<TData>) => {
  const allLeafColumns = table.getAllLeafColumns()
  const hideableColumns = allLeafColumns.filter(
    (column) => column.id !== "_selector" && column.getCanHide(),
  )
  const checkedCount = hideableColumns.reduce(
    (acc, val) => acc + (val.getIsVisible() ? 0 : 1),
    0,
  )
  const onlyOneOptionLeft = checkedCount + 1 >= hideableColumns.length

  return hideableColumns.length > 3 ? (
    <div className="not-prose  dropdown-down  dropdown lg:dropdown-end">
      <div
        className=" tooltip tooltip-right   hover:tooltip-open lg:tooltip-left"
        data-tip="Show/Hide columns"
      >
        <button
          // tabIndex="0"
          className="btn-ghost btn-circle  btn"
          // onClick={() => {}}
        >
          <ColumnsIcon className="h-5 w-5" />
        </button>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box w-52 bg-base-200 p-2 shadow-lg"
      >
        {hideableColumns.map((column) => (
          <li key={column.id} className="flex">
            <label className="label flex  p-3">
              <input
                disabled={column.getIsVisible() && onlyOneOptionLeft}
                type={"checkbox"}
                checked={column.getIsVisible()}
                className="checkbox"
                onChange={() => column.toggleVisibility()}
              />
              {column.id}{" "}
            </label>
          </li>
        ))}
      </ul>
    </div>
  ) : null
}
