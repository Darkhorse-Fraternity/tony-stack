import "styles/globals.css"

// import "lib/config/fortawesome"
import { AlertComponent, ErrorBoundary } from "@monad-stack/ui"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { ClickToComponent } from "click-to-react-component"
import { DaisyToaster } from "components/daisy-hot-toast"
import queryClient from "lib/request/query-client"
// import 'styles/resources.css'
import type { AppProps } from "next/app"
import type { NextPageWithLayout } from "types/page"

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
      <ClickToComponent />
    </QueryClientProvider>
  )
}

export default MyApp
