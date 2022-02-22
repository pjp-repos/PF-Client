import React from "react";
import { Column } from "../Home/Table/Column";
import { Container } from "./TransactionsElements";
import { TableT } from "./TransactionsElements";
import { Rowt } from "./TransactionsElements";
import { DivButtons,ButtonOrder } from "../Orders/OrderTable/OrderTableElements";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { sortTransactions } from "../../Redux/Actions/actionCreators";

export default function TransactionsTable({transactionsUser}){
  const dispatch = useDispatch();
  const [currentSortKey, setCurrentSortKey] = React.useState("");

  React.useEffect(() => {
    sortTransactions(dispatch,"");
  },[]);
  
  const handlerSort = (sortKey)=>{
		setCurrentSortKey(sortKey);
		sortTransactions(dispatch,sortKey);
	};
    return (
    <Container>
        <TableT>
            <Rowt head>
                <Column>Id</Column> 
                <Column>OrderId</Column>
                <Column>Symbol
                <DivButtons>
                    <ButtonOrder  onClick={() => handlerSort("symbolAsc")} actual = {currentSortKey} id = "symbolAsc" > { <FaAngleUp/>} </ButtonOrder>
                    <ButtonOrder  onClick={() => handlerSort("symbolDesc")} actual = {currentSortKey} id = "symbolDesc" > { <FaAngleDown/>} </ButtonOrder>
                </DivButtons>
                </Column> 
                <Column>Deposit</Column> 
                <Column>Withdraw</Column> 
                <Column>Date
                  <DivButtons>
                    <ButtonOrder  onClick={() => handlerSort("dateAsc")} actual = {currentSortKey} id = "dateAsc" > { <FaAngleUp/>} </ButtonOrder>
                    <ButtonOrder  onClick={() => handlerSort("dateDesc")} actual = {currentSortKey} id = "dateDesc" > { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                
                </Column>  
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