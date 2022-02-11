import React from "react";
import TransactionsTable from "./TransactionsTable";
import Pagination from "../Home/Pagination/Pagination";
import NavBar from "../Navbar/NavBar";
import { Wallet ,SelectTransactions,ContainerFiltersT } from "./TransactionsElements";
const TRANSACTIONSFORPAGE = 10;
const transaction = [ {
    id:1,
    symbol:"usdt",
    deposit:800,
    withdraw:0,
    update:"09-02-22 22:10"
}
]

const types = ["All","usdt","btc"];

export default function Transactions(){

    const [actualPage, setActualPage] = React.useState(1);
    let topTransactions = TRANSACTIONSFORPAGE * actualPage;
    let initialTransactions = topTransactions - TRANSACTIONSFORPAGE;

  
  return (
    <div >
        <NavBar />
        <ContainerFiltersT>
            <Wallet>Wallet</Wallet>
            <SelectTransactions>
                {
                  types.map(type => <option>{type}</option>)
                }
            </SelectTransactions>
        </ContainerFiltersT>
        <TransactionsTable transactionsUser = {transaction.slice(initialTransactions,topTransactions)}/>
        {transaction.length > 0 && <Pagination totalCryptos = {transaction.length} cryptosForPage = {TRANSACTIONSFORPAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
    </div>
  )
}