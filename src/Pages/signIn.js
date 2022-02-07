import React from "react";
import { ContainerSignP, ContainerSign,InputSign,LabelSign,Submit,Title,Link,Error} from "../Components/LogIn/SignElements";
import { ButtonGoogle ,GoogleIcon} from "../Components/LogIn/SignInElements";
import {useNavigate} from "react-router-dom";
import { validateSignIn } from "../Components/LogIn/ValidateLogin";

const initialState = {
  username: "",
  password:"",
}

export default function SignIn(){
  const [signinState, setSignInState] = React.useState(initialState);
  const [errorSigninState, seterrorSignInState] = React.useState(initialState);
  const navigate = useNavigate();
  const handlerState = (e) => {
       setSignInState({
         ...signinState,
         [e.target.id]:e.target.value
       });
       seterrorSignInState({
           ...errorSigninState,
           [e.target.id]:validateSignIn(e.target.value)
       })  
  }

  const handlerSubmit = (e) => {
      console.log(signinState);
  }
  
  return (
    <ContainerSignP>
       <ContainerSign>
        <Title top = {1} left = {22} size = {25}>Sign In</Title>
        <Link top = {6} left = {44} size = {25} onClick = {(e) => navigate("../")}>HenryCoin</Link>
        <GoogleIcon src="https://img.icons8.com/color/48/000000/google-logo.png" alt = "icon"/>
        <ButtonGoogle>Sign In with Google </ButtonGoogle>
        <LabelSign top = {32} left = {47}>Or</LabelSign>
        <LabelSign  htmlFor = "username" top = {40}>Username or email</LabelSign>
        <InputSign top = {45} value = {signinState.username} id = "username" onChange={handlerState}/>
        <Error top = {52} >{errorSigninState.username}</Error>
        <LabelSign htmlFor = "password" top = {58}>Password</LabelSign>
        <InputSign type = "password" id = "password" top = {63} value = {signinState.password}  onChange={handlerState} />
        <Error top = {70} >{errorSigninState.password}</Error>
        <Submit top = {78} onClick = {handlerSubmit}>Sign In</Submit>
        <Title top = {88} left = {24} size = {12}>You Dont Have Account?</Title>
        <Link top = {90} left = {60} size = {12}  onClick = {(e) => navigate("../signup")} >/SignUp</Link>
      </ContainerSign>
    </ContainerSignP>
  )
}