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
});

export type DeliveryInfo = z.infer<typeof DeliveryInfoSchema>;

export const PaymentInfoSchema = z.object({
  number: z.string().min(1),
  expirationDate: z.string().min(1),
  securityCode: z.string().min(1),
  saveInfo: z.boolean(),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;
