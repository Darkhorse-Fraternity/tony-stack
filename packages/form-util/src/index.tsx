/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod"
import { PropsWithoutRef, ReactNode, useState } from "react"
import { FormProvider, useForm, UseFormProps } from "react-hook-form"
import { z } from "zod"

export interface IFormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText?: string
  submitBtnClass?: string
  schema?: S
  onSubmit: (values: z.infer<S>) => Promise<void | IOnSubmitResult>
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"]
}

interface IOnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

export const FORM_ERROR = "FORM_ERROR"

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  submitBtnClass,
  schema,
  initialValues,
  onSubmit,
  ...props
}: IFormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })
  const [formError, setFormError] = useState<string | null>(null)
  // console.log('errors', ctx.formState.errors)
  // console.log('xx', ctx.getValues());

  return (
    <FormProvider {...ctx}>
      <form
        onSubmit={ctx.handleSubmit(async (values) => {
          const result = (await onSubmit(values)) || {}

          for (const [key, value] of Object.entries(result)) {
            if (key === FORM_ERROR) {
              setFormError(value)
            } else {
              ctx.setError(key as any, {
                type: "submit",
                message: value,
              })
            }
          }
        })}
        onReset={() => ctx.reset(initialValues, { keepDefaultValues: true })}
        className="form"
        {...props}
      >
        {/* Form fields supplied as children are rendered here */}
        {children}

        {formError && (
          <div role="alert" style={{ color: "red" }}>
            {formError}
          </div>
        )}
        {submitText && (
          <button
            className={submitBtnClass ?? "btn"}
            type="submit"
            disabled={ctx.formState.isSubmitting}
          >
            {submitText}
          </button>
        )}
      </form>
    </FormProvider>
  )
}

export default Form
