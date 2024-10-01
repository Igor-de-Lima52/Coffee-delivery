import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ClockContainer, CoffeeContainer, PackageContainer, ShoppingContainer, TopicsContainer } from "./styles";

export function Topics(){
  return(
    <TopicsContainer>
      <div>
        <ShoppingContainer>
          <ShoppingCart weight="fill" size={18}/>
        </ShoppingContainer>
        Simple and safe purchase
      </div>
      <div>
        <PackageContainer>
          <Package weight="fill" size={18}/>
        </PackageContainer>
        Packaging keeps coffee intact
      </div>
      <div>
        <ClockContainer>
          <Timer weight="fill" size={18} />
        </ClockContainer>
        Fast and tracked delivery
      </div>
      <div>
        <CoffeeContainer>
          <Coffee weight="fill" size={18} />
        </CoffeeContainer>
        The coffee arrives fresh to you
      </div>
    </TopicsContainer>
  );
}