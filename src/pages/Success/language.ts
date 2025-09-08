const language: string = "portuguese"

let texts = {
  title: "Order confirmed",
  paragraph1: "Now just wait and the coffee will soon reach you.",
  paragraph2: "Delivery to ",
  paragraph3: "Approximate delivery time",
  paragraph4: "Payment on delivery",
  altTextImage: "Image of a person on a motorcycle",
}

let paymentMethod = {
  credit: "Credit card",
  debit: "Debit card",
  cash: "Cash",
}

switch(language){
  case "portuguese":
    texts = {
      title: "Pedido confirmado",
      paragraph1: "Agora apenas espere e o café chegará em breve.",
      paragraph2: "Entrega para ",
      paragraph3: "Tempo de entrega aproximado",
      paragraph4: "Pagamento na entrega",
      altTextImage: "Imagem de uma pessoa em cima de uma moto",
    }

    paymentMethod = {
      credit: "Cartão de crédito",
      debit: "Cartão de débito",
      cash: "Dinheiro",
    }
  
    break;
}

export { texts, paymentMethod };