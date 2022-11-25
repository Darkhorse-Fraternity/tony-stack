import { FC, PropsWithChildren, ReactNode } from "react"

import { SlideMenu } from "./menu"

interface IMenu {
  menu: ReactNode
}

export const Layout: FC<PropsWithChildren & IMenu> = ({ children, menu }) => (
  <div className="drawer-mobile drawer bg-base-100  h-screen">
    <input id="drawer" type="checkbox" className="drawer-toggle" />
    <div
      className="drawer-content "
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
    >
      <div className="p-6 pb-6">
        <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
          <div className="w-full  flex-grow">{children}</div>
        </div>
      </div>
    </div>
    <div
      className="drawer-side"
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
    >
      <label htmlFor="drawer" className="drawer-overlay" />
      <SlideMenu>{menu}</SlideMenu>
    </div>
  </div>
)
