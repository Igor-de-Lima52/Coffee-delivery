const language: string = "portuguese"

let texts = {
  subtitle1: "Complete your order",
  subtitle2: "Selected Coffees",
  alert: "You need to have a minimum one coffee added in the cart",
}

switch(language){
  case "portuguese":
    texts = {
      subtitle1: "Complete seu pedido",
      subtitle2: "Cafés selecionados",
      alert: "Você precisa de no mínimo ter adicionado um café no carrinho"
    }

    break;
}

export { texts };