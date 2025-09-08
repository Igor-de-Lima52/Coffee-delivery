import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ClockContainer, CoffeeContainer, PackageContainer, ShoppingContainer, TopicsContainer } from "./styles";
import { texts } from "./language";

export function Topics(){
  return(
    <TopicsContainer>
      <div>
        <ShoppingContainer>
          <ShoppingCart weight="fill" size={18}/>
        </ShoppingContainer>
        {texts.shopping}
      </div>
      <div>
        <PackageContainer>
          <Package weight="fill" size={18}/>
        </PackageContainer>
        {texts.package}
      </div>
      <div>
        <ClockContainer>
          <Timer weight="fill" size={18} />
        </ClockContainer>
        {texts.clock}
      </div>
      <div>
        <CoffeeContainer>
          <Coffee weight="fill" size={18} />
        </CoffeeContainer>
        {texts.coffee}
      </div>
    </TopicsContainer>
  );
}