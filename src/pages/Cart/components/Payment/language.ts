const language: string = "portuguese"

let texts = {
  span: "Payment",
  paragraph: "The payment is made on delivery. Choose the way you wish pay",
  credit: "Credit card",
  debit: "Debit card",
  cash: "Cash",
}

switch(language){
  case "portuguese":
    texts = {
      span: "Pagamento",
      paragraph: "O pagamento é feito na entrega. Escolha a forma que você deseja pagar",
      credit: "Cartão de crédito",
      debit: "Cartão de débito",
      cash: "Dinheiro",
    }

    break;
}

export { texts };