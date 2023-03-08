import { type NextPage } from "next"
import { type ReactElement, type ReactNode } from "react"

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type MenuName = "dashboard"
export type GroupName = "admin"

// export interface SortBy {
//   id: string
//   desc: boolean
// }
// export interface Filter {
//   id: string
//   value: string
// }
// export interface PagenationType {
//   page: number
//   perPage: number
//   filters?: Filter[]
//   sortBy?: SortBy[]
// }
