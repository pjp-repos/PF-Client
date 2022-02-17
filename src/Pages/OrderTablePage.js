import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import OrderTable from "../Components/Orders/OrderTable/OrderTable"

const OrderTablePage = () => {
    return(
        <div>
            <NavBar/>
            <OrderTable />
        </div>
    )
 };
 export default OrderTablePage;