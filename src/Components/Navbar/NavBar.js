import React from "react";
import { ContainerNavbar,ButtonNavbar,ContainerButtons,Title,ImgTitle ,UserContainer,OptionsContainer,Option} from "./NavbarElements.js";
import {useNavigate} from "react-router-dom";
import coin from "../../Images/Coin.png"
import User from "../../Images/User.png"
import { useSelector } from "react-redux";
import { selectSessionIsAuthenticated } from "../../Redux/Selectors/selectors.js";

export default function NavBar(){
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectSessionIsAuthenticated);
  
  return (
    <ContainerNavbar>
        <Title > <ImgTitle src = {coin} alt = "coin" /> HenryCoin</Title>
        {!isAuthenticated && <ContainerButtons>
        <ContainerButtons>          
          <ButtonNavbar onClick={(e) => navigate("/signin")}>Sign In</ButtonNavbar> 
          <ButtonNavbar onClick={(e) => navigate("/signup")} signup>Sign Up</ButtonNavbar>
        </ContainerButtons>}
        {isAuthenticated && <UserContainer>
              <img src = {User} alt = "coin"/>
             <OptionsContainer className="OptionsContainer">
               <Option><p>Market</p></Option>
               <Option><p>Subscribes</p></Option>
               <Option><p>Orders</p></Option>
               <Option><p>Historial</p></Option>
               <Option><p>Logout</p></Option>
             </OptionsContainer>
        </UserContainer>
        }
    </ContainerNavbar>
  )
}