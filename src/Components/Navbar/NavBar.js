import React from "react";
import {useNavigate} from "react-router-dom";

// Redux issues
import { useSelector } from "react-redux";
import { 
  selectSessionIsAuthenticated, 
  selectSessionUsername 
} from "../../Redux/Selectors/selectors.js";

// Styled components 
import { 
  ContainerNavbar,
  ButtonNavbar,
  ContainerButtons,
  Title,
  ImgTitle,
  UserContainer,
  OptionsContainer,
  Option,
  ImgUser,
} from "./NavbarElements.js";

// Assets
import coin from "../../Assets/Images/Coin.png"
import User from "../../Assets/Images/User.png"

export default function NavBar(){
  const navigate = useNavigate();
  // Statess
  const isAuthenticated = useSelector(selectSessionIsAuthenticated);
  const username = useSelector(selectSessionUsername);
  
  return (
    <ContainerNavbar>

        <Title > <ImgTitle visibilitySm src = {coin} alt = "coin" /> HenryCoin</Title>
        {!isAuthenticated && <ContainerButtons>
          <ButtonNavbar onClick={(e) => navigate("/signin")}>Sign In</ButtonNavbar> 
          <ButtonNavbar onClick={(e) => navigate("/signup")} signup>Sign Up</ButtonNavbar>
        </ContainerButtons>}
        {isAuthenticated && 
         <UserContainer>
              <ImgUser src = {User} alt = "coin"/>
             <OptionsContainer className="OptionsContainer">
               <Option onClick={(e) => navigate("/")}><p>Market</p></Option>
               <Option onClick={(e) => navigate("/subscriptions")}><p>Subscribe</p></Option>
               <Option onClick={(e) => navigate("/order")}><p>Orders</p></Option>
               <Option onClick={(e) => navigate("/transactions")}><p>Historial</p></Option>
               <Option><p>Logout</p></Option>
             </OptionsContainer>
        </UserContainer>
        }
    </ContainerNavbar>
  )
}