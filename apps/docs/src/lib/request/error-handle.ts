// import { SessionStorageKeys } from "lib/config";
import { Alert } from "@monad-stack/daisy-modal"
import { toast } from "react-hot-toast"
import { SessionStorageKeys } from "src/const/enum"

export const signInPath = "/sign-in"
export interface IDMCError {
  response: {
    data: { message?: string; [x: string]: unknown }
    status: number
    statusText?: string
    error?: ""
    errors?: Array<{ message: string }>
    Message?: string
    message?: string
  }
}

let LAST_PATH_NAME = ""
let LAST_MESSAGE: string | undefined

// eslint-disable-next-line sonarjs/cognitive-complexity
export const errorHandler = (error: IDMCError) => {
  const { response } = error

  if (response) {
    const { status, statusText, data, errors, Message, message } = response

    const errorMessage = errors?.map((e) => e.message).join(".\n")
    const errorText =
      errorMessage ||
      response.error ||
      data?.message ||
      Message ||
      message ||
      statusText

    if (
      (!LAST_MESSAGE || LAST_MESSAGE !== errorText) &&
      errorText &&
      status !== 401
    ) {
      toast.error(errorText)
      console.error(errorText)
    }

    if (status === 401 && window.location.pathname !== signInPath) {
      if (
        window.location.pathname !== "/404" &&
        window.location.pathname !== "/401"
      ) {
        LAST_PATH_NAME = window.location.href
      }

      if (LAST_PATH_NAME !== signInPath) {
        sessionStorage.setItem(SessionStorageKeys.DEEP_URL_KEY, LAST_PATH_NAME)
      }

      LAST_MESSAGE = errorText
      setTimeout(() => {
        LAST_MESSAGE = ""
        Alert.show(
          errorText ?? "relogin",
          () => {
            window.location.href = signInPath
          },
          // { nextBtnTitle: "relogin" }
        )
      }, 10)
    }

    // return Promise.reject(errorText)
  }
}

export default errorHandler
