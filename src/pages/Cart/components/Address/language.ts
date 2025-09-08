const language: string = "portuguese"

let texts = {
  span: "Delivery Address",
  paragraph: "Type your address where you would like to receive your order",
}

let placeholders = {
  zipCode: "Zip Code",
  street: "Street",
  number: "Number",
  complement: "Complement",
  neighborhood: "Neighborhood",
  city: "City",
  state: "State",
}

switch(language){
  case "portuguese":
    texts = {
      span: "Endereço de entrega",
      paragraph: "Digite o endereço onde gostaria de receber seu pedido",
    }

    placeholders = {
      zipCode: "CEP",
      street: "Rua",
      number: "Número",
      complement: "Complemento",
      neighborhood: "Bairro",
      city: "Cidade",
      state: "Estado",
    }

    break;
}

export { texts, placeholders };