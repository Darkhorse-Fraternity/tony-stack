import { Layout } from "@monad-stack/ui"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC, PropsWithChildren } from "react"

interface IMenuItemProps {
  href: string
  activity: boolean
  //   icon?: IconProp
  name?: string
}

const MenuGroup: FC<IMenuItemProps> = ({ href, activity, name }) => (
  <div>
    <li>
      <Link href={href}>
        <div
          id={activity ? "active-menu" : ""}
          className={`sveltekit:prefetch flex gap-4  ${
            activity ? `active` : ""
          }`}
        >
          {/* {icon && (
              <span className="mt-1 h-6 w-6  flex-none">
                <FontAwesomeIcon icon={icon} className={"h-[20px] w-[20px]"} />
              </span>
            )} */}
          <span className="my-1 flex-1">{name ?? href}</span>
        </div>
      </Link>
    </li>
  </div>
)

const Menu: FC = () => {
  const router = useRouter()
  const currentPath = router.pathname.split("/")[1]

  return (
    <ul className="menu menu-compact flex flex-col p-0 px-4">
      <nav>
        <MenuGroup
          href={"/"}
          name={"Dashboard1"}
          activity={currentPath === ""}
        />
      </nav>
    </ul>
  )
}

const MenuSlider: FC<PropsWithChildren> = ({ children }) => (
  <Layout menu={<Menu />}>{children}</Layout>
)
export default MenuSlider
