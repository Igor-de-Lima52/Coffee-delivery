import { coffees } from "./dataEnglish.json";
import { coffees as cafés } from "./dataPortuguese.json";

const language = "portuguese";

let products = coffees;

switch(language) {
  case "portuguese":
    products = cafés;
    break;
}

export { products }