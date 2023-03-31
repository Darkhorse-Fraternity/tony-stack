import { type FC, type PropsWithChildren } from "react"

export const BrandWrap: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="sticky top-0 z-20 hidden items-center gap-2 bg-base-200 bg-opacity-90 px-4 py-2 shadow-sm backdrop-blur lg:flex">
      {children}
    </div>
    <div className="h-4" />
  </>
)
