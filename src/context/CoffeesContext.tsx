import { createContext, ReactNode, useEffect, useState } from "react";
import traditionalEspresso from "../assets/traditionalEspresso.svg";
import americanEspresso from "../assets/americanEspresso.svg";
import creamyEspresso from "../assets/creamyEspresso.svg";
import icedEspresso from "../assets/icedEspresso.svg";
import coffeeWithMilk from "../assets/coffeeWithMilk.svg";
import latte from "../assets/latte.svg";
import cappuccino from "../assets/cappuccino.svg";
import macchiato from "../assets/macchiato.svg";
import mochaccino from "../assets/mochaccino.svg";
import hotChocolate from "../assets/hotChocolate.svg";
import cuban from "../assets/cuban.svg";
import hawaiian from "../assets/hawaiian.svg";
import arabic from "../assets/arabic.svg";
import irish from "../assets/irish.svg";

interface Coffee{
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
}

interface CoffeeContextType{
  coffeeDish: Coffee[];
  setCoffeeDish: (coffeeDish: Coffee[]) => void;
}

interface CoffeeContextProviderProps{
  children: ReactNode;
}
export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeesContextProvider({ children }: CoffeeContextProviderProps){
  const [coffeeDish, setCoffeeDish] = useState<Coffee[]>([]);
  
  console.log("CoffeesContextProvider rendered");

  useEffect(() => {
    setCoffeeDish(
      [{
        id: 1,
        imageUrl: traditionalEspresso,
        title: "Traditional Espresso",
        description: "The traditional coffee made with hot water and ground grains",
        price: 3.00,
        tags: ["Traditional"],
      },
      {
        id: 2,
        imageUrl: americanEspresso,
        title: "Expresso Americano",
        description: "Diluted espresso, less intense than the traditional",
        price: 3.50,
        tags: ["Traditional"],
      },
      {
        id: 3,
        imageUrl: creamyEspresso,
        title: "Creamy espresso",
        description: "Traditional espresso with creamy foam",
        price: 4.00,
        tags: ["Traditional"],
      },
      {
        id: 4,
        imageUrl: icedEspresso,
        title: "Iced Espresso",
        description: "Drink prepared with espresso coffee and ice cubes",
        price: 4.50,
        tags: ["Traditional", "Iced"],
      },
      {
        id: 5,
        imageUrl: coffeeWithMilk,
        title: "Coffee with milk",
        description: "Half and half traditional espresso with streamed milk",
        price: 4.00,
        tags: ["Traditional", "With milk"],
      },
      {
        id: 6,
        imageUrl: latte,
        title: "Latte",
        description: "A shot of espresso coffee with double the milk and creamy foam",
        price: 4.50,
        tags: ["Traditional", "With milk"],
      },
      {
        id: 7,
        imageUrl: cappuccino,
        title: "Cappuccino",
        description: "Cinnamon drink made from equals parts coffee, milk and foam",
        price: 4.50,
        tags: ["Traditional", "With milk"],
      },
      {
        id: 8,
        imageUrl: macchiato,
        title: "Macchiato",
        description: "Espresso mixed with a little hot milk and foam",
        price: 4.75,
        tags: ["Traditional", "With milk"],
      },
      {
        id: 9,
        imageUrl: mochaccino,
        title: "Mochaccino",
        description: "Espresso with chocolate syrup, a little milk and foam",
        price: 5.00,
        tags: ["Traditional", "With milk"],
      },
      {
        id: 10,
        imageUrl: hotChocolate,
        title: "Hot Chocolate",
        description: "Drink made with chocolate disolved in hot milk and coffee",
        price: 4.00,
        tags: ["Special", "With milk"],
      },
      {
        id: 11,
        imageUrl: cuban,
        title: "Cuban",
        description: "Iced espresso drink with rum, cream and mint",
        price: 4.25,
        tags: ["Special", "Alcoholic", "Iced"],
      },
      {
        id: 12,
        imageUrl: hawaiian,
        title: "Hawaiian",
        description: "Sweet drink made with coffee and coconut milk",
        price: 5.50,
        tags: ["Special"],
      },
      {
        id: 13,
        imageUrl: arabic,
        title: "Arabic",
        description: "Drink made with arabic coffee beans and spices",
        price: 5.00,
        tags: ["Special"],
      },
      {
        id: 14,
        imageUrl: irish,
        title: "Irish",
        description: "Drink made coffee, irish whiskey, sugar and whipped cream",
        price: 6.00,
        tags: ["Special", "Alcoholic"],
      }
    ]
    )
  }, []);

  return(
    <CoffeeContext.Provider value={{ coffeeDish, setCoffeeDish }}>
      { children }
    </CoffeeContext.Provider>
  )
}