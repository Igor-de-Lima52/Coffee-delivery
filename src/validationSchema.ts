import * as zod from "zod";

const language: string = "portuguese"

let data = {
  zipCode: "You must enter a valid zipCode",
  street: "Street is required",
  number: "Number is required",
  neighborhood: "Neighborhood is required",
  city: "City is required",
  state: "Must have 2 characters",
  // paymentMethod: ["credit", "debit", "cash"],
  paymentMethodError: "Choose the payment method",
}

let zipCodeRegex = /^\d{5}(-\d{4})?$/;

switch(language) {
  case "portuguese":
    data = {
      zipCode: "Você deve digitar um CEP válido",
      street: "Rua é obrigatório",
      number: "Número é obrigatório",
      neighborhood: "Bairro é obrigatório",
      city: "Cidade é obrigatório",
      state: "Deve ter 2 caracteres",
      // paymentMethod: ["crédito", "débito", "dinheiro"],
      paymentMethodError: "Escolha o método de pagamento",
    }

    zipCodeRegex = /^\d{5}-?\d{3}$/;

    break;
}

export const schema = zod.object({
  zipCode: zod.string().regex(zipCodeRegex, data.zipCode),
  street: zod.string().min(1, data.street),
  number: zod.number().min(1, data.number),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, data.neighborhood),
  city: zod.string().min(3, data.city),
  state: zod.string().length(2, data.state),
  paymentMethod: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: data.paymentMethodError
  })
})

export type OrderInfo = zod.infer<typeof schema>;
// data.paymentMethod as [string, ...string[]]