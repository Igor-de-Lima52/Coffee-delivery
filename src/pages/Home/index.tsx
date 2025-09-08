import coffee from "../../assets/coffee.svg";
import { HomeContainer, InfoContainer, MenuContainer, TextContainer } from "./styles";
import { Topics } from "./components/Topics";
import { Card } from "../../components/Card";

import { products } from "../../../data";
import { texts } from "./language";

export function Home(){
  return(
    <HomeContainer>
      <InfoContainer>
        <div>
          <TextContainer>
            <h1>{texts.title}</h1>
            <p>{texts.paragraph}</p>
          </TextContainer>
          <Topics />
        </div>
        <img src={coffee} />
      </InfoContainer>
      <MenuContainer>
        <h2>{texts.subtitle}</h2>
        <div>
        {products.map(product => (
          <Card key={product.id} coffee={product}/>
        ))}
        </div>
      </MenuContainer>
    </HomeContainer>
  )
}