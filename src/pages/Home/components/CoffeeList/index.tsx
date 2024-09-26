import { CoffeeItem } from "../../../../components/CoffeeItem";
import { CoffeeListContainer } from "./styles";

export function CoffeeList(){
  return(
    <CoffeeListContainer>
      <CoffeeItem/>
      <CoffeeItem/>
      <CoffeeItem/>
      <CoffeeItem/>
    </CoffeeListContainer>
  )
}