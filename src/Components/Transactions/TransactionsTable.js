import React from "react";
import { Column } from "../Home/Table/Column";
import { Container } from "./TransactionsElements";
import { TableT } from "./TransactionsElements";
import { Rowt } from "./TransactionsElements";



export default function TransactionsTable({transactionsUser}){
    return (
    <Container>
        <TableT>
            <Rowt head>
                <Column>Id</Column> 
                <Column>OrderId</Column>
                <Column>Symbol</Column> 
                <Column>Deposit</Column> 
                <Column>Withdraw</Column> 
                <Column>Date</Column>  
                <Column>Time</Column>
            </Rowt>
           
            {
              transactionsUser.length > 0  && transactionsUser.map(transaction=><Rowt >
              <Column>{transaction.id}</Column>
              <Column>{transaction.orderId}</Column>
              <Column><img src={transaction.image} height='20px'/>{transaction.symbol}</Column>
              <Column>{transaction.deposit % 1 === 0 ? transaction.deposit : transaction.deposit.toFixed(6)}</Column>
              <Column>{transaction.withdraw % 1 === 0 ? transaction.withdraw : transaction.withdraw.toFixed(6)}</Column>
              <Column >{transaction.date}</Column>
              <Column>{transaction.time}</Column>
              </Rowt>) 
            }
        </TableT>
    </Container>
  )
}