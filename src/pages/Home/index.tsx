import coffee from "../../assets/coffee.svg";
import { Header } from "../../components/Header";
import { ContentContainer, HomeContainer, InfoContainer, MenuContainer, TextContainer } from "./styles";
import { Topics } from "./components/TopicsContainer";
import { CoffeeList } from "./components/CoffeeList";

export function Home(){
  return(
    <HomeContainer>
      <Header />
      <ContentContainer>
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
      </ContentContainer>
    </HomeContainer>
  )
}