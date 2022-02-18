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
    resetSignInStatus(dispatch); 
  }, [])

  React.useEffect(() => {    
    if (status === 2)
     navigate("../home")
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
    <ContainerSignP>
       <ContainerSign>
          <Link  size = {25} onClick = {(e) => navigate("../")}><White>Sign In </White>HenryCoin</Link>
          <ButtonGoogle href = "https://pfapi2.herokuapp.com/login/google"><TextGoogle>Sign In With Google</TextGoogle> <GoogleIcon src="https://img.icons8.com/color/48/000000/google-logo.png" alt = "icon"/></ButtonGoogle>
          <LabelSign mtop = {7} mb = {7}>Or</LabelSign>
          <LabelSign  right = {40} htmlFor = "username" >Username or email</LabelSign>
          <InputSign  value = {signinState.username} id = "username" onChange={handlerState}/>
          <Error top = {50} >{errorSigninState.username}</Error>
          <LabelSign  right = {54}  htmlFor = "password" top = {58}>Password</LabelSign>
          <InputSign type = "password" autoComplete="on" id = "password" top = {63} value = {signinState.password}  onChange={handlerState} />
          <Error top = {67} >{errorSigninState.password}</Error>
          {errorSubmit !== ""  && <Error top = {74} >{errorSubmit}</Error>}
          <Submit type = "submit" top = {78} onClick = {handlerSubmit}>Sign In</Submit>
          <Link top = {90} left = {24} size = {12}  onClick = {(e) => navigate("../signup")} > <White>You Dont Have Account?</White> /SignUp</Link>
      </ContainerSign>
    </ContainerSignP>
  )
}