import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ActionsContainer, HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header(){
  const navigate = useNavigate();

  function handleGoToCart(){
    navigate("/cart");
  }

  return(
    <HeaderContainer>
      <img 
        src={logo} 
        alt="Um copo de café roxo com uma escrita do lado direito dizendo Coffee Delivery" 
      />
      <ActionsContainer>
        <button>
          <MapPin weight="fill" size={22}/>
          New York, NY
        </button>
        <button onClick={handleGoToCart}>
          <ShoppingCart weight="fill" size={22}/>
        </button>
      </ActionsContainer>
    </HeaderContainer>   
  );
}