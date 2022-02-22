import styled from "styled-components"
import { InputSign,Submit } from "../LogIn/SignElements"


export const InputPassword = styled(InputSign)`
   margin-bottom:0px;
   margin-top:2px;
   width:60%;
`
export const DivInputs = styled.div`
  display:flex;
  justify-content:center;z
  margin-top:5px;
  margin-bottom:-20px;
  flex-direction:column;
  align-items:center;
  ${props => props.actual === false && 'display:none;'}
`
export const ImageDiv = styled.div`
  margin-top:10px;
  width:50%;
`
export const HeadDiv = styled.div`
   display:flex;
   margin-top:15px;
   justify-content:space-between;
   align-items:center;
   margin-left:auto;
   margin-right:auto;
   height:50px;
   width:90%;
`
export const Container = styled.div`
 width:100%;
 justify-content:center;
`

export const InputPic = styled.input`
  border:0;
  color:transparent;
  background-color:transparent;
  width:12px;
  opacity:0;
  overflow:hidden;
`
export const BtnSubmit = styled(Submit)`
  cursor:pointer;
  width:20%;
`
export const DivSubmits= styled.div`
   margin-bottom:10px;
   margin-top:8px;
   display:flex;
   flex-direction:row;
   justify-content:space-evenly;
` 
export const ButtonOption = styled.button`
   color:white;
   cursor:pointer;
   font-size:22px;
   padding:5px;
   height:30px;
   background-color:transparent;
   border:0;
   outline:0;
`
export const DivImgBtn = styled.div`
 width:100%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 ${props => props.actual === false && 'display:none;'}
`
export const DivEditDelete = styled.div`
 width:100%;
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
`
export const Img = styled.img`
  width:90%;
  height:150px;
  object-fit:cover;
`
export const Label = styled.label`
  cursor:pointer;
  height:30px;
  margin-top:6px;
  display:block;
`