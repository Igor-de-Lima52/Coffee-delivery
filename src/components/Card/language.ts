const language: string = "portuguese"

let coin = "$";

switch(language){
  case "portuguese":
    coin = "R$";
    break;
}

export { coin };