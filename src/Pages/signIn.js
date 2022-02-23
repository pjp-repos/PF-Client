import React from "react";
import { ContainerSignP, ContainerSign,InputSign,LabelSign,Submit,White,Link,Error} from "../Components/LogIn/SignElements";
import { ButtonGoogle ,GoogleIcon,TextGoogle} from "../Components/LogIn/SignInElements";
import {useNavigate} from "react-router-dom";
import { validateSignIn,validateSubmit } from "../Components/LogIn/ValidateLogin";
import {
  postSignIn,
  resetSignInStatus
} from '../Redux/Actions/actionCreators';
import {selectSignInStatus} from '../Redux/Selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Div } from "../Components/AaaGenerics/PrincipalDiv";

const initialState = {
  username: "",
  password:"",
}

export default function SignIn(){
  const [signinState, setSignInState] = React.useState(initialState);
  const dispatch = useDispatch();
  const [errorSigninState, seterrorSignInState] = React.useState(initialState);
  const [errorSubmit, setErrorSubmit] = React.useState("");
  const status = useSelector(selectSignInStatus);
  const navigate = useNavigate();

  React.useEffect(() => {    
    seterrorSignInState(initialState);
    setSignInState(initialState);
    setErrorSubmit("");
  }, [status === 0])

  React.useEffect(() => {    
    if (status === 2){
      navigate("../home")
      resetSignInStatus(dispatch);
    }
    if (status === 3){
      setErrorSubmit("Error name or password incorrect")
    }
  }, [status])

  const handlerState = (e) => {

       setSignInState({
         ...signinState,
         [e.target.id]:e.target.value
       });
       seterrorSignInState({
           ...errorSigninState,
           [e.target.id]:validateSignIn(e.target.value)
       })  
       if(errorSubmit !== "") setErrorSubmit("");
  }

  const handlerSubmit = async (e) => {
      const error = validateSubmit(errorSigninState,signinState);
      if(error!== "")
        setErrorSubmit(error);
      else{
        await postSignIn(dispatch,signinState);
      }
  }
  
  return (
    <Div>
      <ContainerSignP>
       <ContainerSign>
          <Link  size = {25} onClick = {(e) => navigate("../")}><White>Sign In </White>HenryCoin</Link>
          <LabelSign  right = {40} htmlFor = "username" >Username or email</LabelSign>
          <InputSign  value = {signinState.username} id = "username" onChange={handlerState}/>
          <Error top = {40} >{errorSigninState.username}</Error>
          <LabelSign  right = {54}  htmlFor = "password" top = {58}>Password</LabelSign>
          <InputSign type = "password" autoComplete="on" id = "password" top = {63} value = {signinState.password}  onChange={handlerState} />
          <Error top = {65} >{errorSigninState.password}</Error>
          {errorSubmit !== ""  && <Error top = {72} >{errorSubmit}</Error>}
          <Submit type = "submit" top = {78} onClick = {handlerSubmit}>Sign In</Submit>
          <Link top = {90} left = {24} size = {12}  onClick = {(e) => {
            resetSignInStatus(dispatch);
            navigate("../signup")}} > <White>Don't have an account ?</White> /SignUp</Link>
       </ContainerSign>
      </ContainerSignP>

    </Div>
    
  )
}