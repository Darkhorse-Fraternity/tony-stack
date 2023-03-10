/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod"
import { type PropsWithChildren, type PropsWithoutRef, useState } from "react"
import {
  FormProvider,
  useForm,
  useFormContext,
  type UseFormProps,
} from "react-hook-form"
import { type z } from "zod"

export interface IFormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  /** All your form fields */
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

export function FormInside<S extends z.ZodType<any, any>>({
  children,
  submitText,
  onSubmit,
  loading,
  ...props
}: PropsWithChildren<Omit<IFormProps<S>, "schema" | "initialValues">>) {
  const ctx = useFormContext()
  const [formError, setFormError] = useState<string | null>(null)

  if (Object.keys(ctx.formState.errors).length > 0) {
    console.error("ctx.formState.errors", ctx.formState.errors)
  }

  console.info("value", ctx.getValues())

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={ctx.handleSubmit(async (values) => {
        const result = (await onSubmit(values)) || {}

        for (const [key, value] of Object.entries(result)) {
          if (key === FORM_ERROR) {
            setFormError(value as string)
          } else {
            ctx.setError(key, {
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
          className={`btn-ghost btn ${loading ? "loading" : ""}`}
        >
          {submitText}
        </button>
      )}
    </form>
  )
}

function Form<S extends z.ZodType<any, any>>({
  schema,
  initialValues,
  ...props
}: PropsWithChildren<IFormProps<S>>) {
  const ctx = useForm<z.infer<S>>({
    mode: "onBlur",
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: initialValues,
  })

  return (
    <FormProvider {...ctx}>
      <FormInside {...props}></FormInside>
    </FormProvider>
  )
}

export default Form
