import React from "react";
import {useNavigate} from "react-router-dom";
import Modal from "../AaaGenerics/Modal/Modal.js";

// Redux issues
import { useSelector,useDispatch } from "react-redux";
import { 
  selectSessionIsAuthenticated, 
  selectSessionToken
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
  DivTitle,
  ImgUser,
} from "./NavbarElements.js";

import { getSingOut } from "../../Redux/Actions/actionCreators.js";

// Assets
import coin from "../../Assets/Images/Coin.png"
import User from "../../Assets/Images/User.png"

export default function NavBar(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectSessionToken);
  // Statess
  const isAuthenticated = useSelector(selectSessionIsAuthenticated);


  return (
    <ContainerNavbar>
        <DivTitle>
          <Title onClick = {(e) => navigate("/home")}> <ImgTitle visibilitySm src = {coin} alt = "coin" /> HenryCoin</Title>
        </DivTitle>
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
               <Option onClick={(e) =>{
                 getSingOut(dispatch,token);
                 navigate("/");
               } }><p>Logout</p></Option>
             </OptionsContainer>
        </UserContainer>
        }
    </ContainerNavbar>
  )
}