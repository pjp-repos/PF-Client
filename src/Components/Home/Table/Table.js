import React from "react";
import { Row } from "./Row";
import { Container,TableC,Coin } from "./TableElements";
import { Column } from "./Column";
import { useDispatch,useSelector } from "react-redux";
import { selectGlobalPricesCurrency,selectGlobalPricesOrder } from "../../../Redux/Selectors/selectors";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { DivButtons,ButtonOrder } from "../../Orders/OrderTable/OrderTableElements";
import { orderGlobalPrices,getGlobalPrices } from "../../../Redux/Actions/actionCreators";

export default function Table({cryptos}){
  const dispatch = useDispatch();
  const currency = useSelector(selectGlobalPricesCurrency);
  const order = useSelector(selectGlobalPricesOrder);

  const handlerOrder = (keyValue) => {
    console.log(keyValue);
    orderGlobalPrices(dispatch,keyValue); 
    getGlobalPrices(dispatch,currency);   
  }

    return (
    <Container>
        <TableC>
            <Row head>
                <Column >Icon</Column> 
                <Column>Symbol
                  <DivButtons>
                     <ButtonOrder onClick={() => handlerOrder("symbolAsc")} actual = {order} id = "symbolAsc" > { <FaAngleUp/>} </ButtonOrder>
                     <ButtonOrder onClick={() => handlerOrder("symbolDesc")} actual = {order} id = "symbolDesc"> { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column> 
                <Column >Name</Column> 
                <Column>Price
                  <DivButtons>
                     <ButtonOrder onClick={() => handlerOrder("priceAsc")} actual = {order} id = "priceAsc" > { <FaAngleUp/>} </ButtonOrder>
                     <ButtonOrder onClick={() => handlerOrder("priceDesc")} actual = {order} id = "priceDesc"> { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column> 
                <Column >24hr Porc</Column> 
                <Column>Market Cap
                  <DivButtons>
                     <ButtonOrder onClick={() => handlerOrder("marketAsc")} actual = {order} id = "marketAsc" > { <FaAngleUp/>} </ButtonOrder>
                     <ButtonOrder onClick={() => handlerOrder("marketDesc")} actual = {order} id = "marketDesc"> { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column>
                <Column>24hr Porc</Column>  
            </Row>
           
            {

              cryptos.length > 0  && cryptos.map(crypto =>
              <Row key={crypto.symbol}>
                <Column ><Coin src ={crypto.image} alt="icon"/></Column>
                <Column>{crypto.symbol}</Column>
                <Column >{crypto.name}</Column>
                <Column>{crypto.price}</Column>
                <Column >{crypto.price_change_percentage_24h}%</Column>
                <Column>{crypto.market_cap}</Column>
                <Column>{crypto. market_cap_change_percentage_24h}%</Column>
              </Row>) 
            }
        </TableC>
    </Container>
  )
}