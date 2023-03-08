import React, { type ButtonHTMLAttributes, type FC } from "react"

export const Button: FC<ButtonHTMLAttributes<never>> = ({
  children,
  ...rest
}) => (
  <button
    type="button"
    className={
      "relative inline-flex items-center rounded-md border" +
      "border-base-300  hover:bg-base-200 px-4 py-2 text-sm  font-medium"
    }
    {...rest}
  >
    {children}
  </button>
)

export const PageButton: FC<ButtonHTMLAttributes<never>> = ({
  children,
  className,
  ...rest
}) => (
  <button
    type="button"
    className={`border-base-300 hover:bg-base-200 relative inline-flex items-center  border px-2 py-2 text-sm  font-medium ${className}`}
    {...rest}
  >
    {children}
  </button>
)
