import {
  DatePick,
  Form,
  Input,
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
