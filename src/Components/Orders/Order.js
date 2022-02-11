import React from "react";
import { OrderContainer,ContainerOptionsOrders,
    DivImages,Image,DivTrade,SubmitOrder,SubmitDiv,DivSellBuy,
    InputSellBuy,SelectSellBuy,Info,DivInput,DivInfo,DivTotal,ButtonOption} from "./OrderElements";

const initialState = {
    symbol:"",
    img:'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
}
const stateOrderInitial = {
    type:"Market",
    marketype:"Sell"
}
const options = ["btc","ethe"];
export default function Order(){
    const [errorSubmit, setErrorSubmit] = React.useState("");
    const [stateOrder,setStateOrder] = React.useState(stateOrderInitial);
    const [sell, setSell] = React.useState(initialState);
    const [buy,setBuy] = React.useState(initialState);

    const handleSubmit = () => {
        if((sell.symbol === "" || buy.symbol === ""))
          setErrorSubmit("Error you need select sell crypto and buy crypto");
    }

    const handlerType = (e) => {
         setStateOrder({
             ...stateOrder,
             [e.target.name]:e.target.id
         })
    }

   return (
      <div>
        <OrderContainer>
            <ContainerOptionsOrders>
              <ButtonOption name = "type" onClick = {handlerType} actual = {stateOrder.type} id ="Market">Market</ButtonOption>
              <ButtonOption name = "type" onClick = {handlerType} actual = {stateOrder.type} id = "Limit">Limit</ButtonOption>
            </ContainerOptionsOrders>     
            <DivImages>
               <Image src = {sell.img} alt ="orders"/>
               <Image src = {buy.img} alt = "orders"/>
            </DivImages>
            <DivTrade>
                <DivSellBuy>
                   <SelectSellBuy>
                       {
                          options.map(option => <option>{option}</option>)
                       }
                   </SelectSellBuy>
                </DivSellBuy>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
                <DivSellBuy>
                  <SelectSellBuy>
                      {
                          options.map(option => <option>{option}</option>)
                      }
                       
                   </SelectSellBuy>
                </DivSellBuy>
            </DivTrade>
            <DivInfo>
               <Info></Info>
            </DivInfo>
            <SubmitDiv>
                <DivTotal>
                   <Info>Avaliable</Info>
                   <Info>0 btc</Info>
                </DivTotal>
                <InputSellBuy placeholder="Amount"/>
                { stateOrder.type === "Limit" && <InputSellBuy placeholder="Limit"/> }
                <DivTotal>
                   <Info>Total:</Info>
                   <Info>0 btc</Info>
                </DivTotal>
                { stateOrder.type === "Market" && <ContainerOptionsOrders>
                   <ButtonOption border name = "marketype" onClick = {handlerType} actual = {stateOrder.marketype} id ="Sell">Sell</ButtonOption>
                   <ButtonOption border name = "marketype" onClick = {handlerType} actual = {stateOrder.marketype} id = "Buy">Buy</ButtonOption>
                </ContainerOptionsOrders>     
                }   
                <Info error >{errorSubmit}</Info>
                <SubmitOrder onClick = {handleSubmit}>Get {stateOrder.type}</SubmitOrder>
            </SubmitDiv>
        </OrderContainer>
      </div>
    )
}