const language: string = "portuguese"

let texts = {
  title: "Find the perfect coffee for any time of the day",
  subtitle: "Our coffees",
  paragraph: "With the Coffee Delivery you receive your coffee wherever you are, anytime",
}

switch(language){
  case "portuguese":
    texts = {
      title: "Encontre o café perfeito em qualquer hora do dia",
      subtitle: "Nossos cafés",
      paragraph: "Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.",
    }

    break;
}

export { texts };