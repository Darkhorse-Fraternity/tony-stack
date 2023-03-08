import {
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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
import { type TableToolbarProps, ToolBar } from "./toolbar"

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

type IDaisyTableProps<TData extends RowData> = Optional<
  TableOptions<TData>,
  "getCoreRowModel"
> & {
  enableTableFooter?: boolean
  enableTableHead?: boolean
  enablePagination?: boolean
  isLoading?: boolean
} & Omit<TableToolbarProps<TData>, "table">

const DaisyTable = <TData extends RowData>({
  enableTableHead = true,
  enableTableFooter = true,
  enablePagination = true,
  columns,
  enableRowSelection,
  onAdd,
  onDelete,
  isLoading,
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
    getCoreRowModel: props.getCoreRowModel ?? getCoreRowModel<TData>(),
    getSortedRowModel: props.getSortedRowModel ?? getSortedRowModel(),
    getPaginationRowModel:
      props.getPaginationRowModel ?? getPaginationRowModel<TData>(),
    getFilteredRowModel: props.getFilteredRowModel ?? getFilteredRowModel(),
    getFacetedRowModel: props.getFacetedRowModel ?? getFacetedRowModel(),
    getFacetedUniqueValues:
      props.getFacetedUniqueValues ?? getFacetedUniqueValues(),
    getFacetedMinMaxValues:
      props.getFacetedMinMaxValues ?? getFacetedMinMaxValues(),
  })

  const loadingClassname = isLoading
    ? "before:spinner  min-h-[200px]   before:left-1/2  before:top-1/2"
    : ""

  const emptyClassname =
    table.getRowModel().rows.length === 0 && !isLoading
      ? "before:content-['NO_DATA'] before:absolute  min-h-[200px] before:left-1/2  before:top-1/2"
      : ""

  return (
    <div className="my-4 flex flex-1 flex-col">
      <div className="mb-2 flex flex-col-reverse  sm:justify-end lg:flex-row lg:justify-between">
        <FilterBar<TData> table={table}></FilterBar>
        <div></div>
        <div className="flex gap-x-2">
          <ColumnVisibility<TData> table={table} />
          <ToolBar<TData> table={table} {...{ onAdd, onDelete }} />
        </div>
      </div>
      <div className=" flex flex-1 overflow-x-auto">
        <table
          className={`table-compact my-0  table min-h-[200px] w-full ${loadingClassname} ${emptyClassname}`}
        >
          {enableTableHead && <TableHead<TData> table={table}></TableHead>}
          <TableBody<TData> table={table}></TableBody>
          {enableTableFooter && (
            <TableFooter<TData> table={table}></TableFooter>
          )}
        </table>
      </div>
      {enablePagination && <Pagination<TData> table={table} />}
    </div>
  )
}

export default DaisyTable
