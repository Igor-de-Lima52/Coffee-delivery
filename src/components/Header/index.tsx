import logo from "../../assets/logo.svg";
import { MapPin, Moon, ShoppingCart, Sun } from "phosphor-react";
import { ActionsContainer, HeaderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Header(){
  const { isThemeLightOn, toggleTheme } = useContext(ThemeContext);

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
        <button onClick={toggleTheme}>
          {isThemeLightOn ? <Moon/> : <Sun/>}
        </button>
      </ActionsContainer>
    </HeaderContainer>   
  );
}