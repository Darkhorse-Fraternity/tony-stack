import dayjs from "dayjs"
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
export type CDatePickType<T extends FieldValues> = DetailedHTMLProps<
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

const DatePick = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  type = "date",
  disableLabel = false,
  disbaleError = false,
  className,
  labelClassName,
  fClassName,
  ...props
}: PropsWithChildren<Omit<CDatePickType<T>, "type">> & {
  type: "date" | "datetime-local"
}) => (
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
      render={({ field, fieldState: { error } }) => {
        const value = field.value as Date
        const dateString = dayjs(value).format(
          type === "date" ? "YYYY-MM-DD" : "YYYY-MM-DDTHH:mm"
        )

        return (
          <>
            <input
              className={` ${className} ${
                error?.message ? "border-red-500" : ""
              }
            `}
              id={name}
              type={type}
              {...field}
              onChange={(e) => {
                const date = new Date(e.target.value)
                field.onChange(date)
              }}
              checked={field.value}
              value={dateString}
              {...props}
            />
            {!disbaleError && Boolean(error?.message) && (
              <p className="mt-2 text-xs lowercase italic text-red-500 first-letter:uppercase">
                {error?.message}
              </p>
            )}
          </>
        )
      }}
    />
  </div>
)

export default DatePick
