import axios, { AxiosRequestConfig } from "axios"

type BaseRequestOption = AxiosRequestConfig & { payload?: unknown }
export type RequestOption = Omit<BaseRequestOption, "url"> & { path: string }

const baseRequest = ({ payload, method, ...options }: BaseRequestOption) => {
  const mPayload =
    method?.toLocaleLowerCase() === "get"
      ? { params: payload }
      : { data: payload }

  return axios({ ...mPayload, ...options, method, baseURL: "" })
}

export { baseRequest }
