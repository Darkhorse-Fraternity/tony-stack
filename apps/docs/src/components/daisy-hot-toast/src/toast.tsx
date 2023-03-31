import { type FC } from "react"
import toast, { ToastIcon, Toaster, type ToasterProps } from "react-hot-toast"

export const DaisyToaster: FC<ToasterProps> = (props) => (
  <Toaster position="top-right" {...props}>
    {(t) => (
      <div
        className={`${
          t.visible
            ? "animate-in fade-in "
            : `animate-out fade-out duration-1000`
        } rounded-t-box rounded-b-box   flex  max-w-sm  items-center  gap-2 bg-base-200 py-2 pl-6 pr-2 shadow-2xl`}
      >
        <ToastIcon toast={t} />
        <div className="ml-2 overflow-hidden text-ellipsis break-words">
          {t.message as string}
        </div>
        <button
          type="button"
          className="btn-ghost btn-sm btn-circle btn"
          onClick={() => toast.dismiss(t.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    )}
  </Toaster>
)
