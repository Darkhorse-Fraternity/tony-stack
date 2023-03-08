import { type FC, type PropsWithChildren } from "react"

export const MenuCompact: FC<PropsWithChildren> = ({ children }) => (
  <ul className="menu menu-compact flex flex-col p-0 px-4">{children}</ul>
)
