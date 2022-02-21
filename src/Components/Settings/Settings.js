
import React, { useState } from "react";
import { Button } from '../AaaGenerics/Button/Button'
import { Input } from "../AaaGenerics/Input/Input";
import Container from "../AaaGenerics/Sections/Container";

import {Link, useParams} from 'react-router-dom';


//import Container from '../theme/components/container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function Settings(props) {
    
  let params = useParams();

  const dispatch = useDispatch();

    const themeValue = useSelector(state=> state.darkMode);
    console.log(themeValue)
    var config=useSelector(state=> state.darkMode)
    useEffect(()=>{
        
    },[params.config, dispatch])

    const [imgData, setImgData] = useState();
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
  
    return (

          <Container>
            <form>
                <h4>Settings</h4>
                <p className="formTitle">Edit profile picture:</p>
                <div>
                  
                 <Button>
                   <Input id="profilePic" type="file" onChange={onChangePicture} />
                  </Button>
                  
                </div>
                <p/>
                <div >
                  <img src={imgData}  height= '120em' width='150em' />
                </div>
              {/*
                <h4>Set theme (dark/light): </h4>
                    <Button>Dark/Light</Button>
                    <button onClick={() => themeChange('dark')}>Dark Mode</button>
                <button onClick={() => themeChange('light')}>Light Mode</button>
                */
              }                                  
                <p>Change password</p>
                
                    <span>Enter previous password:</span>
                    <Input type='password' />
                    <p/>
                    <span>Enter new password:</span>
                    <Input type='password' />
                    <p/>
                    <span>Enter re-enter new password:</span>
                    <Input type='password' />
                    <p/>
                <Button>Save</Button>
            

            </form>
            </Container>
    );
  };
