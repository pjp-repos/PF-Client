import React from "react";
import { ContainerSignP, ContainerSign,InputSign,LabelSign,Submit,Title} from "../Components/LogIn/SignElements";
import { ButtonGoogle ,GoogleIcon} from "../Components/LogIn/SignInElements";

const initialState = {
  username: "",
  errorUsername:"",
  password:"",
  errorPassword:"",
}

export default function SignIn(){
  const [signinState, setSignInState] = React.useState(initialState);
  const handlerState = (e) => {
       setSignInState({
         ...signinState,
         [e.target.id]:e.target.value
       })
  }

  const handlerSubmit = (e) => {
      console.log(signinState);
  }
  
  return (
    <ContainerSignP>
       <ContainerSign>
        <Title top = {1} left = {22} color = {'#ededf5'}>Sign In</Title>
        <Title top = {1} left = {45} color = {'#efb810'}>HenryCoin</Title>
        <GoogleIcon src="https://img.icons8.com/color/48/000000/google-logo.png" alt = "icon"/>
        <ButtonGoogle>Sign In with Google </ButtonGoogle>
        <LabelSign top = {32} left = {47}>Or</LabelSign>
        <LabelSign  htmlFor = "username" top = {40}>Username or email</LabelSign>
        <InputSign top = {45} value = {signinState.username} id = "username" onChange={handlerState}/>
        <LabelSign htmlFor = "password" top = {60}>Password</LabelSign>
        <InputSign id="password" top = {65} value = {signinState.password}  onChange={handlerState} />
        <Submit top = {82} onClick = {handlerSubmit}>Sign In</Submit>
      </ContainerSign>
    </ContainerSignP>
  )
}