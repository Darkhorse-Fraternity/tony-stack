import { type FC, type PropsWithChildren } from "react"

export const NavBar: FC<PropsWithChildren & { avatar?: string }> = ({
  avatar,
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
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={"/"}
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn-ghost btn px-2 "
          >
            <div className="inline-flex  transition-all duration-200">
              <span className=" text-xl  font-normal lowercase	 ">baby</span>
              <span className="text-xl  uppercase italic text-yellow-400 ">
                Niu
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-1 md:gap-1 lg:gap-2"></div>
      {Boolean(avatar) && (
        <div className="mr-1 flex-none items-center gap-2">
          <img
            className="  rounded-full object-cover"
            width={30}
            height={30}
            src={avatar}
            alt="avatar"
          />
        </div>
      )}
    </nav>
  </div>
)
