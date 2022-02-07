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
  background-color:#474D57;
  width:220px;
  height:40px;
  border-radius:20px;
  margin-right:30px;

  &:hover{
    border:1.5px solid rgba(236, 238, 247, 0.8);
 }

`


export const InputSearch = styled.input`
position:absolute;
top:20%;
left:10px;
height:20px;
width:150px;
background-color:transparent;
font-family:'Montserrat', sans-serif;
color:white;
border:0;
font-size:15px;
outline:0;

&::placeholder{
    color:white;
    font-family:'Montserrat', sans-serif;
}
`

