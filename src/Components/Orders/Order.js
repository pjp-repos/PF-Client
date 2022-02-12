import React from "react";
import { useNavigate } from "react-router-dom";
import { OrderContainer,ContainerOptionsOrders,
    DivImages,Image,DivTrade,SubmitOrder,SubmitDiv,DivSellBuy,
    InputSellBuy,SelectSellBuy,Info,DivInfo,DivTotal,ButtonOption} from "./OrderElements";
import {
    selectSymbols,
    selectSessionIsAuthenticated,
    selectSessionToken,
    selectPortfolio
 } from "../../Redux/Selectors/selectors";
import { useSelector,useDispatch} from "react-redux";
import {
    getSymbols, getPortfolio
} from '../../Redux/Actions/actionCreators';
import nomoney from "../../Assets/Images/nomoney.png"
import {setSymbol1,setSymbol2,validatePair,validateSubmit} from "./OrderFunctions"


const stateOrderInitial = {
    type:"Market",
    typeOrder:"Sell", 
    amount:0,
    limit:0
}
const stateSymbolsInitial = {
    symbol1:"Crypto",
    symbol1Img:`${nomoney}`,
    symbol1price:0,
    symbol2:"Crypto",
    symbol2Img:`${nomoney}`
}

export default function Order(){
    const [errorSubmit, setErrorSubmit] = React.useState("");
    const [stateOrder,setStateOrder] = React.useState(stateOrderInitial);
    const symbols = useSelector(selectSymbols);
    const [symbolsState, setSymbolsState] = React.useState(stateSymbolsInitial);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectSessionIsAuthenticated);
    const portfolio = useSelector(selectPortfolio);
    const token = useSelector(selectSessionToken);

    React.useEffect(() => {  
      getSymbols(dispatch,token);    
      getPortfolio(dispatch,token);
    }, []);

    const handleSubmit = () => {
        setErrorSubmit("");
        const validate = validateSubmit(stateOrder,symbolsState);

        if(validate !== "")
          setErrorSubmit(validate);
        else{
          const order = {
              buyOrder:stateOrder.typeOrder === "Sell" ? false :true,
              symbol1Id:symbolsState.symbol1,
              symbol2Id:symbolsState.symbol2,
              amount:parseInt(stateOrder.amount),
              marketOrder:stateOrder.type === "Limit" ? false :true,
              priceLimit:parseInt(stateOrder.limit)
          }
          console.log(order);
        }
    }

    const handlerType = (name,value) => {
         setStateOrder({
             ...stateOrder,
             [name]:value
         })
    }

    const handlerSelect = (e) => {
     if(e.target.id === "symbol1")
       setSymbol1(setSymbolsState,portfolio,e,symbolsState);
     else
       setSymbol2(setSymbolsState,symbols,e,symbolsState)    

      console.log(validatePair(symbolsState,e));
    }

   return (
      <div>
        <OrderContainer>
            <ContainerOptionsOrders>
              <ButtonOption name = "type" onClick = {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.type} id ="Market">Market</ButtonOption>
              <ButtonOption name = "type" onClick =  {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.type} id = "Limit">Limit</ButtonOption>
            </ContainerOptionsOrders>     
            <DivImages>
               <Image src = {symbolsState.symbol1Img} alt ="orders"/>
               <Image src = {symbolsState.symbol2Img} alt = "orders"/>
            </DivImages>
            <DivTrade>
                <DivSellBuy>
                   <SelectSellBuy id = "symbol1" value = {symbolsState.symbol1} onChange={handlerSelect}>
                       <option id = "symbol1" disabled>Crypto</option>
                       {
                          portfolio.length > 0 && portfolio.map(option => <option key = {option.symbol} id = "symbol1" value = {option.symbol}>{option.symbol}</option>)
                       }
                   </SelectSellBuy>
                </DivSellBuy>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/></svg>
                <DivSellBuy>
                  <SelectSellBuy id = "symbol2"  value = {symbolsState.symbol2} onChange={handlerSelect} >
                      <option id = "symbol1" disabled>Crypto</option>
                      {
                        symbols.length > 0 && symbols.map(option => <option key = {option.symbol} id = "symbol2" value = {option.symbol}>{option.symbol}</option>)
                      }       
                   </SelectSellBuy>
                </DivSellBuy>
            </DivTrade>
            <DivInfo>
               <Info></Info>
            </DivInfo>
            <SubmitDiv type = {stateOrder.type}>
                <DivTotal>
                   <Info>Avaliable</Info>
                   <Info>{`${symbolsState.symbol1price}  ${symbolsState.symbol1}`} </Info>
                </DivTotal>
                <InputSellBuy id = "amount" type = "number" onChange = {(e) => handlerType(e.target.id,e.target.value)} placeholder="Amount"/>
                { stateOrder.type === "Limit" && <InputSellBuy type = "number" onChange={(e) => handlerType(e.target.id,e.target.value)} id = "limit" placeholder="Limit"/> }
                <DivTotal>
                   <Info>Total:</Info>
                   <Info>0 btc</Info>
                </DivTotal>
                {<ContainerOptionsOrders>
                   <ButtonOption border name = "typeOrder" onClick =  {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.typeOrder} id ="Sell">Sell</ButtonOption>
                   <ButtonOption border name = "typeOrder" onClick =  {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.typeOrder} id = "Buy">Buy</ButtonOption>
                </ContainerOptionsOrders>     
                }   
                <Info error >{errorSubmit}</Info>
                <SubmitOrder onClick = {handleSubmit}>Get {stateOrder.type}</SubmitOrder>
            </SubmitDiv>
        </OrderContainer>
      </div>
    )
}