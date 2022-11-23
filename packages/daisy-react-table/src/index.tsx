import { useDebounce, useLocalStorage } from "@monad-stack/use-hook-utils"
import classNames from "classnames"
import React, { PropsWithChildren, useEffect, useRef } from "react"
import {
  Row,
  TableInstance,
  TableOptions,
  TableState,
  useExpanded,
  useFilters,
  useFlexLayout,
  useGlobalFilter,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table"

import { FilterBar, useGlobalMatchSorter } from "./filter"
import { selectionHook } from "./hooks"
import Pagination from "./pagination"
import { TableHeader, TBody } from "./table"
import { ToolBar } from "./toolbar"
// import ColumnHidePage from './column-hide-page'
// import { useDebounce, useLocalStorage } from 'lib/utils'

export interface ITableProperties<T extends Record<string, unknown>>
  extends TableOptions<T> {
  name?: string
  onAdd?: (instance: TableInstance<T>) => void
  onDelete?: (instance: TableInstance<T>) => void
  onClick?: (row: Row<T>) => void
  disableSelection?: boolean
  disableResizing?: boolean
  disablePagination?: boolean
  disableGlobalMatchSorter?: boolean
  isLoading?: boolean
  className?: string
  tableClassName?: string
  tableBoxClassName?: string
  shadowClassName?: string
  onStateChange?: (state: TableState<T>) => void
  totalItem?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ComboTable<T extends Record<string, any>>(
  props: PropsWithChildren<ITableProperties<T>>
) {
  // Use the state and functions returned from useTable to build your UI

  const globalFilter = useGlobalMatchSorter<T>()

  const {
    name,
    onAdd,
    onDelete,
    onClick,
    onStateChange,
    disableSelection = true,
    disableResizing = true,
    isLoading,
    disableGlobalFilter,
    disablePagination,
    disableGlobalMatchSorter = true,
    initialState: initialStateProp,
    data,
    className,
    tableClassName,
    tableBoxClassName,
    ...others
  } = props
  const [initialState, setInitialState] = useLocalStorage(
    name ? `tableState:${name}` : "",
    initialStateProp ?? {}
  )
  const slectHooks = !disableSelection ? [useRowSelect, selectionHook] : []
  const resizeColumnsHooks = !disableResizing
    ? [useFlexLayout, useResizeColumns]
    : []
  const hooks = [
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination, // new
    // useFlexLayout,
    // useResizeColumns,
    ...slectHooks,
    ...resizeColumnsHooks,
  ]
  const instance = useTable(
    {
      ...others,
      data,
      globalFilter: !disableGlobalMatchSorter ? globalFilter : undefined,
      initialState,
      disableGlobalFilter,
    },
    ...hooks
  )
  const { state, getTableProps } = instance

  const debouncedState = useDebounce(state, 500)
  useEffect(() => {
    const { sortBy, filters, pageSize, columnResizing, hiddenColumns } =
      debouncedState

    const val = {
      sortBy,
      filters,
      pageSize,
      columnResizing,
      hiddenColumns,
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    name && setInitialState(val)
  }, [setInitialState, debouncedState, name])

  const onStateChangeRef = useRef(onStateChange)
  onStateChangeRef.current = onStateChange
  useEffect(() => {
    if (onStateChangeRef.current) {
      onStateChangeRef.current(debouncedState)
    }
  }, [debouncedState])

  useEffect(() => {
    if (
      data.length === 0 &&
      !isLoading &&
      state.pageIndex > 0 && // state.pageIndex = state.pageIndex - 1
      props.totalItem !== undefined &&
      props.totalItem >= 0
    ) {
      const maxPageNum = Math.ceil(props.totalItem / state.pageSize) - 1
      state.pageIndex = maxPageNum
    }
  }, [data])

  // Render the UI for your table
  const { ...othertable } = getTableProps()

  return (
    <>
      <div className=" flex flex-1  sm:justify-end lg:flex-row lg:justify-between">
        <FilterBar {...instance} disableGlobalFilter={disableGlobalFilter} />
        <div className="mb-2 flex gap-x-2">
          {/* <ColumnHidePage {...instance} /> */}
          <ToolBar instance={instance} {...{ onAdd, onDelete }} />
        </div>
      </div>
      <div
        className={`mt-2 flex flex-col relative ${
          Boolean(className) ? className : ""
        }`}
      >
        {/* <div  className={`table-box-shadow ${
            shadowClassName ? shadowClassName : ''
          } ${isScrollRight ? 'hidden' : ''}`}></div> */}
        <div
          className={`w-full table-box overflow-x-auto z-0 ${
            tableBoxClassName ?? ""
          }`}
        >
          <table
            {...othertable}
            className={classNames(
              `table w-full ${tableClassName ?? ""}`,
              {
                "before:spinner  min-h-[200px] before:abs-center": isLoading,
              },
              {
                "before:content-['NO_DATA'] before:absolute  min-h-[200px] before:left-1/2  before:top-1/2":
                  !isLoading && data.length === 0,
              }
            )}
          >
            <TableHeader {...instance} />
            <TBody {...instance} onClick={onClick} />
          </table>
        </div>
      </div>
      {data.length > 0 && !disablePagination ? (
        <Pagination {...instance} />
      ) : (
        ""
      )}
    </>
  )
}

export default ComboTable
