import * as zod from "zod";

const zipCodeRegex = /^\d{5}(-\d{4})?$/;

export const schema = zod.object({
  zipCode: zod.string().regex(zipCodeRegex, "You must enter a valid zipCode"),
  street: zod.string().min(1, "Street is required"),
  number: zod.number().min(1, "Number is required"),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, "Neighborhood is required"),
  city: zod.string().min(3, "City is required"),
  state: zod.string().length(2, "Must have 2 characters"),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Choose the payment method"
  })
})

export type OrderInfo = zod.infer<typeof schema>;