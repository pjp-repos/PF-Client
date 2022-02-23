import React from "react";
import UserHome from "../Components/UserHome/UserHome";
import NavBar from "../Components/Navbar/NavBar";
import { Div } from "../Components/AaaGenerics/PrincipalDiv";

const AuthHome = () => {
    return(
        <Div>
            <NavBar / >
            <UserHome/>
        </Div>
    )
 };
 export default AuthHome;