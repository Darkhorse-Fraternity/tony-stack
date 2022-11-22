import { useAxiosQuery } from "@monad-stack/axios-hook-client"
import classNames from "classnames"
// import { NoSlideMenuLayout } from "components/nav/layout"
// import { DMCError } from "lib/request/error-handle"
// import { useRouter } from "next/router"
import { FC } from "react"
import { NextPageWithLayout } from "types/page"

const LoginLogo: FC = ({}) => (
  <div className="pb-3">
    <div className="flex items-center justify-center">
      <div className="inline-flex  transition-all duration-200">
        <span className=" text-5xl  font-normal lowercase	 ">hire</span>
        <span className="text-5xl  uppercase italic text-yellow-400 ">EZ</span>
      </div>
    </div>
    <h2 className="mt-6 text-center text-3xl font-extrabold ">
      Sign in to your account
    </h2>
  </div>
)

const OKTA: FC = () => {
  const { isFetching, refetch } = useAxiosQuery<string>(
    "/auth/okta-sign-in",
    {},
    {
      enabled: false,
      onSuccess: (url) => {
        window.location.href = url
      },
    }
  )

  return (
    <div className="flex-center mt-5">
      <button
        className={classNames("btn btn-primary w-full", {
          loading: isFetching,
        })}
        onClick={() => {
          refetch()
        }}
      >
        sign in with okta
      </button>
    </div>
  )
}

const Login: NextPageWithLayout = () => {
  // const router = useRouter()
  const { isLoading } = useAxiosQuery(
    "/auth/status",
    {}
    // {
    //   onError: (e: DMCError) => {
    //     const { response } = e || {}
    //   },
    //   onSuccess: ({ Code }: { Code: number; Message: string }) => {
    //     if (Code) {
    //       router.replace(HomeRoute)
    //     }
    //   },
    // }
  )

  return (
    <div className="flex-center flex min-h-full w-full flex-col  py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <LoginLogo />
        {!isLoading ? (
          <>{<OKTA />}</>
        ) : (
          <div className="before:spinner  flex-center min-h-[200px] " />
        )}
      </div>
    </div>
  )
}

// Login.getLayout = (page) => <NoSlideMenuLayout>{page}</NoSlideMenuLayout>

export default Login
