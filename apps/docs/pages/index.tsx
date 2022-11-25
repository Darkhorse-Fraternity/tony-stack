import { useIsomorphicLayoutEffect } from "@monad-stack/use-hook-utils"
import MenuSlider from "components/menu-slider"
import toast from "react-hot-toast"
import { NextPageWithLayout } from "types/page"

const DashBoard: NextPageWithLayout = () => {
  useIsomorphicLayoutEffect(() => {
    console.info("welcome!")
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
        show toast6
      </button>
    </div>
  )
}

DashBoard.getLayout = (page) => <MenuSlider>{page}</MenuSlider>

export default DashBoard
