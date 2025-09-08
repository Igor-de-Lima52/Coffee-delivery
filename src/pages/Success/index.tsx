import { useParams } from "react-router-dom";
import { Info, InfoContainer, LocalContainer, PaymentContainer, SuccessContainer, TimerContainer, TopicContainer } from "./styles";
import { useCart } from "../../hooks/useCart";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import delivery from "../../assets/delivery.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { paymentMethod, texts } from "./language";

export function Success(){
  const { isThemeLightOn } = useContext(ThemeContext);

  const { orders } = useCart();

  const { orderId } = useParams();

  const ordersInfo = orders.find(order => order.id === Number(orderId));

  if(!ordersInfo?.id){
    return null;
  }

  return(
    <SuccessContainer>
      <h3>{texts.title}</h3>
      <p>{texts.paragraph1}</p>

      <div>
        <Info>
          <InfoContainer isthemelighton={isThemeLightOn ? isThemeLightOn : undefined}>
            <TopicContainer>
              <LocalContainer>
                <MapPin size={16} weight="fill"/>
              </LocalContainer>
              <div>
                <p>{texts.paragraph2}<span>{ordersInfo?.street}, {ordersInfo?.number}</span></p>
                <span>{ordersInfo?.city}, {ordersInfo?.state}</span>  
              </div>
            </TopicContainer>
            <TopicContainer>
              <TimerContainer>
                <Timer size={16} weight="fill"/>
              </TimerContainer>
              <div>
                <p>{texts.paragraph3}</p>
                <span>20 min - 30 min</span>  
              </div>
            </TopicContainer>
            <TopicContainer>
              <PaymentContainer>
                <CurrencyDollar size={16} weight="fill"/>
              </PaymentContainer>
              <div>
                <p>{texts.paragraph4}</p>
                <span>{paymentMethod[ordersInfo?.paymentMethod]}</span>  
              </div>
            </TopicContainer>
          </InfoContainer>
        </Info>
        <img src={delivery} alt={texts.altTextImage} />
      </div>
    </SuccessContainer>
  )
}