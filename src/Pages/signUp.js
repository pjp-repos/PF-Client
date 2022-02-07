import React from "react";
import { ContainerSignP, ContainerSign,InputSign,LabelSign,Submit,Title,Link} from "../Components/LogIn/SignElements";
import {useNavigate} from "react-router-dom";

const initialState = {
    username: "",
    email:"",
    password:"",
    repeatPassword:""
  }

export default function SignIn(){
  const [signUpState, setSignUpState] = React.useState(initialState);
  const [error, seterror] = React.useState("");
  const navigate = useNavigate();

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
      <Title top = {1} left = {19} size = {25}>Sign Up</Title>
        <Link top = {6} left = {44} size = {25} onClick = {(e) => navigate("../")}>HenryCoin</Link>
        <LabelSign  htmlFor = "username" top = {15}> Username</LabelSign>
        <InputSign top = {20} value = {signUpState.username} id = "username" onChange={handlerState}/>
        <LabelSign  htmlFor = "email" top = {30}> Email</LabelSign>
        <InputSign top = {35}  value = {signUpState.email} id = "email" onChange={handlerState}/>
        <LabelSign  htmlFor = "password" top = {47}>Password</LabelSign>
        <InputSign  type = "password" top = {52}  value = {signUpState.password} id = "password" onChange={handlerState} />
        <LabelSign  htmlFor = "repeatPassword" top = {64}> Repeat Password</LabelSign>
        <InputSign  type = "password" top = {69}  value = {signUpState.repeatPassword} id = "repeatPassword" onChange={handlerState} />
        <Submit top = {82} onClick = {handlerSubmit} >Sign Up</Submit>
        <Title top = {90} left = {27} size = {12}>You Have Account?</Title>
        <Link top = {92} left = {56} size = {12}  onClick = {(e) => navigate("../signin")} >/SignIn</Link>
      </ContainerSign>
    </ContainerSignP>
  )
}