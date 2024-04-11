import { z } from "zod";
import { loginSchema } from "../../login/schema/loginSchema";

export const signupSchema = z.object({
  ...loginSchema.shape,
  username: z.string().min(3).max(20),
});