import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ActionsContainer, HeaderContainer } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <img 
        src={logo} 
        alt="Um copo de café roxo com uma escrita do lado direito dizendo Coffee Delivery" 
      />
      <ActionsContainer>
        <button>
          <MapPin weight="fill" size={22}/>
          Porto Alegre, RS
        </button>
        <button>
          <ShoppingCart weight="fill" size={22}/>
        </button>
      </ActionsContainer>
    </HeaderContainer>   
  );
}