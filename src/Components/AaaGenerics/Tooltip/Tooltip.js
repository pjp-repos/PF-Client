import styled from "styled-components"

export const Tooltip = styled.span`
   position: absolute;
   top:-30%;
   background-color: #efb810;
   padding: 10%;
   color: white;
   border-radius: 7px;
   transition: 0.8s;
   opacity:0;
   font-size:14px;

   &::before{
      content: "";
      position: absolute;
      border: 15px solid;
      top:80%;
      left: 20%;
      border-color: #efb810 #0000 #0000 #0000;
   }
 
`