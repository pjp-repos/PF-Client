import styled from "styled-components"

export const UserPage = styled.div`
   width:100%;
`
export const ContainerCards = styled.div`
   margin-top:60px;
   margin-bottom:30px;
   display:grid;
   justify-content:center;
   grid-template-columns: 0.3fr 0.3fr 0.3fr ;
   grid-gap:2%;

  @media screen and (max-width:920px){
    grid-template-columns: 0.8fr;
    grid-gap:8%;
   }
`

export const Card = styled.button`
  position:relative;
  height:160px;
  border-radius:5px;
  text-align:center;
  font-size:28px;
  background-color:transparent;
  border:0;
  outline:0;
  cursor:pointer;
  color:white;
  font-family: 'Montserrat', sans-serif;
  &:hover .Img{
    opacity:0.8;
  }
`
export const Title = styled.h4`
  position:relative;
  z-index:2;
`
export const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 160px;
  opacity: 0.6;
  object-fit:cover;
  border-radius:5px;
`
export const Banner = styled.div`
  display:flex;
  height:450px;
  margin-top:10px;
  width:100%;
  background-image:linear-gradient(to bottom left,#474D57,#181A20,rgb(20, 21, 26));
  @media screen and (max-width:840px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-text:center;
  }
`
export const ContainBanner = styled.div`
  width:55%;
  display:flex;
  margin-left:4%;
  justify-content:center;
  align-items:center;
  align-text:center;
  flex-direction:column;
  @media screen and (min-width:1900px){
    width:45%;
    margin-left:10%;
   }
   @media screen and (max-width:920px){
    width:60%;
    align-text:center;
   }
   @media screen and (max-width:540px){
    width:90%;
    align-text:center;
   }
`
