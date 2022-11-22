import { FC } from "react"
import ReactModal from "react-modal"

import { AlertIcon } from "./icon"

export interface IAlertType {
  isOpen?: boolean
  onClose: () => void
  onClick: () => void
  message: string
}

export const AlertModal: FC<IAlertType> = ({
  isOpen = false,
  onClose,
  message,
  onClick,
}) => (
  <ReactModal
    ariaHideApp={false}
    shouldCloseOnEsc={true}
    shouldCloseOnOverlayClick={true}
    onRequestClose={onClose}
    overlayClassName="modal-overlay !z-30"
    className={"relative my-6 mx-auto w-auto max-w-sm  outline-none"}
    isOpen={isOpen}
  >
    <div
      className="relative inline-block transform overflow-hidden
    rounded-lg bg-base-100 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
    >
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-cenetr">
          <div className="mx-auto flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:mx-0 ">
            <AlertIcon />
          </div>
          <div className="mt-3 text-center  sm:mt-0 sm:ml-4 sm:text-left">
            <div className="">
              <p className="text-sm text-gray-800">{message}</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6  bg-white">
        <button
          type="button"
          className="!px-2 btn btn-primary btn-small text-white"
          onClick={onClick}
        >
          Confirm
        </button>
        <button
          className="!px-2 btn btn-outline btn-small mr-2 "
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  </ReactModal>
)
