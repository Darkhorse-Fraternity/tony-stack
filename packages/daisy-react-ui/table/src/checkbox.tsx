import React from "react"

// eslint-disable-next-line react/display-name
const IndeterminateCheckbox = React.forwardRef<
  HTMLInputElement,
  { indeterminate?: boolean } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>(({ indeterminate, className, ...rest }, ref) => {
  const defaultRef = React.useRef<
    HTMLInputElement & { indeterminate?: boolean }
  >()
  const resolvedRef = (ref || defaultRef) as typeof defaultRef
  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      resolvedRef.current.indeterminate = !rest.checked && indeterminate
    }
  }, [resolvedRef, indeterminate, rest.checked])

  return (
    <input
      ref={resolvedRef as typeof ref}
      className={`checkbox cursor-pointer ${className ?? ""}`}
      type="checkbox"
      {...rest}
    />
  )
})

export default IndeterminateCheckbox
