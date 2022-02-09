import React from "react";
import { UserPage,Card,ContainerCards,Title,Img,Banner,ImgBannerr,Henry,TitleHenry,ContainBanner, InfoBanner,ButtonWallet} from "./CardFunctionsElements";
import img from "../../Images/ImgBanner.png"


export default function UserHome(){
   return (
     <UserPage>
       <Banner>
         <ContainBanner>
           <TitleHenry>Welcome to <Henry>HenryCoin</Henry></TitleHenry>
           <InfoBanner>Algo informacion para rellenar lo vacio</InfoBanner>
           <ButtonWallet>Go to Wallet</ButtonWallet>
         </ContainBanner>
         <ImgBannerr src ={img} alt="banner"/>
       </Banner> 
       <ContainerCards>
        <Card >
            <Title>Subscribe</Title>
            <Img className = "Img" src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        </Card>
        <Card >
          <Title>Sell/Buy</Title>
          <Img className = "Img" src =  "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"/>
        </Card>
        <Card  >
            <Title>Transactions</Title>
            <Img className = "Img" src =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxj0RWIZIAJi-6jrUMY40aZVBFCK1f1Df6iw&usqp=CAU"/>
        </Card>
    </ContainerCards>
     </UserPage>
  )
}