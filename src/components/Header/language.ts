const language: string = "portuguese"

let texts = {
  altTextImg: "A purple coffee cup with writing on the right side saying Coffee Delivery",
  city: "New York, NY",
};

switch(language){
  case "portuguese":
    texts = {
      altTextImg: "Um copo de café roxo com uma escrita do lado direito dizendo Coffee Delivery",
      city: "São Paulo, SP",
    }

    break;
}

export { texts };