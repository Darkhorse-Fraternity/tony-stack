import { QueryClient } from "@tanstack/react-query"

import errorHandler from "./error-handle"

const cacheTime = 60 * 60 * 1000 * 24 * 7 * 10

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
