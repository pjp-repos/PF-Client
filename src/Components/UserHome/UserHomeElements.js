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
  color:var(--text-color);
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
  background-image:linear-gradient(to bottom left,#474D57,var(--text-color),rgb(20, 21, 26));
  @media screen and (max-width:840px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
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

export const ImgBannerr = styled.img`
  margin-top:5%;
  margin-left:5%;
  width:45%;
  height:70%;
  object-fit:contain;

  @media screen and (min-width:1900px){
    width:55%;
    height:60%;
   }
  @media screen and (max-width:920px){
    width:40%;
    height:40%;
    margin-left:0;
  }
  @media screen and (max-width:540px){
    width:50%;
    height:50%;
    margin-left:0;
  }
 
`
export const Henry = styled.a`
  color:var(--gold-color);
`
export const TitleHenry = styled.h1`
 font-size:50px;
 margin-bottom:8%;
 @media screen and (min-width:1900px){
 font-size:60px;
 }
 @media screen and (max-width:1024px){
  font-size:40px;
  }
  @media screen and (max-width:840px){
    font-size:35px;
    margin-bottom:10%;
  }
`
export const InfoBanner = styled.p`
  margin-bottom:8%;
  font-size:22px;
  text-align:center;

@media screen and (max-width:840px){
  font-size:18px;
  margin-bottom:15%;
}

`

export const ButtonWallet = styled.button`
  color:white;
  background-color:var(--gold-color);
  padding:10px;
  font-family: 'Montserrat', sans-serif;
  border:1px solid var(--gold-color);
  border-radius:10px;
  cursor:pointer;
`
    
