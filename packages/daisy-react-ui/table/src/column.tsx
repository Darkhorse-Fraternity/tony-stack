import { type ColumnDef, type RowData } from "@tanstack/react-table"

import IndeterminateCheckbox from "./checkbox"

export const selectColumn = <TData extends RowData>(): ColumnDef<TData> => ({
  id: "_selector",
  header: ({ table }) => (
    <div className="px-1">
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    </div>
  ),
  cell: ({ row }) => (
    <div className="px-1">
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    </div>
  ),
})
