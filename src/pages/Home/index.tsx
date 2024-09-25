import coffee from "../../assets/coffee.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Header } from "../../components/Header";
import { ClockContainer, CoffeeContainer, ContentContainer, HomeContainer, InfoContainer, MenuContainer, PackageContainer, ShoppingContainer, TextContainer, TopicsContainer } from "./styles";
import { CoffeeItem } from "../../components/CoffeeItem";

export function Home(){
  return(
    <HomeContainer>
      <Header />
      <ContentContainer>
        <InfoContainer>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <TopicsContainer>
              <div>
                <ShoppingContainer>
                  <ShoppingCart weight="fill" size={18}/>
                </ShoppingContainer>
                Compra simples e segura
              </div>
              <div>
                <PackageContainer>
                  <Package weight="fill" size={18}/>
                </PackageContainer>
                Embalagem mantém o café intacto
              </div>
              <div>
                <ClockContainer>
                  <Timer weight="fill" size={18} />
                </ClockContainer>
                Entrega rápida e rastreada
              </div>
              <div>
                <CoffeeContainer>
                  <Coffee weight="fill" size={18} />
                </CoffeeContainer>
                O café chega fresquinho até você
              </div>
            </TopicsContainer>
          </TextContainer>
          <img src={coffee} />
        </InfoContainer>
        <MenuContainer>
          <h2>Nossos cafés</h2>
          <CoffeeItem/>
          <CoffeeItem/>
          <CoffeeItem/>
          <CoffeeItem/>
        </MenuContainer>
      </ContentContainer>
    </HomeContainer>
  )
}