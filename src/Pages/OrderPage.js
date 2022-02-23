import React from "react";
import Order from "../Components/Orders/Order"
import NavBar from "../Components/Navbar/NavBar";
import { Div } from "../Components/AaaGenerics/PrincipalDiv";


const OrderPage = () => {
    return(
        <Div>
            <NavBar />
            <Order />
        </Div>
    )
 };
 export default OrderPage;