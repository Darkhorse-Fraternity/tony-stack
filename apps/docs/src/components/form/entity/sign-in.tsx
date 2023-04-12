import {
  DatePick,
  Form,
  Input,
  Textarea,
  type IFormProps,
} from "@monad-stack/daisy-hook-form"
import { type z } from "zod"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SignInForm<S extends z.ZodType<any, any>>(
  props: IFormProps<S>,
) {
  return (
    <Form<S> {...props}>
      <Input
        name="account"
        className="input-bordered input w-[400px]"
        fClassName="mb-4 mr-3"
        placeholder="type account"
        disableLabel
      />
      <Input
        name="password"
        className="input-bordered input w-[400px]"
        fClassName="mb-4 mr-3"
        type={"password"}
        placeholder="type password"
        disableLabel
      />
      <Textarea
        name="content"
        className="input-bordered input min-h-[100px] w-[400px] focus:outline-none"
        fClassName="mb-4 mr-3 flex flex-col"
        labelClassName="mb-1"
        placeholder="input content.."
        label="Content:"
      />
      <DatePick
        name="date"
        className="input-bordered input w-[400px]"
        fClassName="mb-4 mr-3"
        type={"datetime-local"}
        placeholder="type password"
        disableLabel
      />

      <button className="btn max-w-xs" type="submit">
        submit
      </button>
    </Form>
  )
}
