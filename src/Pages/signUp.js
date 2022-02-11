import React from "react";
import { ContainerSignP, ContainerSign,InputSign,LabelSign,Submit,Link,Error,White} from "../Components/LogIn/SignElements";
import {useNavigate} from "react-router-dom";
import { validateSignUp,validateSubmit } from "../Components/LogIn/ValidateLogin";
import {
  postNewAccount,
  resetNewAccountStatus
} from '../Redux/Actions/actionCreators';
import {
  selectNewAccountStatus,
  selectNewAccountError
} from '../Redux/Selectors/selectors';

import {useDispatch,useSelector } from 'react-redux';

const initialState = {
    username: "",
    email:"",
    password:"",
    repeatPassword:""
  }

export default function SignIn(){
  const [signUpState, setSignUpState] = React.useState(initialState);
  const dispatch = useDispatch();
  const [error, seterror] = React.useState(initialState);
  const [errorSubmit, setErrorSubmit] = React.useState("");
  const navigate = useNavigate();
  const status = useSelector(selectNewAccountStatus);
  const errorFetch = useSelector(selectNewAccountError);

  React.useEffect(() => {    
    resetNewAccountStatus(dispatch); 
  }, [])
  React.useEffect(() => {
   if(status === 2)
    navigate("../signin");
   if(status === 3){
     console.log(status)
     console.log(errorFetch);
     setErrorSubmit("Username or email already exist");
   }
  },[status])

  const handlerState = (e) => {
    
    setSignUpState({
      ...signUpState,
      [e.target.id]:e.target.value
    })
    seterror({
        ...error,
        [e.target.id]:validateSignUp(e.target.id,e.target.value,signUpState)
    })  
    if(errorSubmit !== "") setErrorSubmit("");
}


const handlerSubmit = (e) => {
  const errorSub = validateSubmit(error,signUpState);
  if(errorSub !== "")
  setErrorSubmit(errorSub);
  else{
    postNewAccount(dispatch,signUpState);
  }
}

   return (
    <ContainerSignP>
      <ContainerSign>
        <Link top = {6} left = {18} size = {25} onClick = {(e) => navigate("../")}><White>Sign Up </White>HenryCoin</Link>
        <LabelSign right = {53} htmlFor = "username" > Username</LabelSign>
        <InputSign top = {20} value = {signUpState.username} id = "username" onChange={handlerState}/>
        <Error top = {27} >{error.username}</Error>
        <LabelSign right = {60}  htmlFor = "email" top = {30}> Email</LabelSign>
        <InputSign top = {35}  value = {signUpState.email} id = "email" onChange={handlerState}/>
        <Error top = {43} >{error.email}</Error>
        <LabelSign  right = {55} htmlFor = "password" top = {47}>Password</LabelSign>
        <InputSign  type = "password" autoComplete="on" top = {52}  value = {signUpState.password} id = "password" onChange={handlerState} />
        <Error top = {59} >{error.password}</Error>
        <LabelSign right = {42}  htmlFor = "repeatPassword" top = {64}> Repeat Password</LabelSign>
        <InputSign  type = "password" autoComplete="on" top = {69}  value = {signUpState.repeatPassword} id = "repeatPassword" onChange={handlerState} />
        <Error top = {76} >{error.repeatPassword}</Error>
        {errorSubmit !== "" && <Error top = {79} >{errorSubmit}</Error> }
        <Submit top = {82} onClick = {handlerSubmit} >Sign Up</Submit>
        <Link top = {92} left = {28} size = {12}  onClick = {(e) => navigate("../signin")} ><White>You have an account? </White>/SignIn</Link>
      </ContainerSign>
    </ContainerSignP>
  )
}