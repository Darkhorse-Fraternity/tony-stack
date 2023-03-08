import { QueryClient } from "@tanstack/react-query"

import errorHandler from "./error-handle"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: false,
      onError: errorHandler as (err: unknown) => void,
    },
    mutations: {
      retry: false,
      onError: errorHandler as (err: unknown) => void,
    },
  },
})

export default queryClient
