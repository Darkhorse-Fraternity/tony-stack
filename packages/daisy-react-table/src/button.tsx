// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { HIRETUAL_CDN_URL, HIRETUAL_CDN_URL_DEV } from "config"
// import Image from "next/image"
import React, { ButtonHTMLAttributes, FC } from "react"

export const Button: FC<ButtonHTMLAttributes<never>> = ({
  children,
  ...rest
}) => (
  <button
    type="button"
    className={
      "relative inline-flex items-center rounded-md border" +
      "border-base-300  px-4 py-2 text-sm font-medium  hover:bg-base-200"
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
    className={`relative inline-flex items-center border border-base-300 h-8 rounded-sm
     !mr-2  px-2 py-2 text-sm font-medium  hover:border-blue-6 ${className}`}
    {...rest}
  >
    {children}
  </button>
)

export const FilterButton: FC<
  ButtonHTMLAttributes<never> & {
    formId: string
    reset: () => void
    className?: string
    btnConfirmName?: string
    isShowIcon?: boolean
    btnClassName?: string
    children?: React.ReactNode
  }
> = ({ formId, reset, btnConfirmName, btnClassName, className, children }) => (
  <div className={`btnbox flex items-center ${className}`}>
    {children ?? (
      <button
        form={formId}
        type="submit"
        className={`btn btn-wireframe flex items-center ${btnClassName}`}
      >
        {/* <Image
          src={`${HIRETUAL_CDN_URL}/test-platform/svg/search.svg`}
          alt="searchicon"
          width={16}
          height={16}
        /> */}
        <span className="ml-[10px]">{btnConfirmName ?? "Search"}</span>
      </button>
    )}
    <button
      onClick={reset}
      className="btn-secondary flex items-center ml-3 text-sm"
    >
      Reset
    </button>
  </div>
)

export const FormSaveButton: FC<
  ButtonHTMLAttributes<never> & {
    formId: string
    reset: () => void
    className?: string
    btnText?: { save: string; reset: string }
  }
> = ({ formId, reset, className, btnText }) => (
  <div className={`btnbox flex items-center ${className}`}>
    <button
      form={formId}
      type="submit"
      className="btn btn-primary mr-[12px] flex items-center"
    >
      {btnText?.save ?? "Save"}
    </button>
    <button onClick={reset} className="btn-secondary flex items-center">
      {btnText?.reset ?? "Reset"}
    </button>
  </div>
)

export const AddButton: FC<
  ButtonHTMLAttributes<never> & {
    text?: string
    addNew: () => void
    className?: string
    btnType?: "btn-primary" | "btn-wireframe" | "btn-outline"
  }
> = ({ addNew, btnType, text = "Add New" }) => (
  <div className={`btn gap-2  capitalize mr-4 ${btnType}`} onClick={addNew}>
    {/* <FontAwesomeIcon icon={["fas", "plus"]} className={"h-3 w-3"} /> */}
    {text}
  </div>
)
