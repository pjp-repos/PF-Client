import React from "react";
import { ContainerSignP, ContainerSign,InputSign,LabelSign,Submit,Title} from "../Components/LogIn/SignElements";


const initialState = {
    username: "",
    email:"",
    password:"",
  }

export default function SignIn(){
  const [signUpState, setSignUpState] = React.useState(initialState);
  const [error, seterror] = React.useState("");

  const handlerState = (e) => {
    setSignUpState({
      ...signUpState,
      [e.target.id]:e.target.value
    })
}

const handlerSubmit = (e) => {
   console.log(signUpState);
}

  
  return (
    <ContainerSignP>
      <ContainerSign>
        <Title top = {1} left = {14} color = {'#ededf5'}>Welcome To</Title>
        <Title top = {1} left = {54} color = {'#efb810'}>HenryCoin</Title>
        <LabelSign  htmlFor = "username" top = {20}> Username</LabelSign>
        <InputSign top = {25} value = {signUpState.username} id = "username" onChange={handlerState}/>
        <LabelSign  htmlFor = "email" top = {40}> Email</LabelSign>
        <InputSign top = {45}  value = {signUpState.email} id = "email" onChange={handlerState}/>
        <LabelSign  htmlFor = "password" top = {60}>Password</LabelSign>
        <InputSign  top = {65}  value = {signUpState.password} id = "password" onChange={handlerState} />
        <Submit top = {82} onClick = {handlerSubmit} >Sign Up</Submit>
      </ContainerSign>
    </ContainerSignP>
  )
}