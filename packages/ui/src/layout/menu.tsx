import { FC, PropsWithChildren } from "react"

export const SlideMenu: FC<PropsWithChildren> = ({ children }) => (
  <aside className="bg-base-200 w-80 pb-20">
    <div className="bg-base-200 sticky top-0  z-20 items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex">
      <a className=" font-mono text-xs  font-bold ">Monad Docs</a>
    </div>
    {/* <UserInfo /> */}
    <div className="h-4" />
    {children}
  </aside>
)
