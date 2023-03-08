import { type FC, type PropsWithChildren } from "react"

export const NavBarWrap: FC<PropsWithChildren<{ brand?: JSX.Element }>> = ({
  children,
  brand,
}) => (
  <div
    className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur
  transition-all duration-100"
  >
    <nav className="navbar w-full">
      <div className="flex flex-1 gap-1 lg:gap-2">
        <label
          htmlFor="drawer"
          className="btn-ghost drawer-button btn-square btn lg:hidden"
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        {brand}
      </div>
      {children}
    </nav>
  </div>
)
