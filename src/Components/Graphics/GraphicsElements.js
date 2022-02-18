import styled from "styled-components"

export const DivGraphic= styled.div`
  margin-left:auto;
  margin-right:auto;
  width:95%;
  margin-top:80px;
  height:350px;
  @media screen and (max-width:540px){
    width:95%; 
    margin-top:0px;
    height:200px;
   }
`;

export const TooltipDiv = styled.div`
  background-color: rgb(20, 21, 26);
  width:140px;
  height:60px;
  font-size:15px;
  color:white;
  font-family: 'Montserrat', sans-serif;
  text-align:center;
`