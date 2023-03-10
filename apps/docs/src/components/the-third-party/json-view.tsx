import dynamic from "next/dynamic"
import { type ReactJsonViewProps } from "react-json-view"

const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false })

const JsonView = (porps: ReactJsonViewProps) => (
  <DynamicReactJson
    style={{ backgroundColor: "transparent" }}
    // theme={isDark ? "colors" : undefined}
    {...porps}
  />
)

export default JsonView
