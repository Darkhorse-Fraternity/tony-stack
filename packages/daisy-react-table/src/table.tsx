// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames"
import React, { BaseSyntheticEvent, FC } from "react"
import {
  Cell,
  ColumnInstance,
  HeaderGroup,
  Row,
  TableInstance,
  TableRowProps,
} from "react-table"

import { SortDownIcon, SortIcon, SortUpIcon } from "./icons"

export const TableHeader: FC<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headerGroups: Array<HeaderGroup<any>>
}> = ({ headerGroups }) => (
  <thead>
    {headerGroups.map((headerGroup, i) => (
      <tr {...headerGroup.getHeaderGroupProps()} key={i}>
        {headerGroup.headers.map((column) => {
          const getResizerProps = column?.getResizerProps
            ? { ...column?.getResizerProps() }
            : null

          return (
            // Add the sorting props to control sorting. For this example
            // we can add them into the header props
            <th
              // scope="col"
              className="normal-case sticky z-10 top-0"
              {...column.getHeaderProps(column.getSortByToggleProps())}
              key={column.id}
            >
              <div className="group flex items-center justify-between text-sm text-gray-800 font-normal">
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <SortDownIcon className="h-4 w-4 text-gray-400" />
                    ) : (
                      <SortUpIcon className="h-4 w-4 text-gray-400" />
                    )
                  ) : column.canSort ? (
                    <SortIcon className="h-4 w-4 text-gray-400 opacity-0" />
                  ) : null}
                </span>
                {/* Allows columns to be manually adjusted in width */}
                {getResizerProps && (
                  <div
                    {...getResizerProps}
                    className={classNames(
                      `columnResizeBtn text-gray-600 w-4 h-3 opacity-0 group-hover:opacity-100 group-active:opacity-100`,
                      "showResizeIcon" in column ? "" : "hidden"
                    )}
                  >
                    {/* <FontAwesomeIcon icon={["far", "arrows-left-right"]} /> */}
                  </div>
                )}
              </div>
            </th>
          )
        })}
      </tr>
    ))}
  </thead>
)

export interface IRenderRowSubComponentType<
  D extends Record<string, unknown> = Record<string, unknown>
> {
  row: Row<D>
  rowProps: TableRowProps
  visibleColumns: Array<ColumnInstance<D>>
}

export function TBody<
  D extends Record<string, unknown> = Record<string, unknown>
>({
  getTableBodyProps,
  page,
  prepareRow,
  onClick,
  renderRowSubComponent,
  visibleColumns,
}: TableInstance<D> & {
  onClick?: (row: Row<D>, e: BaseSyntheticEvent) => void
  renderRowSubComponent?: ({
    row,
    rowProps,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    visibleColumns,
  }: IRenderRowSubComponentType<D>) => React.ReactNode
}) {
  const cellClickHandler = (cell: Cell<D>) => (e: BaseSyntheticEvent) => {
    if (
      !cell.column.isGrouped &&
      !cell.row.isGrouped &&
      cell.column.id !== "_selector" &&
      onClick
    ) {
      onClick(cell.row, e)
    }
  }

  return (
    <tbody {...getTableBodyProps()}>
      {page?.map((row, index) => {
        prepareRow(row)
        const rowProps = row.getRowProps()

        return (
          <React.Fragment key={rowProps.key}>
            <tr
              {...rowProps}
              key={row.id ?? index}
              className={classNames({
                hover: Boolean(onClick),
                "cursor-pointer": Boolean(onClick),
              })}
            >
              {row.cells.map((cell, i) => (
                <td
                  // className="whitespace-pre-line "
                  role="cell"
                  onClick={cellClickHandler(cell)}
                  {...cell.getCellProps()}
                  key={i}
                  className={classNames({
                    "!bg-green-1": row.original.stepType === 2,
                    "!bg-yellow-1": row.original.stepType === 3,
                  })}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
            {row.isExpanded &&
              renderRowSubComponent &&
              renderRowSubComponent({ row, rowProps, visibleColumns })}
          </React.Fragment>
        )
      })}
    </tbody>
  )
}
