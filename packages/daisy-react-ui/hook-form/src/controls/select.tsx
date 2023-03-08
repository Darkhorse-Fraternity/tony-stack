import {
  type DetailedHTMLProps,
  type PropsWithChildren,
  type SelectHTMLAttributes,
} from "react"
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from "react-hook-form"

export type CSelectType<T extends FieldValues> = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  name: Path<T>
  label?: string
  disableLabel?: boolean
  disableError?: boolean
  control?: Control<T>
  labelClassName?: string
  fClassName?: string
}

const Select = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  disableLabel = false,
  disableError = false,
  className,
  labelClassName,
  fClassName,
  children,
  ...props
}: PropsWithChildren<CSelectType<T>>) => (
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
      render={({ field, fieldState: { error } }) => (
        <>
          <select
            className={`${className} ${error?.message ? "border-red-500" : ""}`}
            id={name}
            {...field}
            onChange={(e) => {
              field.onChange(e.target.value)
            }}
            value={field.value}
            {...props}
          >
            {children}
          </select>
          {!disableError && Boolean(error?.message) && (
            <p className="mt-2 text-xs lowercase italic text-red-500 first-letter:uppercase">
              {error?.message}
            </p>
          )}
        </>
      )}
    />
  </div>
)

export default Select
