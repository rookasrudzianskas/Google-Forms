import { z } from "zod";

const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;

export const PersonalInfoSchema = z.object({
  name: z.string({required_error: 'Name is required here'}).min(1),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
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
  number: z.string().regex(cardNumberRegex, {message: 'Invalid card number'}),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{4}$/).refine((val) => {
    const [month, year] = val.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date > new Date();
  }, {message: 'Card is expired'}),
  securityCode: z.coerce.number().gte(100).lte(999),
  saveInfo: z.boolean(),
});

export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export const CheckoutInfoSchema = PersonalInfoSchema.merge(DeliveryInfoSchema).merge(PaymentInfoSchema);

export type CheckoutData = z.infer<typeof CheckoutInfoSchema>
