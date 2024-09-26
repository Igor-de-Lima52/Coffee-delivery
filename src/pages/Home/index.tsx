import coffee from "../../assets/coffee.svg";
import { HomeContainer, InfoContainer, MenuContainer, TextContainer } from "./styles";
import { Topics } from "./components/Topics";
import { CoffeeList } from "./components/CoffeeList";

export function Home(){
  return(
    <HomeContainer>
      <InfoContainer>
        <div>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </TextContainer>
          <Topics />
        </div>
        <img src={coffee} />
      </InfoContainer>
      <MenuContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList/>
      </MenuContainer>
    </HomeContainer>
  )
}