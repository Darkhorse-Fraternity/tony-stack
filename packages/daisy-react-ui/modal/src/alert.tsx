import { type FC } from "react"
import ReactModal from "react-modal"

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
    // style={customStyles}
    overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center w-full h-full"
    className={"relative my-6 mx-auto w-auto max-w-sm  outline-none"}
    isOpen={isOpen}
  >
    <div
      className="bg-base-100 relative inline-block transform
    overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
    >
      {/* <button className="btn btn-sm btn-circle absolute right-2 top-2">
        ✕
      </button> */}
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:items-cenetr sm:flex">
          <div className="mt-3 text-center  sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-bold">{message}</h3>
          </div>
        </div>
      </div>
      <div className=" bg-white px-4 py-3 sm:flex sm:flex-row-reverse  sm:px-6">
        <button type="button" className="btn" onClick={onClick}>
          YAY!
        </button>
      </div>
    </div>
  </ReactModal>
)
