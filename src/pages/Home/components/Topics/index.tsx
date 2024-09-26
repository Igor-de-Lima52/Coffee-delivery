import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ClockContainer, CoffeeContainer, PackageContainer, ShoppingContainer, TopicsContainer } from "./styles";

export function Topics(){
  return(
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
  );
}