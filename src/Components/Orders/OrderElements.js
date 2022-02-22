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
export const OrderGraphics = styled(flex)`
  width:90%;
  margin-left:auto;
  margin-right:auto;
  box-shadow: 4px 4px 8px black;
  min-height:500px;
  margin-top:40px;
  margin-bottom:80px;
  @media screen and (max-width:940px){
    width:100%;
   }
   
   @media screen and (max-width:540px){
    width:100%;
    flex-direction:column; 
   }
`
export const DivInfoOrder = styled(flex)`
  flex-direction:Column;
  justify-content:flex-start;
  width:65%;
  height:650px;
  border-radius:10px;
  @media screen and (max-width:540px){
    width:100%; 
    height:300px;
   }
`
export const OrderContainer = styled(flex)`
width:35%;
margin-left: auto;
background-color:var(--second-color);
margin-right:auto;
min-height:500px;
flex-direction:column;
justify-content:flex-start;

@media screen and (max-width:912px){
 width:55%;
}

@media screen and (max-width:540px){
 width:100%; 
 margin-top:10px;
}
@media screen and (min-width:1900px){
 width:25%;
}
`
export const ContainerOptionsOrders = styled(flex)`
  width:100%;
  height:60px;
  
`
export const DivImages = styled(flex)`
  width:100%;
  ${props => props.typeOrder === "Buy" && `flex-direction:row-reverse`};
  height:120px;
  margin-top:20px;
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
 &::-webkit-scrollbar {
  -webkit-appearance: none;
  width:5px;
  background-color: var(--second-color);
}

&::-webkit-scrollbar-thumb {
  background-color: var(--text-color);
  height: 1px;
}
`

export const Image = styled.img`
 width:50%;
 height:100%;
 object-fit:contain;
`
export const DivTrade = styled(flex)`
width:100%;
height:80px;
${props => props.typeOrder === "Buy" && `flex-direction:row-reverse`};
`
export const SubmitDiv = styled(flex)`
position:relative;
justify-content:space-around;
padding-top:12px;
width:90%;
height:280px;
margin-bottom:10px;
text-align:center;
flex-direction:column;
background-color:rgb(20, 21, 26);
border-radius:10px;
${props => props.type === "Limit" && `height:340px`};
`
export const SubmitOrder = styled(Submit)`
  position:relative;
  display:block;
  left:0%;
  cursor:pointer;
  margin-top:34px;
  margin-bottom:20px;
  
 `
 export const DivInfo = styled(flex)`
  width:100%;
  height:20px;
  margin-bottom:5px;
`

export const DivTotal= styled(flex)`
  width:70%;
  height:30px;
  justify-content:space-between;
`
export const Info = styled.span`
${props => props.error && `color:var(--gold-color);margin-bottom:-12px;`};
${props => props.right && `margin-right:${props.right}%`};
`
export const ButtonOption = styled.button`
   border:0;
   outline:0;
   background-color:transparent;
   cursor:pointer;
   font-size:20px;
   color:var(--text-color);
   font-weight:bold;
   font-family: 'Montserrat', sans-serif;
   width:50%;
   height:40px;
   padding:8px;
   ${props => props.actual === props.id && `color:var(--gold-color)`};
   ${props => props.border && props.actual === props.id && `border:1px solid var(--gold-color);width:30%;`};
   ${props => props.border && props.actual !== props.id && `border:1px solid var(--third-color); color:var(--third-color);width:30%`};
`
export const TitleGraphic = styled.h1`
  margin-top:70px;
  @media screen and (max-width:540px){
    margin-top:20px;
   }
`