import styled from "styled-components"

export const ButtonSearch = styled.button`
   position:absolute;
   left:78%;
   top:15%;
   height:28px;
   width:35px;
   background-color:transparent;
   outline:0;
   border:0;
`

export const ContainerSearch = styled.div`
  position: relative;
  background-color: ${props => props.theme.thirdColor};
  width:220px;
  height:40px;
  margin-top:20px;
  border-radius:20px;
  margin-right:70px;

  &:hover{
    border:1.5px solid rgba(236, 238, 247, 0.8);
 }
 @media screen and (max-width:540px){
   margin-right:auto;
   margin-left:auto;
   margin-bottom:20px;
   width:220px;

`


export const InputSearch = styled.input`
position:absolute;
top:20%;
left:10px;
height:20px;
width:150px;
background-color:transparent;
font-family:'Montserrat', sans-serif;
color: ${props => props.theme.textColor};
border:0;
font-size:15px;
outline:0;

&::placeholder{
    color: ${props => props.theme.textColor};
    font-family:'Montserrat', sans-serif;
}
`

