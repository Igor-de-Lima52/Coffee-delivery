import coffee from "../../assets/coffee.svg";
import { HomeContainer, InfoContainer, MenuContainer, TextContainer } from "./styles";
import { Topics } from "./components/Topics";
import { Card } from "../../components/Card";

import { coffees } from "../../../data.json";

export function Home(){
  return(
    <HomeContainer>
      <InfoContainer>
        <div>
          <TextContainer>
            <h1>Find the perfect coffee for any time of the day</h1>
            <p>With the Coffee Delivery you receive your coffee wherever you are, anytime</p>
          </TextContainer>
          <Topics />
        </div>
        <img src={coffee} />
      </InfoContainer>
      <MenuContainer>
        <h2>Our coffees</h2>
        <div>
        {coffees.map(coffee => (
          <Card key={coffee.id} coffee={coffee}/>
        ))}
        </div>
      </MenuContainer>
    </HomeContainer>
  )
}