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
  schema?: S
  onSubmit: (values: z.infer<S>) => Promise<void | IOnSubmitResult>
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"]
  loading?: boolean
}

interface IOnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

export const FORM_ERROR = "FORM_ERROR"

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  loading,
  ...props
}: IFormProps<S>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })
  const [formError, setFormError] = useState<string | null>(null)

  if (ctx.formState.errors) {
    console.error("ctx.formState.errors", ctx.formState.errors)
  }

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
            type="submit"
            disabled={ctx.formState.isSubmitting}
            className={`btn btn-ghost ${loading ? "loading" : ""}`}
          >
            {submitText}
          </button>
        )}
      </form>
    </FormProvider>
  )
}

export default Form
