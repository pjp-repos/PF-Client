import React from "react";
import { ContainerNavbar,ButtonNavbar,ContainerButtons,Title,ImgTitle } from "./NavbarElements.js";
import coin from "../../Images/Coin.png"
export default function NavBar(){
  
  return (
    <ContainerNavbar>
        <Title > <ImgTitle src = {coin} alt = "coin" /> HenryCoin</Title>
        <ContainerButtons>
          <ButtonNavbar>Sign In</ButtonNavbar> 
          <ButtonNavbar signup>Sign Up</ButtonNavbar>
        </ContainerButtons>
    </ContainerNavbar>
  )
}