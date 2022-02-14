import styled from "styled-components"

const flex = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-end;
  justify-content:space-between;
`;

export const ContainerNavbar = styled(flex)`
  height:70px;
  width:100%;
  box-shadow: 2px 2px 4px black;   
`;

export const ImgTitle = styled.img`
     height:16px;
     width:16px;
     @media screen and (max-width:540px){
      ${props => props.visibilitySm && 'display:none;'};
      }
   `
export const Title = styled.h4`
   margin-top:25px;
   margin-left:22px;
   font-size:20px;
   color:#efb810;  
  `

export const ContainerButtons = styled(flex)`
  height:100%;
  width:300px;
  justify-content:flex-end;
  align-items:center;
  margin-right:30px;

  @media screen and (max-width:540px){
    margin-right:6px;
   }
`
export const ButtonNavbar = styled.button`
font-family:'Montserrat', sans-serif;
margin-right:10px;
display:block;
cursor:pointer;
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
@media screen and (max-width:540px){
  margin-right:6px;
 }
`;


export const UserContainer = styled(ContainerButtons) `
  position:relative;
  width:150px;
  justify-content:center;
  margin-right:0.5%;
  align-items:center;
  &:hover .OptionsContainer{
    height:205px;
  };
`
export const OptionsContainer = styled.div`
  position:absolute;
  overflow: hidden;
  display:flex;
  flex-direction:column;
  align-items:flex-start
  justify-content:center;
  text-align:center;
  background-color:#181A20;
  z-index:1;
  top:95%;
  width:150px;
  height:0px;
`;
export const Option =styled.button`
  height:40px;
  outline:0;
  font-size:15px; 
  background-color:transparent;
  border:0;
  color:white;
  font-family:'Montserrat', sans-serif;
  &:hover{
    background-color:#474D57;
    cursor: pointer;
  }
`;
