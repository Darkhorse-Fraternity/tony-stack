import "../styles/globals.css"
// import 'styles/resources.css'
import type { AppProps } from "next/app"
import { ErrorBoundary } from "@monad-stack/daisy-error-boundary"
import { AlertComponent } from "@monad-stack/daisy-modal"
// import "lib/config/fortawesome"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { DaisyToaster } from "src/components/daisy-hot-toast"
import queryClient from "src/lib/request/query-client"
import { type NextPageWithLayout } from "src/types/page"

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   // eslint-disable-next-line no-console
//   console.log(metric)
// }

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
      </Hydrate>
      <AlertComponent />
      <DaisyToaster containerClassName="h-[1px]" />
      {/* <ClickToComponent /> */}
    </QueryClientProvider>
  )
}

export default MyApp
