import styled from "styled-components"
import {Select} from "../Home/Filters/Selects/SelectElements"
import { InputSign ,Submit} from "../LogIn/SignElements"

const flex = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
font-size:15px;
`
export const OrderContainer = styled(flex)`
margin-top:20px;
margin-bottom:4%;
width:30%;
box-shadow: 4px 4px 8px black;
margin-left: auto;
background-color: #181A20;
margin-right:auto;
min-height:500px;
flex-direction:column;
justify-content:flex-start;

@media screen and (max-width:912px){
 width:55%;
}

@media screen and (max-width:540px){
 width:90%; 
}
@media screen and (min-width:1900px){
 width:25%;
}
`
export const ContainerOptionsOrders = styled.div`
  width:100%;
  height:60px;
  margin-bottom:2%;
  margin-top:6%;
`
export const DivImages = styled(flex)`
  width:100%;
  height:120px;
`
export const DivSellBuy = styled(flex)`
  width:47%;
  height:100%;
`

export const InputSellBuy = styled(InputSign)`
position:relative;
left:0;
margin-bottom:6%;
width:72%;
height:50px;
`
export const SelectSellBuy = styled(Select)`
 cursor:pointer;
`

export const Image = styled.img`
 width:50%;
 height:100%;
 object-fit:contain;
`
export const DivTrade = styled(flex)`
width:100%;
height:80px;
`
export const SubmitDiv = styled(flex)`
position:relative;
justify-content:space-around;
padding-top:10px;
width:90%;
height:300px;
background-color:blue;
margin-bottom:10px;
text-align:center;
flex-direction:column;
background-color:rgb(20, 21, 26);
border-radius:10px;
`
export const SubmitOrder = styled(Submit)`
  position:relative;
  display:block;
  left:0%;
  margin-top:34px;
  margin-bottom:20px;
  
 `
 export const DivInfo = styled(flex)`
  width:100%;
  height:20px;
  margin-bottom:2px;
`

export const DivTotal= styled(flex)`
  width:70%;
  height:30px;
  justify-content:space-between;
`
export const Info = styled.span`
${props => props.error && `color:#efb810`};
${props => props.right && `margin-right:${props.right}%`};
`
export const ButtonOption = styled.button`
   border:0;
   outline:0;
   background-color:transparent;
   cursor:pointer;
   font-size:20px;
   color:white;
   font-weight:bold;
   font-family: 'Montserrat', sans-serif;
   width:50%;
   height:40px;
   padding:8px;
   ${props => props.actual === props.id && `color:#efb810`};
   ${props => props.border && props.actual === props.id && `border:1px solid #efb810;width:30%;`};
   ${props => props.border && props.actual !== props.id && `border:1px solid #474D57; color:#474D57;width:30%`};
`