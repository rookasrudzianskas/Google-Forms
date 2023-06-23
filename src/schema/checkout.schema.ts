import { z } from "zod";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;

export const DeliveryInfoSchema = z.object({
  city: z.string().min(1),
  postalCode: z.string().min(1),
  address: z.string().min(1),
  shippingMethod: z.enum(["free", "fast", "rocket"]),
})
