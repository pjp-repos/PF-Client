import React, { useState } from "react";
import { Label,LabelError,InputPassword,DivInputs,HeadDiv,ButtonTheme,Container,DivTheme,ButtonOption,DivEditDelete,DivImgBtn,InputPic,Img,BtnSubmit,DivSubmits,ImageDiv} from "./SettingsElements";
import { postSettings ,resetSettingsStatus,toggleTheme} from "../../Redux/Actions/actionCreators";
import { selectSettingsAll,selectSessionImage,selectSessionAll,selectSessionTheme} from "../../Redux/Selectors/selectors";

//import Container from '../theme/components/container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { validatePaswoord } from "./SettingsValidations";
import moonDark from "../../Assets/moonDark.svg"
import moonWhite from "../../Assets/moonWhite.svg"
import lightDark from "../../Assets/lightDark.svg"
import lightWhite from "../../Assets/lightWhite.svg"
import deleteDark from "../../Assets/deleteBlack.svg"
import deleteWhite from "../../Assets/deleteWhite.svg"
import editDark from "../../Assets/editBlack.svg"
import editWhite from "../../Assets/editWhite.svg"

const initialState = {
  image: false,
  password:false,
  theme:false
}
const imgDefault = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
const errorPasswordFormInitial = {
  newPassword:"",
  newPasswordConfirmation:"",
  password:"",
}
const initialStateForm = {
  theme:"dark",
  image:"",
  imageDef:`${imgDefault}`,
  ...errorPasswordFormInitial
}

export default function Settings({setIsOpen,isOpen}) {

  const [optionState,setOptionState] = React.useState(initialState);
  const [stateForm,setStateForm] = React.useState(initialStateForm);
  const [errorSubmit,setErrorSubmit] = React.useState("");
  const [errorPasswordForm,setErrorPasswordForm] = React.useState(errorPasswordFormInitial);
  const settings = useSelector(selectSettingsAll);
  const settingsImg = useSelector(selectSessionImage);
  const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
  const theme = useSelector(selectSessionTheme);
  const dispatch = useDispatch();
  console.log(settingsImg);

    useEffect(()=>{
         setErrorSubmit("");
         setErrorPasswordForm(errorPasswordFormInitial);
         setOptionState(initialState);
         setStateForm({
            ...initialStateForm,
            image:settingsImg,
            theme:theme === true ? "light" : "dark"
         })        
    },[isOpen === true])

    useEffect(() => {
      setIsOpen(false);
      resetSettingsStatus(dispatch);
    },[settings[1] === 2])

    useEffect(() => {
      setErrorSubmit(settings[2].errorMessage)
      resetSettingsStatus(dispatch);
    },[settings[1] === 3])

    const onChangePicture = e => {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        handlerStateForm("image",reader.result);
      }
         
    };

    const changeOption = (keyValue) => {
      if(errorSubmit !== "" && setErrorSubmit(""));
      setOptionState({
        ...initialState,
        [keyValue]:!optionState[keyValue]
      })
    }

    const handlerStateForm = (key,value) => {
     
      if(errorSubmit !== "" && setErrorSubmit(""));
      if(key !== "img" && key !== "theme"){
        setErrorPasswordForm(
          {
            ...errorPasswordForm,
            [key]:validatePaswoord(key,value,stateForm)
          }
        )
      }
      setStateForm({
        ...stateForm,
        [key]:value
      })
    }

    const handlerTheme = (key, value) => {
         toggleTheme(dispatch);
         handlerStateForm(key,value);
    }

    const submit = (e) => {
      let object = {
        image:stateForm.img,
        theme:stateForm.theme === "dark" ? false : true,
        lastPassword:stateForm.password,
        newPassword:stateForm.newPassword
      }
      if(stateForm.password === "" && stateForm.newPassword === "" && stateForm.newPasswordConfirmation === ""){

        postSettings(dispatch,token,{
          passwordChange:false,
          ...object
        })
         
      }else{
          postSettings(dispatch,token,{
            
              passwordChange:true,
              ...object
          })
      }
      
    }
  
    return (

          <Container>
                <h2>Settings</h2>
                <HeadDiv>
                  <h3>Edit profile picture</h3>
                  <ButtonOption type = "button" id = "image" onClick={(e) => changeOption(e.target.id)}>{optionState.image ? "-" : "+"}</ButtonOption>    
                </HeadDiv>
                <DivImgBtn actual = {optionState.image}>
                  <ImageDiv >
                    <Img src={stateForm.image !== "" ? stateForm.image : stateForm.imageDef} />
                  </ImageDiv>
                  <DivEditDelete>
                    <Label htmlFor="img"> 
                    <img height = "38px" src = {stateForm.theme === "dark" ? editWhite : editDark} alt = "delete"/>
                    </Label>
                    <InputPic id="img" type="file" accept="image/png, image/jpeg"   onChange={onChangePicture} />  
                    <ButtonOption onClick={(e) => handlerStateForm("image","")} type = "button" > <img src = {stateForm.theme === "dark" ? deleteWhite : deleteDark} alt = "delete"/></ButtonOption> 
                  </DivEditDelete>
                </DivImgBtn>
            
                <HeadDiv>
                  <h3> Change Password</h3> 
                  <ButtonOption type = "button" id = "password" onClick={(e) => changeOption(e.target.id)} >{optionState.password ? "-" : "+"}</ButtonOption>
                </HeadDiv>                  
                <DivInputs actual = {optionState.password}>
                  <span>Enter previous password:</span>
                    <InputPassword id = "password" type='password' value = {stateForm.password} onChange = {(e) => handlerStateForm(e.target.id,e.target.value)}/>
                    {errorPasswordForm.password !== "" && <LabelError>{errorPasswordForm.password}</LabelError>}
                    <p/>
                    <span>Enter new password:</span>
                    <InputPassword  id = "newPassword" type='password' value = {stateForm.newPassword} onChange = {(e) => handlerStateForm(e.target.id,e.target.value)}  />
                    {errorPasswordForm.newPassword !== "" && <LabelError>{errorPasswordForm.newPassword}</LabelError>}
                    <p/>
                    <span>Enter re-enter new password:</span>
                    <InputPassword  id = "newPasswordConfirmation" type='password'  value = {stateForm.newPasswordConfirmation}  onChange = {(e) => handlerStateForm(e.target.id,e.target.value)}  />
                    {errorPasswordForm.newPasswordConfirmation!== "" && <LabelError>{errorPasswordForm.newPasswordConfirmation}</LabelError>}
                    <p/>
                 </DivInputs>

                 <HeadDiv>
                  <h3>Theme</h3>
                  <ButtonOption type = "button" id = "theme" onClick={(e) => changeOption(e.target.id)}>{optionState.image ? "-" : "+"}</ButtonOption>    
                </HeadDiv>

                <DivTheme actual = {optionState.theme}>
                  <ButtonTheme  type = "button" actual = {stateForm.theme} id ="theme" name = "dark" onClick = {e => handlerTheme(e.target.id,e.target.name)}>
                     <img id = "theme" name= "dark" src = {stateForm.theme === "dark" ? moonWhite : moonDark} alt = "theme"/>
                  </ButtonTheme>
                  <ButtonTheme  type = "button"  actual = {stateForm.theme} id = "theme" name = "light" onClick = {e => handlerTheme(e.target.id,e.target.name)} >
                  <img id = "theme" name = "light" src = {stateForm.theme === "dark" ? lightWhite : lightDark} alt = "theme"/>
                  </ButtonTheme>
                </DivTheme>

                <LabelError>{errorSubmit}</LabelError>
                <DivSubmits>
                   <BtnSubmit type = "button" onClick = {(e) => setIsOpen(false)}>Close</BtnSubmit>
                   <BtnSubmit type = "button" onClick = {submit}>Save</BtnSubmit>
                </DivSubmits>
          </Container>
    );
  };