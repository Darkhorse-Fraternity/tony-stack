import { type PropsWithChildren } from "react"
import { type RowData, type Table } from "@tanstack/react-table"

import { MinusIcon, PlusIcon } from "./icons"

export interface ITableToolbarProps<TData extends RowData> {
  table: Table<TData>
  onAdd?: (table: Table<TData>) => void
  onDelete?: (table: Table<TData>) => void
}

export function ToolBar<TData extends RowData>({
  table,
  onAdd,
  onDelete,
}: PropsWithChildren<ITableToolbarProps<TData>>) {
  const { getState } = table
  const rowSelection = getState().rowSelection

  return (
    <div className="sm:flex sm:gap-x-2">
      {Boolean(rowSelection) && Object.keys(rowSelection).length > 0 && (
        <div
          className=" tooltip   tooltip-top hover:tooltip-open"
          data-tip="Delete"
        >
          <button
            className="btn-ghost  btn-circle btn"
            title="Delete"
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              onDelete(table)
            }}
            disabled={rowSelection && Object.keys(rowSelection).length === 0}
          >
            <MinusIcon className="h-5 w-5" />
          </button>
        </div>
      )}
      {onAdd && (
        <div
          className="  tooltip tooltip-top  hover:tooltip-open"
          data-tip="Add"
        >
          <button
            className="btn-ghost btn-circle btn"
            title="Add"
            onClick={() => onAdd(table)}
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
