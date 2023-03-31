import { type FC, type PropsWithChildren } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  BrandWrap,
  Layout,
  MenuCompact,
  NavBarWrap,
} from "@monad-stack/daisy-layout"

interface IMenuItemProps {
  href: string
  activity: boolean
  //   icon?: IconProp
  name?: string
}

const MenuGroup: FC<IMenuItemProps> = ({ href, activity, name }) => (
  <li>
    <Link
      id={activity ? "active-menu" : ""}
      className={` flex gap-4  ${activity ? "active" : ""}`}
      href={href}
    >
      {/* {icon && (
              <span className="mt-1 h-6 w-6  flex-none">
                <FontAwesomeIcon icon={icon} className={"h-[20px] w-[20px]"} />
              </span>
            )} */}
      <span className="flex-1">{name ?? href}</span>
    </Link>
  </li>
)

const Menu: FC = () => {
  const router = useRouter()
  const currentPath = router.pathname.split("/")[1]

  return (
    <MenuCompact>
      <MenuGroup href={"/"} name={"Toast"} activity={currentPath === ""} />
      <MenuGroup
        href={"/table"}
        name={"Table"}
        activity={currentPath === "table"}
      />
      <MenuGroup
        href={"/form"}
        name={"Form"}
        activity={currentPath === "form"}
      />
    </MenuCompact>
  )
}

const Brand: FC = () => (
  <BrandWrap>
    <Link href="/" className="flex-0 btn-ghost btn px-2">
      Monad Stack Docs
    </Link>
  </BrandWrap>
)

const NavBar: FC = () => (
  <NavBarWrap
    brand={
      <div className="flex items-center gap-2 lg:hidden">
        <Link
          href={"/"}
          aria-current="page"
          aria-label="Homepage"
          className="flex-0 btn-ghost btn px-2 "
        >
          <div className="inline-flex  transition-all duration-200">
            <span className=" text-xl  font-normal lowercase	 ">
              monad-stack
            </span>
            <span className="ml-2 text-xl  uppercase italic text-yellow-400 ">
              Docs
            </span>
          </div>
        </Link>
      </div>
    }
  ></NavBarWrap>
)

const MenuSlider: FC<PropsWithChildren> = ({ children }) => (
  <Layout menu={<Menu />} brand={<Brand></Brand>} navBar={<NavBar></NavBar>}>
    {children}
  </Layout>
)
export default MenuSlider
