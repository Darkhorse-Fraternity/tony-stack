import { Alert, Modal } from "@monad-stack/daisy-modal"
import { useIsomorphicLayoutEffect } from "@monad-stack/use-hook-utils"
import { useState } from "react"
import toast from "react-hot-toast"
import MenuSlider from "src/components/menu-slider"

import { type NextPageWithLayout } from "~/types/page"

const DashBoard: NextPageWithLayout = () => {
  useIsomorphicLayoutEffect(() => {
    console.info("welcome!")
  }, [])

  const [open, setOpen] = useState(false)

  return (
    <div className="flex gap-4">
      <button
        className=" btn"
        onClick={() => {
          toast.error("try")
        }}
      >
        show toast
      </button>
      <button
        className=" btn"
        onClick={() => {
          Alert.show("hi", () => {
            console.info("hi")
          })
        }}
      >
        show alert
      </button>
      <button
        className=" btn"
        onClick={() => {
          setOpen((r) => !r)
        }}
      >
        show modal
      </button>
      <Modal
        title="Modal"
        isOpen={open}
        onClose={() => setOpen((r) => !r)}
        onSubmit={() => {
          setOpen((r) => !r)
        }}
      >
        <div>test</div>
      </Modal>
    </div>
  )
}

DashBoard.getLayout = (page) => <MenuSlider>{page}</MenuSlider>

export default DashBoard
