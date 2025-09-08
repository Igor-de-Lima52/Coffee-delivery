const language: string = "portuguese"

let texts = {
  shopping: "Simple and safe purchase",
  package: "Packaging keeps coffee intact",
  clock: "Fast and tracked delivery",
  coffee: "The coffee arrives fresh to you",
}

switch(language){
  case "portuguese":
    texts = {
      shopping: "Compra simples e segura",
      package: "Embalagem mantém o café intacto",
      clock: "Entrega rápida e rastreada",
      coffee: "O café chega fresco para você",
    }

    break;
}

export { texts };