import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import OrderTable from "../Components/Orders/OrderTable/OrderTable"
import { Div } from "../Components/AaaGenerics/PrincipalDiv";

const OrderTablePage = () => {
    return(
        <Div>
            <NavBar/>
            <OrderTable />
        </Div>
    )
 };
 export default OrderTablePage;