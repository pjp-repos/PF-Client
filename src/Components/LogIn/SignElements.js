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
   margin-top:5%;
   color:white;
   margin-right:auto;
   position:relative;
   min-height:80vh;
   background-color:#181A20;
   font-family:'Montserrat', sans-serif;
   box-shadow: 4px 4px 8px black;
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
  font-size:25px;
  ${props => (props.top && props.color && props.left && `top:${props.top}%; color:${props.color}; left:${props.left}%`)};

`