// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classnames from "classnames"
import React, { FC, HTMLAttributes, PropsWithChildren } from "react"
import ReactModal, { Props } from "react-modal"

type ComstomModalProps = Props & {
  size?: "small" | "regular" | "large"
  title: string
  footChildren?: React.ReactNode
  mainClassName?: string
  modalContainerClass?: string
}

export const ModalMain: FC<HTMLAttributes<unknown>> = ({
  children,
  className,
}) => <div className={`relative flex-auto p-6 ${className}`}>{children}</div>

export interface IModalFooterType {
  onClose?: () => void
  onSumbimit?: () => void
  doneTitle?: string
  loading?: boolean
  hideSubmitBtn?: boolean
  form?: string
  type?: "submit" | "reset" | "button" | undefined
}

export const ModalFooter: FC<PropsWithChildren<IModalFooterType>> = ({
  children,
}) => (
  <div
    className={`flex flex-row-reverse items-center justify-between rounded-b-xl border-t  border-gray-300 bg-white px-4 py-4  sm:px-6  `}
  >
    {children}
  </div>
)

export const ModalFooterDefaultBtn: FC<IModalFooterType> = ({
  onClose,
  onSumbimit,
  doneTitle,
  hideSubmitBtn,
  loading = false,
  form,
  type,
}) => (
  <div>
    <button className="btn btn-outline mr-2 " type="button" onClick={onClose}>
      Cancel
    </button>
    {hideSubmitBtn ? (
      ""
    ) : (
      <button
        className={classnames("btn btn-primary", { loading })}
        type={type ?? "submit"}
        onClick={onSumbimit}
        form={form}
      >
        {doneTitle ?? "Confirm"}
      </button>
    )}
  </div>
)

export const ModalContainer: FC<
  {
    title: string
    onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void
  } & HTMLAttributes<HTMLDivElement>
> = ({ title, children, className, onClose }) => (
  <div
    className={`relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none  focus:outline-none ${className}`}
  >
    <div className=" flex items-start justify-between rounded-t border-b border-gray-300  p-5">
      <h3 className="text-3xl font-semibold">{title}</h3>
      {onClose && (
        <button className="" onClick={onClose}>
          x
          {/* <FontAwesomeIcon icon={["fas", "xmark"]} className={"h-5 w-5"} /> */}
        </button>
      )}
    </div>
    {children}
  </div>
)

export const Modal: FC<ComstomModalProps & IModalFooterType> = ({
  isOpen,
  children,
  size = "large",
  title,
  loading,
  onClose,
  onSumbimit,
  mainClassName,
  modalContainerClass,
  form,
  footChildren,
  ...props
}) => (
  <ReactModal
    isOpen={isOpen}
    closeTimeoutMS={150}
    ariaHideApp={false}
    overlayClassName="modal-overlay"
    onRequestClose={(e) => {
      if ("key" in e && e.key === "Escape" && onClose) {
        onClose()
      }
    }}
    className={classnames(
      "relative my-6 mx-auto w-auto min-w-[400px] max-w-sm outline-none ",
      { "min-w-sm": size === "small" },
      { "min-w-3xl": size === "regular" },
      { "min-w-6xl": size === "large" }
    )}
    {...props}
  >
    <ModalContainer
      className={classnames(
        ` flex flex-col duration-300 ${modalContainerClass}`,
        {
          "animate-in fade-in slide-in-from-bottom-20": isOpen,
          "animate-out fade-out slide-out-to-bottom-20": !isOpen,
        }
      )}
      title={title}
      onClose={onClose}
    >
      <ModalMain className={mainClassName}>{children}</ModalMain>
      <ModalFooter>
        <ModalFooterDefaultBtn
          onClose={onClose}
          form={form}
          loading={loading}
          onSumbimit={onSumbimit}
          {...props}
        />
        {footChildren}
      </ModalFooter>
    </ModalContainer>
  </ReactModal>
)
