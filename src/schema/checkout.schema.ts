import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

const ex1 = {
  name: "John Doe",
  email: "hi@rokas.com",
}

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

const info: PersonalInfo = PersonalInfoSchema.parse(ex1);

console.log(info);
