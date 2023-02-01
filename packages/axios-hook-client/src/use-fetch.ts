import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query"
import { Method } from "axios"

import { baseRequest as request } from "./axios-helper"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Variables = Record<string, any>

export const useAxiosQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData
>(
  path: string,
  payload?: Variables,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, QueryKey>,
    "queryKey" | "queryFn"
  >,
  method?: Method
) =>
  useQuery<TQueryFnData, TError, TData, QueryKey>(
    payload ? [path, payload] : [path],
    async () => request({ url: path, payload, method }).then((r) => r.data),
    options
  )

export const useAxiosMutation = <
  TData = unknown,
  TVariables = Variables,
  TError = unknown,
  TContext = unknown
>(
  path: string,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    "mutationKey" | "mutationFn"
  >,
  method: Method = "POST"
) =>
  useMutation<TData, TError, TVariables, TContext>(
    [path],
    async (payload) =>
      request({ url: path, payload, method }).then((r) => r.data),
    options
  )
