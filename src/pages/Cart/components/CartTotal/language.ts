const language: string = "portuguese"

let texts = {
  span1: "Remove",
  coin: "$",
  span2: "Total items",
  formattedCoin: {
    language: "us",
    coin: "USD"
  },
  btnText: "Confirm order"
}

switch(language){
  case "portuguese":
    texts = {
      span1: "Remover",
      coin: "R$",
      span2: "Items totais",
      formattedCoin: {
        language: "pt-br",
        coin: "BRL",
      },
      btnText: "Confirmar pedido",
    }

    break;
}

export { texts };