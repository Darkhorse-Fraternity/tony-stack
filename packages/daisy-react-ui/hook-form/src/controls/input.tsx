import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from "react"
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form"
// import { Input } from '@hireteammate/hiretual-design'
export type CInputType<T extends FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: Path<T>
  label?: string
  disableLabel?: boolean
  disbaleError?: boolean
  control?: Control<T>
  labelClassName?: string
  fClassName?: string
}

const Input = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  type = "text",
  disableLabel = false,
  disbaleError = false,
  className,
  labelClassName,
  fClassName,
  ...props
}: PropsWithChildren<CInputType<T>>) => (
  <div className={fClassName}>
    {!disableLabel && (
      <label
        className={`label-text cursor-pointer ${labelClassName ?? ""}`}
        htmlFor={name}
      >
        {label ?? name}
      </label>
    )}
    <Controller<T, Path<T>>
      name={name}
      control={control}
      // defaultValue={props.defaultValue}
      render={({ field, fieldState: { error } }) => (
        <>
          <input
            className={` ${className} ${error?.message ? "border-red-500" : ""}
            `}
            id={name}
            type={type}
            {...field}
            onChange={(e) => {
              if (type === "checkbox") {
                field.onChange(e.target.checked)
              } else {
                field.onChange(e.target.value)
              }
            }}
            checked={field.value}
            value={field.value}
            {...props}
          />
          {!disbaleError && Boolean(error?.message) && (
            <p className="mt-2 text-xs lowercase italic text-red-500 first-letter:uppercase">
              {error?.message}
            </p>
          )}
        </>
      )}
    />
  </div>
)

export default Input
