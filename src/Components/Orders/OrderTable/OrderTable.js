import React from "react";
import Pagination from "../Home/Pagination/Pagination";

const ORDERFORPAGE = 10;

export default function Transactions(){
    const [actualPage, setActualPage] = React.useState(1);
    let topOrders = ORDERFORPAGE * actualPage;
    let initialOrders = topOrders - ORDERSFORPAGE;
   
  return (
    <div >
        
    </div>
  )
}