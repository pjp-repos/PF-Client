import styled from "styled-components"


export const ButtonGoogle = styled.a`
    position:absolute;
    width:70%;
    height:45px;
    text-align:center;
    color:white;
    background-color:transparent;
    border: 1px solid #474D57;
    border-radius:4px;
    text-decoration:none;
    top:20%;
    left:15%;
    &:hover{
        border:1.5px solid white;
     }
    
  `
  export const GoogleIcon = styled.img`
    height:22px;
    wdith:22px;
    position: absolute;
    top:22%;
    left:71%;
    @media screen and (min-width:1020px){
      left:74%;
    }
  `
  export const TextGoogle = styled.span`
  font-family:'Montserrat', sans-serif;
  display:block;
  font-size:15px;   
  margin-top:12px;
`