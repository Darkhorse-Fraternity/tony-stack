import { useIsomorphicLayoutEffect } from "@monad-stack/use-hook-utils"
import toast from "react-hot-toast"

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.info("welcom")
  }, [])

  return (
    <div>
      <h1>Web</h1>
      <button
        className=" btn"
        onClick={() => {
          toast.error("try")
        }}
      >
        show toast
      </button>
    </div>
  )
}
