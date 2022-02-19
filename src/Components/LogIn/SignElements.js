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
   display:flex;
   padding-top:40px;
   flex-direction:column;
   justifiy-content:center;
   align-items:center;
   margin-top:2%;
   color:white;
   margin-right:auto;
   position:relative;
   min-height:600px;
   background-color:#181A20;
   font-family:'Montserrat', sans-serif;
   box-shadow: 4px 4px 8px black;

   @media screen and (max-width:920px){
    width:70%
  }
 
  @media screen and (max-width:520px){
    margin-top:20%;
    margin-right:10px;
    width:100%
  }
  @media screen and (min-width:1020px){
    margin-top:40px;
    width:35%
  }

  @media screen and (min-width:1800px){
    margin-top:60px;
    width:25%
  }

`
export const InputSign= styled.input`
  border: 1px solid #474D57;
  border-radius:4px;
  color:white;
  background-color:transparent;
  font-family:'Montserrat', sans-serif;
  outline:0;
  margin-bottom:40px;
  width:70%;
  height:40px;

  &:hover{
    border:1.5px solid white;
 }
 &::placeholder{
    color:white;
    font-family:'Montserrat', sans-serif;
}

`
export const LabelSign = styled.label`
  font-family:'Montserrat', sans-serif;
  display:block;
  margin-bottom:3px;
  font-size:15px;
  ${props => (props.right && `margin-right:${props.right}%`)};
  ${props => (props.mtop && props.mb && `margin-top:${props.mtop}%;margin-bottom:${props.mb}%;`)};
`

export const Submit = styled.button`
  color:white;
  margin-top:25px;
  margin-bottom:5px;
  cursor:pointer;
  background-color:#474D57;
  border:1px solid #474D57;
  font-family:'Montserrat', sans-serif;
  width:70%;
  height:45px;
  outline:0;
  border-radius:8px;
  &:hover{
    background-color:#8a919e;
 }
`
export const ContainerLogo = styled.div `
   top:5%;
   left:45%;
`

export const White = styled.a`
 color:white;

`
export const Link = styled.button`
  color: #efb810;
  background-color:transparent;
  font-weight:bold;
  margin-bottom:30px;
  border: 0;
  cursor:pointer;
  outline:0;
  font-family:'Montserrat', sans-serif;
  ${props => (props.size   && ` font-size:${props.size}px;`)};
`
export const Error = styled.label`
  position:absolute;
  color: #efb810;
  font-family:'Montserrat', sans-serif;
  font-size:12px;
  left:15%;
  ${props => (props.top &&  `top:${props.top}%;`)};
`

