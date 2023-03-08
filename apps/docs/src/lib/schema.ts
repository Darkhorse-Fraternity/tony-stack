import { z } from "zod"
export const signInSchema = z.object({
  account: z.string(),
  password: z.string(),
})
