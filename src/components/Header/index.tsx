import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { ActionsContainer, HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header(){
  const navigate = useNavigate();


  function handleNavigate(route: string){
    navigate(`/${route}`);
  }

  return(
    <HeaderContainer>
      <img 
        src={logo} 
        alt="Um copo de café roxo com uma escrita do lado direito dizendo Coffee Delivery" 
        onClick={() => handleNavigate("")}
      />
      <ActionsContainer>
        <button>
          <MapPin weight="fill" size={22}/>
          New York, NY
        </button>
        <button onClick={() => handleNavigate("cart")}>
          <ShoppingCart weight="fill" size={22}/>
        </button>
      </ActionsContainer>
    </HeaderContainer>   
  );
}