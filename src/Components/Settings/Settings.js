
import React, { useState } from "react";
import { Label,InputPassword,DivInputs,HeadDiv,Container,ButtonOption,DivEditDelete,DivImgBtn,InputPic,Img,BtnSubmit,DivSubmits,ImageDiv} from "./SettingsElements";

import {Link, useParams} from 'react-router-dom';


//import Container from '../theme/components/container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
const initialState = {
  image: false,
  password:false,
  theme:false
}

const imgDefault = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg=="
export default function Settings({setIsOpen}) {
    
  let params = useParams();
  const [optionState,setOptionState] = React.useState(initialState);

  const dispatch = useDispatch();

    useEffect(()=>{
        
    },[params.config, dispatch])

    const [imgData, setImgData] = useState(imgDefault);
    const onChangePicture = e => {
      if (e.target.files[0]) {
        console.log("picture: ", e.target.files);
      
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    };

    const changeOption = (keyValue) => {
      setOptionState({
        ...initialState,
        [keyValue]:!optionState[keyValue]
      })
    }
  
    return (

          <Container>
            <form>
                <h2>Settings</h2>
                <HeadDiv>
                  <h3>Edit profile picture</h3>
                  <ButtonOption type = "button" id = "image" onClick={(e) => changeOption(e.target.id)}>{optionState.image ? "-" : "+"}</ButtonOption>    
                </HeadDiv>
                <DivImgBtn actual = {optionState.image}>
                  <ImageDiv >
                    <Img src={imgData} />
                  </ImageDiv>
                  <DivEditDelete>
                    <Label htmlFor="profilePic"> 
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
                    </Label>
                    <InputPic id="profilePic" type="file"  title = "" onChange={onChangePicture} />  
                    <ButtonOption onClick={(e) => setImgData(imgDefault)} type = "button" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg></ButtonOption> 
                  </DivEditDelete>
                </DivImgBtn>
            
                <HeadDiv>
                  <h3> Change Password</h3> 
                  <ButtonOption type = "button" id = "password" onClick={(e) => changeOption(e.target.id)} >{optionState.password ? "-" : "+"}</ButtonOption>
                </HeadDiv>                  
                <DivInputs actual = {optionState.password}>
                  <span>Enter previous password:</span>
                    <InputPassword type='password' />
                    <p/>
                    <span>Enter new password:</span>
                    <InputPassword type='password' />
                    <p/>
                    <span>Enter re-enter new password:</span>
                    <InputPassword type='password' />
                    <p/>
                 </DivInputs>

                 <HeadDiv>
                  <h3>Theme</h3>
                  <ButtonOption type = "button" id = "theme" onClick={(e) => changeOption(e.target.id)}>{optionState.image ? "-" : "+"}</ButtonOption>    
                </HeadDiv>


                <DivSubmits>
                   <BtnSubmit type = "button" onClick = {(e) => setIsOpen(false)}>Close</BtnSubmit>
                   <BtnSubmit>Save</BtnSubmit>
                </DivSubmits>
            </form>
          </Container>
    );
  };
