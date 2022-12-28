import { ChangeEventHandler } from "react"
import { Hooks } from "react-table"

import IndeterminateCheckbox from "./check"

export const SELECTION_ID = "_selection"
export const SELECTION_DISABLE = "_selection_disable"

export interface ISelectionType {
  _selection_disable: boolean
}

export const selectionHook = <D extends Record<string, unknown>>(
  hooks: Hooks<D>
) => {
  hooks.allColumns.push((columns) => [
    // Let's make a column for selection
    {
      id: SELECTION_ID,
      disableResizing: true,
      disableGroupBy: true,
      disableSortBy: true,
      disableGlobalFilter: true,
      minWidth: 45,
      width: 45,
      maxWidth: 45,
      Aggregated: undefined,
      // The header can use the table's getToggleAllRowsSelectedProps method
      // to render a checkbox
      Header: ({ toggleRowSelected, isAllPageRowsSelected, page }) => {
        const modifiedOnChange: ChangeEventHandler<HTMLInputElement> = (
          event
        ) => {
          for (const row of page) {
            //check each row if it is not disabled
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            !row.original._selection_disable &&
              toggleRowSelected(row.id, event.currentTarget.checked)
          }
        }

        //Count number of selectable and selected rows in the current page
        //to determine the state of select all checkbox
        let selectableRowsInCurrentPage = 0
        let selectedRowsInCurrentPage = 0

        for (const row of page) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          row.isSelected && selectedRowsInCurrentPage++
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !row.original._selection_disable && selectableRowsInCurrentPage++
        }

        //If there are no selectable rows in the current page
        //select all checkbox will be disabled -> see page 2
        const disabled = selectableRowsInCurrentPage === 0
        const checked =
          (isAllPageRowsSelected ||
            selectableRowsInCurrentPage === selectedRowsInCurrentPage) &&
          !disabled

        return (
          <IndeterminateCheckbox
            className="dmc-form-checkbox"
            onChange={modifiedOnChange}
            checked={checked}
            disabled={disabled}
          />
        )
      },
      // The cell can use the individual row's getToggleRowSelectedProps method
      // to the render a checkbox
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Cell: ({ row }: any) => (
        <IndeterminateCheckbox
          className="dmc-form-checkbox"
          // checked={}
          {...row.getToggleRowSelectedProps()}
          disabled={row.original._selection_disable}
        />
      ),
    },
    ...columns.filter((i) => i.id !== SELECTION_ID),
  ])
  hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    // fix the parent group of the selection button to not be resizable
    const selectionGroupHeader = headerGroups?.[0]?.headers[0]

    if (selectionGroupHeader) {
      selectionGroupHeader.canResize = false
    }
  })
}

// export type EditType = { _edit_disable: boolean }
// export const editHook = <D extends Record<string, unknown>>(
//   hooks: Hooks<D>
// ) => {
//   hooks.allColumns.push((columns) => {
//     return [
//       // Let's make a column for selection
//       {
//         id: SELECTION_ID,
//         disableResizing: true,
//         disableGroupBy: true,
//         disableSortBy: true,
//         disableGlobalFilter: true,
//         minWidth: 45,
//         width: 45,
//         maxWidth: 45,
//         Aggregated: undefined,
//         // The header can use the table's getToggleAllRowsSelectedProps method
//         // to render a checkbox
//         // The cell can use the individual row's getToggleRowSelectedProps method
//         // to the render a checkbox
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         Cell: ({ row }: CellProps<SelectionType>) => (
//           <button className="btn btn-primary" {...row.getToggleRowClickProps()}>
//             Edit
//           </button>
//         ),
//       },
//       ...columns.filter((i) => i.id !== SELECTION_ID),
//     ]
//   })
//   hooks.useInstanceBeforeDimensions.push(({ headerGroups, state }) => {
//     // fix the parent group of the selection button to not be resizable
//     const selectionGroupHeader = headerGroups[0].headers[0]
//     selectionGroupHeader.canResize = false
//   })
// }
