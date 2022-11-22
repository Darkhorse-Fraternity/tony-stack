import { FC } from "react"
import { UsePaginationInstanceProps, UsePaginationState } from "react-table"

import { PageButton } from "./button"
import { ChevronLeftIcon, ChevronRightIcon, DotsCross } from "./icons"

const judgeShowbBtn = (index: number, current: number, all: number) => {
  const flag = 7

  if (all < flag || index === 0 || index === all - 1) {
    return "btn"
  }

  if (Math.abs(current - index) < 3) {
    return "btn"
  } else if (index === 1 || index === all - 2) {
    return (
      <div key={index}>
        <DotsCross />
      </div>
    )
  }

  return ""
}

const Pagination: FC<
  Omit<UsePaginationInstanceProps<never>, "page"> & {
    state: UsePaginationState<never>
    totalItem?: number
  }
> = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  state,
  pageOptions,
  setPageSize,
  gotoPage,
  totalItem,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageGoHandle = (e: any) => {
    const val = Number(e.target.value)

    if (e.code === "Enter" && val > 0) {
      gotoPage(val - 1)
    }
  }

  return (
    <div className="flex items-center justify-end py-5">
      {/* <div className="flex flex-1 justify-between sm:hidden">
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </Button>
      </div> */}
      {totalItem && (
        <div className="mr-4">
          <span>Total:</span> <span className="font-medium">{totalItem}</span>
        </div>
      )}
      <nav
        className="pagination-nav relative z-0 inline-flex -space-x-px rounded-md"
        aria-label="Pagination"
      >
        {/* <PageButton
          className="rounded-l-md"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <span className="sr-only">First</span>
          <ChevronDoubleLeftIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </PageButton> */}

        <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
          <span className="sr-only mr-2">Previous</span>
          <ChevronLeftIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </PageButton>
        {pageOptions?.map((item, index) => {
          const result = judgeShowbBtn(
            index,
            state.pageIndex,
            pageOptions.length
          )

          return result === "btn" ? (
            <PageButton
              key={index}
              onClick={() => gotoPage(index)}
              className={index === state.pageIndex ? "btn-pa-active" : ""}
            >
              <span className="w-5 h-5">{index + 1}</span>
            </PageButton>
          ) : (
            result
          )
        })}
        <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
          <span className="sr-only ml-2">Next</span>
          <ChevronRightIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </PageButton>
        {/* <PageButton
          className="rounded-r-md"
          onClick={() => gotoPage( - 1)}
          disabled={!canNextPage}
        >
          <span className="sr-only">Last</span>
          <ChevronDoubleRightIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </PageButton> */}
      </nav>

      <div className="ml-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-x-2">
          {/* <label className="text-sm label">
            <span className=" mr-2">Page</span>
            <span className="font-medium mr-1">
              {state.pageIndex + 1}
            </span> of{' '}
            <span className="font-medium ml-1"> {pageOptions?.length}</span>
          </label> */}
          <label>
            <select
              className="h-8 min-h-0 bg-white font-normal dmc-form-select select-bordered  select block w-full rounded-sm"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}/page
                </option>
              ))}
            </select>
          </label>
          {/* go to page  */}
          <div className="flex items-center ml-2">
            <span className="">Go to</span>
            <input
              className="w-12 h-8 p-2 text-center border border-gray-400 ml-2 rounded-sm outline-none focus:border-blue-6"
              type="number"
              min={1}
              onKeyUp={(e) => pageGoHandle(e)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
