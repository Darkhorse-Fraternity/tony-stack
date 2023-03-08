import DaisyTable, {
  createColumnHelper,
  type Table,
} from "@monad-stack/daisy-react-table"
import React from "react"

import MenuSlider from "~/components/menu-slider"
import { type IPerson, makeData } from "~/lib/fake-data/make-data"
import { type NextPageWithLayout } from "~/types/page"

const MyTable: NextPageWithLayout = () => {
  const [data, setData] = React.useState(() => makeData(100_000))

  const columnHelper = createColumnHelper<IPerson>()

  const columns = [
    columnHelper.accessor("firstName", {
      header: () => "firstName",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => info.getValue(),
      header: () => "lastName",
    }),
    columnHelper.accessor("age", {
      cell: (info) => info.getValue(),
      header: () => "age",
    }),
    columnHelper.accessor("visits", {
      cell: (info) => info.getValue(),
      header: () => "visits",
    }),
    columnHelper.accessor("progress", {
      cell: (info) => info.getValue(),
      header: () => "progress",
    }),
  ]

  const onAdd = () => {
    setData((res) => [...makeData(1), ...res])
  }

  const onDelete = (table: Table<IPerson>) => {
    const rowSelection = table.getState().rowSelection

    setData((res) => res.filter((_, index) => !rowSelection[index]))
    table.resetRowSelection()
  }

  return (
    <>
      <div className="flex  flex-1">
        <DaisyTable
          columns={columns}
          data={data ?? []}
          enableRowSelection
          onAdd={onAdd}
          onDelete={onDelete}
        />
      </div>
    </>
  )
}

MyTable.getLayout = (page) => <MenuSlider>{page}</MenuSlider>

export default MyTable
