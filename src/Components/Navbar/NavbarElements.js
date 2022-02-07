import styled from "styled-components"

export const ContainerNavbar = styled.div`
   height:70px;
   display:flex;
   flex-direction:row;
   alig-items:flex-end;
   justify-content:space-between;
   width:100%;
   box-shadow: 2px 2px 4px black;
   
   `
export const ImgTitle = styled.img`
     height:16px;
     width:16px;
     &:hover .Title{
        color:white;
       }
   `
export const Title = styled.h4`
   margin-top:25px;
   margin-left:22px;
   font-size:20px;
   color:#efb810;
  
  `
export const ContainerButtons = styled.div`
  height:100%;
  display:flex;
  flex-direction:row;
  alig-items:flex-end;
  width:300px;
  justify-content:flex-end;
  margin-right:30px;
`
export const ButtonNavbar = styled.button`
font-family:'Montserrat', sans-serif;
margin-right:10px;
display:block;
margin-top:18px;
font-size:18px;
color:white;
background-color:transparent;
border:0;
outline:0;
height:40px;

&:hover{
${props => props.signup ? 'border: 1px solid #efb810; color:#efb810 ': 'border: 1px solid #474D57;'};
 border-radius:5px;
}
`