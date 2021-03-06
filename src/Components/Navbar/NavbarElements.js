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
  background-color:${props => props.theme.firstColor};
  box-shadow: 2px 2px 4px black;   
`;

export const ImgTitle = styled.img`
     height:16px;
     width:16px;
     @media screen and (max-width:540px){
      ${props => props.visibilitySm && 'display:none;'};
      }
   `
export const Title = styled.button`
   font-family:'Montserrat', sans-serif;
   font-size:20px;
   cursor:pointer;
   font-weight:bold;
   outline:0;
   border:0;
   background-color:transparent;
   color:var(--gold-color);  
   margin-right:12px;
   @media screen and (max-width:540px){
     margin-right:30px;
    }
  `
export const DivTitle = styled.div`
  width:200px;
  height:100%;
  display:flex;
  background-color:transparent;
  align-items:center;
  justify-content:center;
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
color:${props => props.theme.textColor};
background-color:transparent;
border:0;
outline:0;
height:40px;

&:hover{
${props => props.signup ? 'border: 1px solid var(--gold-color); color:var(--gold-color) ': `border: 1px solid ${props.theme.thirdColor};`};
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
    height:245px;
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
  background-color:${props => props.theme.secondColor};
  z-index:3;
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
  color:${props => props.theme.textColor};
  font-family:'Montserrat', sans-serif;
  &:hover{
    background-color:${props => props.theme.thirdColor};
    cursor: pointer;
  }
`;
export const ImgUser = styled.img`
height:35px;
width:35px;
object-fit:cover;
border-radius:30px;
@media screen and (max-width:540px){
  margin-left:50px;
 }
`