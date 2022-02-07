import styled from "styled-components"

export const ContainerSignP = styled.div`
   position:relative;
   width:100%;
   justify-content:center;
   min-height:100vh;
`
export const ContainerSign = styled.div`
   width:30%;
   margin-left:auto;
   margin-top:2%;
   color:white;
   margin-right:auto;
   position:relative;
   min-height:92vh;
   background-color:#181A20;
   font-family:'Montserrat', sans-serif;
   box-shadow: 4px 4px 8px black;

   @media screen and (max-width:840px){
    width:80%
  }

   @media screen and (max-width:542px){
    width:75%
  }

  @media screen and (max-width:420px){
    width:100%
  }

`
export const InputSign= styled.input`
  border: 1px solid #474D57;
  border-radius:4px;
  position:absolute;
  color:white;
  background-color:transparent;
  font-family:'Montserrat', sans-serif;
  outline:0;
  width:70%;
  left:15%;
  height:40px;
  ${props => (props.top && `top:${props.top}%`)};

  &:hover{
    border:1.5px solid white;
 }
 &::placeholder{
    color:white;
    font-family:'Montserrat', sans-serif;
}
}
`
export const LabelSign = styled.label`
  position:absolute;
  left:15%;
  font-family:'Montserrat', sans-serif;
  font-size:15px;
  ${props => (props.top && `top:${props.top}%`)};
  ${props => (props.left && `left:${props.left}%`)};
`

export const Submit = styled.button`
  position:absolute;
  color:white;
  background-color:#474D57;
  border:1px solid #474D57;
  font-family:'Montserrat', sans-serif;
  width:70%;
  left:15%;
  height:45px;
  outline:0;
  border-radius:8px;
  ${props => (props.top && `top:${props.top}%`)};
  &:hover{
    background-color:#8a919e;
 }
`
export const ContainerLogo = styled.div `
   top:5%;
   left:45%;
`

export const Title = styled.h4`
  position:absolute;
  color:#ededf5;
  ${props => (props.top && props.size && props.left && `top:${props.top}%; font-size:${props.size}px; left:${props.left}%`)};

`
export const Link = styled.button`
  position:absolute;
  color: #efb810;
  background-color:transparent;
  font-weight:bold;
  margin-top:2.5px;
  border: 0;
  outline:0;
  font-family:'Montserrat', sans-serif;
  ${props => (props.top && props.size && props.left && `top:${props.top}%; font-size:${props.size}px; left:${props.left}%`)};
`
export const Error = styled.label`
  position:absolute;
  color: #efb810;
  font-family:'Montserrat', sans-serif;
  font-size:12px;
  left:15%;
  ${props => (props.top &&  `top:${props.top}%;`)};
`

