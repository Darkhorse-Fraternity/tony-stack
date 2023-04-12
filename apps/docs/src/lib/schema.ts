import { z } from "zod"

export const testSchema = z.object({
  account: z.string(),
  password: z.string(),
  content: z.string(),
  date: z.date(),
})
