import { useParams } from "react-router-dom";
import { Info, InfoContainer, LocalContainer, PaymentContainer, SuccessContainer, TimerContainer, TopicContainer } from "./styles";
import { useCart } from "../../hooks/useCart";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import delivery from "../../assets/delivery.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function Success(){
  const { isThemeLightOn } = useContext(ThemeContext);

  const { orders } = useCart();

  const { orderId } = useParams();

  const ordersInfo = orders.find(order => order.id === Number(orderId));

  const paymentMethod = {
    credit: "Credit card",
    debit: "Debit card",
    cash: "Cash",
  }

  if(!ordersInfo?.id){
    return null;
  }

  return(
    <SuccessContainer>
      <h3>Order confirmed</h3>
      <p>Now just wait and the coffee will soon reach you.</p>

      <div>
        <Info>
          <InfoContainer isthemelighton={isThemeLightOn ? isThemeLightOn : undefined}>
            <TopicContainer>
              <LocalContainer>
                <MapPin size={16} weight="fill"/>
              </LocalContainer>
              <div>
                <p>Delivery to <span>{ordersInfo?.street}, {ordersInfo?.number}</span></p>
                <span>{ordersInfo?.city}, {ordersInfo?.state}</span>  
              </div>
            </TopicContainer>
            <TopicContainer>
              <TimerContainer>
                <Timer size={16} weight="fill"/>
              </TimerContainer>
              <div>
                <p>Approximate delivery time</p>
                <span>20 min - 30 min</span>  
              </div>
            </TopicContainer>
            <TopicContainer>
              <PaymentContainer>
                <CurrencyDollar size={16} weight="fill"/>
              </PaymentContainer>
              <div>
                <p>Payment on delivery</p>
                <span>{paymentMethod[ordersInfo?.paymentMethod]}</span>  
              </div>
            </TopicContainer>
          </InfoContainer>
        </Info>
        <img src={delivery} alt="Imagem de uma pessoa em cima de uma moto" />
      </div>
    </SuccessContainer>
  )
}