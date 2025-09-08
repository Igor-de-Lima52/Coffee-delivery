const language: string = "portuguese"

let texts = {
  span: "Optional"
};

switch(language){
  case "portuguese":
    texts = {
      span: "Opcional"
    }

    break;
}

export { texts };