import styled from "styled-components"


export const ButtonGoogle = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    width:70%;
    height:45px;
    text-align:center;
    color:${props => props.theme.textColor};
    background-color:transparent;
    border: 1px solid ${props => props.theme.thirdColor};
    border-radius:4px;
    text-decoration:none;
    &:hover{
        border:1.5px solid white;
     }
    
  `
  export const GoogleIcon = styled.img`
    height:22px;
    width:22px;
  `
  export const TextGoogle = styled.span`
  font-family:'Montserrat', sans-serif;
  font-size:15px;   
  margin-right:5px;
`