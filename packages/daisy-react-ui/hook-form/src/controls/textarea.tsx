import {
  type DetailedHTMLProps,
  type PropsWithChildren,
  type TextareaHTMLAttributes,
} from "react"
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form"

// import { Input } from '@hireteammate/hiretual-design'
export type CTextareaType<T extends FieldValues> = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  name: Path<T>
  label?: string
  disableLabel?: boolean
  disbaleError?: boolean
  control?: Control<T>
  labelClassName?: string
  fClassName?: string
}

const Textarea = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  disableLabel = false,
  disbaleError = false,
  className,
  labelClassName,
  fClassName,
  ...props
}: PropsWithChildren<CTextareaType<T>>) => (
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
          <textarea
            className={` ${className} ${error?.message ? "border-red-500" : ""}
            `}
            id={name}
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
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

export default Textarea
