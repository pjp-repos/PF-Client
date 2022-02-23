import styled from "styled-components"


export const ContainerSelects = styled.div`
  margin-left:10px;
`
export const ContainerSelectTooltip= styled.div`
 display:inline-block;
 position:relative;
 &:hover .Tooltip{
  top:-110%;
  visibility:visible;
  opacity: 1;
  z-index: 2;
 }
 &:hover .Select{
    border-color:  var(--gold-color);
 }
`
export const Select = styled.select`
   color: ${props => props.theme.textColor};
   width:130px;
   height:40px;
   background-color: ${props => props.theme.firstColor};
   text-align: center;
   cursor:pointer;
   font-family:'Montserrat', sans-serif;
   outline:0;
   font-size:18px;
   -webkit-appearance: none;
   transition:0.2s;
   border:1px solid ${props => props.theme.thirdColor};
   margin-left:8px;
   border-radius:5px;

   @media screen and (max-width:540px){
      margin-left:0px;
      margin-right:10px;
      margin-top:20px;
  }
`