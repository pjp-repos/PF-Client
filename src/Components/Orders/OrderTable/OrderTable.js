import React from "react";
import Pagination from "../../Home/Pagination/Pagination";
import { Container ,TableO,RowO,BannerOrder,DivBanner} from "./OrderTableElements";
import { Column } from "../../Home/Table/Column";




const ORDERFORPAGE = 10;
const order = [{
  Symbol1:"ETH",
  Symbol2:"BTC",
  Amount:18282,
  priceLimit:7138329,
  typeOrder:"Sell",
  StateOrder:"Pending",
},
{
    Symbol1:"USDT",
    Symbol2:"BTC",
    Amount:18282,
    priceLimit:7138329,
    typeOrder:"Sell",
    StateOrder:"Fullfilled",
  }
]

export default function Transactions(){
    const [actualPage, setActualPage] = React.useState(1);
    let topOrders = ORDERFORPAGE * actualPage;
    let initialOrders = topOrders - ORDERFORPAGE;
   
  return (
    
    <Container>
        <DivBanner>
          <BannerOrder>
            <h2>Make A Order</h2>
          </BannerOrder>
        </DivBanner>
        <TableO>
            <RowO head>
                <Column>Symbol1</Column> 
                <Column>symbol2</Column> 
                <Column>Amount</Column> 
                <Column>priceLimit</Column> 
                <Column invisiblemd>Type Order</Column>  
                <Column invisiblemd>State Order</Column>  
                <Column invisiblemd> Edit</Column>  
            </RowO>
           
            {
              order.length > 0  && order.map(orderItem=><RowO >
              <Column>{orderItem.Symbol1}</Column>
              <Column>{orderItem.Symbol2}</Column>
              <Column>{orderItem.Amount}</Column>
              <Column>{orderItem.priceLimit}</Column>
              <Column invisiblemd>{orderItem.typeOrder}</Column>
              <Column invisiblemd>{orderItem.StateOrder}</Column>
              <Column invisiblemd>{orderItem.StateOrder == "Pending" ? "Edit"
              :"Finished"}</Column>
              </RowO>) 
            }
        </TableO>
        { order.length > 0 && <Pagination totalCryptos = {order.length} cryptosForPage = {ORDERFORPAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
    </Container>
  )
}