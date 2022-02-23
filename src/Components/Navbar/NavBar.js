import React from "react";
import {useNavigate} from "react-router-dom";
import Modal from "../AaaGenerics/Modal/Modal.js";
import Settings from "../Settings/Settings"

// Redux issues
import { useSelector,useDispatch } from "react-redux";
import { 
  selectSessionIsAuthenticated, 
  selectSessionToken,
  selectSessionImage
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

import { getSingOut, resetSignInStatus } from "../../Redux/Actions/actionCreators.js";


// Assets
import coin from "../../Assets/Images/Coin.png"
const img= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="

export default function NavBar(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectSessionToken);
  const settingsImg = useSelector(selectSessionImage);
  // Statess
  const isAuthenticated = useSelector(selectSessionIsAuthenticated);
  const [isOpen,setIsOpen]=React.useState(false);




  return (
    <ContainerNavbar>
        <DivTitle>
          <Title onClick = {(e) => navigate("/home")}> <ImgTitle visibilitySm src = {coin} alt = "coin" /> HenryCoin</Title>
        </DivTitle>
        <Modal show={isOpen} >
         
         <Settings setIsOpen={setIsOpen}/>
         
       </Modal>
        {!isAuthenticated && <ContainerButtons>
          <ButtonNavbar onClick={(e) => navigate("/signin")}>Sign In</ButtonNavbar> 
          <ButtonNavbar onClick={(e) => navigate("/signup")} signup>Sign Up</ButtonNavbar>
        </ContainerButtons>}
        {isAuthenticated && 
         <UserContainer>
              <ImgUser src = {settingsImg === "" ? img : settingsImg} alt = "coin"/>
             <OptionsContainer className="OptionsContainer">
               <Option onClick={(e) => navigate("/")}><p>Market</p></Option>
               <Option onClick={(e) => navigate("/subscriptions")}><p>Subscribe</p></Option>
               <Option onClick={(e) => navigate("/order")}><p>Orders</p></Option>
               <Option onClick={(e) => navigate("/transactions")}><p>Historial</p></Option>
               <Option onClick={(e) => setIsOpen(true)}><p>Settings</p></Option>
               <Option onClick={(e) =>{
                 resetSignInStatus(dispatch);
                 getSingOut(dispatch,token);
                 navigate("/");
               } }><p>Logout</p></Option>
             </OptionsContainer>
        </UserContainer>
        }
    </ContainerNavbar>
  )
}