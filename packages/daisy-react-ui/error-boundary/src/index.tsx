import React, { type FC, type PropsWithChildren } from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"

export class CodeError {
  code = 400

  message = ""

  constructor(code: number, message: string) {
    this.code = code
    this.message = message
    // 👇️ because we are extending a built-in class
    // Object.setPrototypeOf(this, CodeError.prototype)
  }
}
const ErrorComponent: FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  error: Error
}> = ({ onClick, error }) => (
  <div
    className="
  flex
  h-screen
  items-center
  justify-center
"
  >
    <div className="rounded-md bg-base-100 px-40 py-20 shadow-2xl">
      <div className="flex flex-col items-center">
        <h6 className="text-base-900 mb-2 text-center text-2xl font-bold md:text-3xl">
          <span className="text-error">Oops!</span>{" "}
          {error?.message ?? "there is an error!"}
        </h6>

        <button
          type="button"
          className="btn-primary btn mt-2"
          onClick={onClick}
        >
          Try again?
        </button>
      </div>
    </div>
  </div>
)

const CodeErrorComponent: FC<{
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  error: CodeError
}> = ({ onClick, error }) => {
  if (error.code === 401) {
    return (
      <div
        className="
  flex
  h-screen
  items-center
  justify-center
"
      >
        <div className="rounded-md bg-base-100 px-40 py-20 shadow-2xl">
          <div className="flex flex-col items-center">
            <h1 className="text-base-900 mb-2 text-center font-bold ">
              Please login first
            </h1>
            <button
              type="button"
              className="btn-primary btn mt-2"
              onClick={onClick}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => (
  <ReactErrorBoundary
    // onReset={reset}
    onError={(error) => {
      console.error("ErrorBoundary", error)
    }}
    fallbackRender={({ resetErrorBoundary, error }) => {
      if (error instanceof CodeError) {
        return (
          <CodeErrorComponent
            onClick={() => resetErrorBoundary()}
            error={error}
          />
        )
      }

      return (
        <ErrorComponent onClick={() => resetErrorBoundary()} error={error} />
      )
    }}
  >
    {children}
  </ReactErrorBoundary>
)

export default ErrorBoundary
