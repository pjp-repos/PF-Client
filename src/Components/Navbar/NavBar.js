import React from "react";
import { ContainerNavbar,ButtonNavbar,ContainerButtons,Title,ImgTitle } from "./NavbarElements.js";
import {useNavigate} from "react-router-dom";
import coin from "../../Images/Coin.png"

export default function NavBar(){
  const navigate = useNavigate();
  return (
    <ContainerNavbar>
        <Title > <ImgTitle src = {coin} alt = "coin" /> HenryCoin</Title>
        <ContainerButtons>
          <ButtonNavbar onClick={(e) => navigate("/signin")}>Sign In</ButtonNavbar> 
          <ButtonNavbar onClick={(e) => navigate("/signup")} signup>Sign Up</ButtonNavbar>
        </ContainerButtons>
    </ContainerNavbar>
  )
}