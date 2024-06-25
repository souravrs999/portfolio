import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be atleast 2 characters." }),
  email: z.string().email(),
  message: z
    .string()
    .min(5, { message: "Message must be atleast 5 characters." }),
});
