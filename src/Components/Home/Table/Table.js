import React from "react";
import { Row } from "./Row";
import { Container,TableC,Coin } from "./TableElements";
import { Column } from "./Column";

export default function Table({cryptos}){
    return (
    <Container>
        <TableC>
            <Row head>
                <Column>Icon</Column> 
                <Column>Symbol</Column> 
                <Column>Name</Column> 
                <Column>Price</Column> 
                <Column>24hr Porc</Column> 
                <Column>Market Cap</Column>
                <Column>24hr Porc</Column>  
            </Row>
           
            {

              cryptos.length > 0  && cryptos.map(crypto =>
              <Row key={crypto.symbol}>
                <Column><Coin src ={crypto.image} alt="icon"/></Column>
                <Column>{crypto.symbol}</Column>
                <Column>{crypto.name}</Column>
                <Column>{crypto.price}</Column>
                <Column>{crypto.price_change_percentage_24h}%</Column>
                <Column>{crypto.market_cap}</Column>
                <Column>{crypto. market_cap_change_percentage_24h}%</Column>
              </Row>) 
            }
        </TableC>
    </Container>
  )
}