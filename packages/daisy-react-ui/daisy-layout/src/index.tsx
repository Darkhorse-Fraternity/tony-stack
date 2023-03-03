import { type FC, type PropsWithChildren } from "react"

import { Brand } from "./brand"
import { MenuCompact } from "./menu"

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="drawer-mobile drawer bg-base-100  h-screen">
    <input id="drawer" type="checkbox" className="drawer-toggle" />
    <div
      className="drawer-content "
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
    >
      <div className="px-6 pb-16 xl:pr-2">
        <div className="flex flex-col-reverse justify-between gap-6 xl:flex-row">
          <div className="prose w-full max-w-4xl flex-grow">{children}</div>
        </div>
      </div>
    </div>
    <div
      className="drawer-side"
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
    >
      <label htmlFor="drawer" className="drawer-overlay" />
      <aside className="bg-base-200 w-80">
        <Brand>
          <a href="/admin" className="flex-0 btn-ghost btn px-2">
            doc
          </a>
        </Brand>
        <MenuCompact>
          <a href="/admin">Account</a>
        </MenuCompact>
      </aside>
    </div>
  </div>
)
