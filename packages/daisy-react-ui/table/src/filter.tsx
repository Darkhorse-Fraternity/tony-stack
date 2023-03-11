import { rankItem } from "@tanstack/match-sorter-utils"
import { type FilterFn, type RowData, type Table } from "@tanstack/react-table"
import React, { useRef } from "react"

interface IFilterProps<TData extends RowData> {
  table: Table<TData>
}

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value?: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const refOnChange = useRef(onChange)
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      refOnChange.current(value ?? "")
    }, debounce)

    return () => clearTimeout(timeout)
  }, [debounce, value])

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

export const FilterBar = <TData extends RowData>({
  table,
}: IFilterProps<TData>) => (
  <div className="flex  flex-wrap items-center gap-x-2">
    <DebouncedInput
      type="text"
      className="input input-xs mt-1"
      onChange={table.setGlobalFilter}
      placeholder="Search..."
    />
  </div>
)

// Define a default UI for filtering
// export function GlobalFilter<TData extends RowData>({
//   preGlobalFilteredRows,
//   state,
//   setGlobalFilter,
// }: IFilterProps<D>) {
//   const count = preGlobalFilteredRows.length;
//   const [value, setValue] = React.useState(state.globalFilter);
//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   }, 200);

//   return (
//     <label className="label flex items-baseline gap-x-2">
//       <span>Search: </span>
//       <input
//         type="text"
//         className="dmc-form-input"
//         value={value || ""}
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//         placeholder={`${count} records...`}
//       />
//     </label>
//   );
// }

// This is a custom filter UI for selecting
// a unique option from a list
// export function SelectColumnFilter<TData extends RowData>({
//   column: {
//     filterValue,
//     setFilter,
//     preFilteredRows,
//     id,
//     render,
//     filterOptions,
//   },
// }: {
//   column: ColumnInstance<D>;
// }) {
//   // Calculate the options for filtering
//   // using the preFilteredRows
//   const options = React.useMemo(() => {
//     if (filterOptions) {
//       return filterOptions;
//     }
//     const options = new Set<string>();
//     preFilteredRows.forEach((row) => {
//       options.add(row.values[id]);
//     });
//     return [{ label: "all", value: "" }].concat(
//       ...[...options.values()].map((value) => ({ value, label: value })),
//     );
//   }, [id, preFilteredRows, filterOptions]);

//   // Render a multi-select box
//   return (
//     <label className="label mr-2 flex  items-baseline gap-x-2">
//       <span className="mb-2 min-w-[80px] xl:min-w-fit">
//         {render("Header")}:{" "}
//       </span>
//       <RSelect
//         className={`${styles["dmc-react-select"]}  xl:min-w-fit`}
//         options={options}
//         value={filterValue}
//         onChange={(e) => {
//           setFilter(e);
//         }}
//       />
//     </label>
//   );
// }

// export function InputColumnFilter<TData extends RowData>({
//   column: { filterValue, setFilter, id, render },
// }: {
//   column: ColumnInstance<D>;
// }) {
//   // Render a multi-select box
//   return (
//     <label className="label mr-2 flex  items-baseline gap-x-2">
//       <span className="mb-2 min-w-[80px] xl:min-w-fit">
//         {render("Header")}:{" "}
//       </span>
//       <input
//         className="dmc-form-input min-w-[150px] "
//         name={id}
//         id={id}
//         value={filterValue || ""}
//         onChange={(e) => {
//           setFilter(e.target.value ?? undefined);
//         }}
//       />
//     </label>
//   );
// }

// export function DateColumnFilter<
//   D extends Record<string, unknown> = Record<string, unknown>,
// >({
//   column: { filterValue, setFilter, id, render },
// }: {
//   column: ColumnInstance<D>;
// }) {
//   // Render a multi-select box
//   return (
//     <label className="label  flex   gap-x-2">
//       <span className="mb-2 min-w-[80px] ">{render("Header")}: </span>
//       <div className="flex flex-1  flex-wrap gap-2 sm:flex-nowrap">
//         <input
//           className="dmc-form-input max-w-[160px] "
//           name={id}
//           id={id}
//           type="date"
//           value={filterValue?.from ?? ""}
//           onChange={(e) => {
//             setFilter((s: object) => ({
//               ...s,
//               from: e.target.value?.length > 0 ? e.target.value : undefined,
//             }));
//           }}
//         />
//         <span className="label">To</span>
//         <input
//           className="dmc-form-input max-w-[160px] "
//           name={id}
//           id={id}
//           type="date"
//           value={filterValue?.to ?? ""}
//           onChange={(e) => {
//             setFilter((s: object) => ({
//               ...s,
//               to: e.target.value?.length > 0 ? e.target.value : undefined,
//             }));
//           }}
//         />
//       </div>
//     </label>
//   );
// }

// export function FilterBar<TData extends RowData>(
//   props: TableInstance<D> & { disableGlobalFilter?: boolean },
// ) {
//   const { headerGroups, disableGlobalFilter } = props;
//   return (
//     <div className="flex flex-wrap gap-x-2">
//       {!disableGlobalFilter && <GlobalFilter {...props} />}
//       {headerGroups.map((headerGroup) =>
//         headerGroup.headers.map((column) =>
//           column.Filter ? (
//             <div className="mt-2 " key={column.id}>
//               {column.render("Filter")}
//             </div>
//           ) : null,
//         ),
//       )}
//     </div>
//   );
// }

// export const useGlobalMatchSorter = <TData extends RowData>() => {
//   return useCallback((rows: Row<T>[], ids: IdType<T>[], query: string) => {
//     const keys = rows?.[0]?.cells
//       ?.filter?.((res) => !res.column.disableGlobalFilter)
//       .map(({ column }) =>
//         Array.isArray(column.globalFiltersKey)
//           ? column.globalFiltersKey
//           : `values.${column.globalFiltersKey ?? column.id}`,
//       );
//     return matchSorter(rows, query, {
//       keys,
//     });
//   }, []);
// };
