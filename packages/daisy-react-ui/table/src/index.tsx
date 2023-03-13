import {
  getCoreRowModel as getDefaultCoreRowModel,
  getFacetedMinMaxValues as getDefaultFacetedMinMaxValues,
  getFacetedRowModel as getDefaultFacetedRowModel,
  getFacetedUniqueValues as getDefaultFacetedUniqueValues,
  getFilteredRowModel as getDefaultFilteredRowModel,
  getPaginationRowModel as getDefaultPaginationRowModel,
  getSortedRowModel as getDefaultSortedRowModel,
  type RowData,
  type TableOptions,
  useReactTable,
} from "@tanstack/react-table"

import { TableBody } from "./body"
import { selectColumn } from "./column"
import { ColumnVisibility } from "./column-visibility"
import { FilterBar, fuzzyFilter } from "./filter"
import { TableFooter } from "./footer"
import { TableHead } from "./head"
import { Pagination } from "./pagination"
import { type ITableToolbarProps, ToolBar } from "./toolbar"

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

type IDaisyTableProps<TData extends RowData> = Optional<
  TableOptions<TData>,
  "getCoreRowModel"
> & {
  enableTableFooter?: boolean
  enableTableHead?: boolean
  enablePagination?: boolean
  enableToolbar?: boolean
  isLoading?: boolean
  maxHeight?: number
  tableClassName?: string
} & Omit<ITableToolbarProps<TData>, "table">

const DaisyTable = <TData extends RowData>({
  enableTableHead = true,
  enableTableFooter = true,
  enablePagination = true,
  enableToolbar = true,
  columns,
  enableRowSelection,
  onAdd,
  onDelete,
  isLoading,
  maxHeight,
  tableClassName = "",
  ...props
}: IDaisyTableProps<TData>) => {
  const table = useReactTable<TData>({
    enableRowSelection,
    filterFns: {
      fuzzy: fuzzyFilter,
      ...props.filterFns,
    },
    globalFilterFn: props.globalFilterFn ?? fuzzyFilter,
    columns: enableRowSelection ? [selectColumn<TData>(), ...columns] : columns,
    ...props,
    getCoreRowModel: props.getCoreRowModel ?? getDefaultCoreRowModel<TData>(),
    getSortedRowModel: props.getSortedRowModel ?? getDefaultSortedRowModel(),
    getPaginationRowModel: enablePagination
      ? props.getPaginationRowModel ?? getDefaultPaginationRowModel<TData>()
      : undefined,
    getFilteredRowModel:
      props.getFilteredRowModel ?? getDefaultFilteredRowModel(),
    getFacetedRowModel: props.getFacetedRowModel ?? getDefaultFacetedRowModel(),
    getFacetedUniqueValues:
      props.getFacetedUniqueValues ?? getDefaultFacetedUniqueValues(),
    getFacetedMinMaxValues:
      props.getFacetedMinMaxValues ?? getDefaultFacetedMinMaxValues(),
  })

  const emptyClassname =
    table.getRowModel().rows.length === 0 ? " min-h-[200px]" : ""

  return (
    <div className="my-4 flex flex-1 flex-col">
      {enableToolbar && (
        <div className="mb-2 flex flex-col-reverse  sm:justify-end lg:flex-row lg:justify-between">
          <FilterBar<TData> table={table}></FilterBar>
          <div></div>
          <div className="flex gap-x-2">
            <ColumnVisibility<TData> table={table} />
            <ToolBar<TData> table={table} {...{ onAdd, onDelete }} />
          </div>
        </div>
      )}
      <div className="relative flex flex-1">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center  rounded-lg bg-gray-800 !bg-opacity-30">
            <div className="spinner"></div>
          </div>
        )}
        {table.getRowModel().rows.length === 0 && !isLoading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center  rounded-lg">
            <p>No Data</p>
          </div>
        )}
        <div className={`flex  flex-1 overflow-auto `} style={{ maxHeight }}>
          <table
            className={`table-compact my-0  table  w-full ${emptyClassname} ${tableClassName}`}
          >
            {enableTableHead && <TableHead<TData> table={table}></TableHead>}
            <TableBody<TData> table={table}></TableBody>
            {enableTableFooter && (
              <TableFooter<TData> table={table}></TableFooter>
            )}
          </table>
        </div>
      </div>
      {enablePagination && <Pagination<TData> table={table} />}
    </div>
  )
}

export default DaisyTable
