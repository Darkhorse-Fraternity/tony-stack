import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from "react"
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form"

export type TCheckType<T extends FieldValues> = DetailedHTMLProps<
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
  options?: Array<{ label: string; value: string }>
}

export const Checkboxs = <T extends FieldValues = FieldValues>({
  label,
  name,
  control,
  disableLabel = false,
  disbaleError = false,
  className,
  labelClassName,
  fClassName,
  options = [],
  ...props
}: PropsWithChildren<TCheckType<T>>) => (
  <div className={fClassName}>
    {!disableLabel && (
      <label className={`label-text ${labelClassName ?? ""} `} htmlFor={name}>
        {label || name}
      </label>
    )}
    <Controller<T, Path<T>>
      name={name}
      control={control}
      // defaultValue={props.defaultValue}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className={className} {...props}>
            {options.map(({ label: la, value }) => {
              const values = (field.value ?? []) as string[]

              return (
                <div key={la} className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id={la}
                    {...field}
                    value={value}
                    onChange={(e) => {
                      if (e.target.checked) {
                        field.onChange([...values, value])
                      } else {
                        field.onChange(values.filter((v) => v !== value))
                      }
                    }}
                    className={" checkbox mr-1 "}
                    checked={values.includes(value)}
                  />
                  <label
                    htmlFor={la}
                    className="label-text mr-3 cursor-pointer"
                  >
                    {la}
                  </label>
                </div>
              )
            })}
          </div>

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
