import styled from "styled-components";
import { Submit,InputSign } from "../../LogIn/SignElements";
import { OrderGraphics, DivInfoOrder,TitleGraphic} from "../../Orders/OrderElements";

export const SubscriptionFormWrapper = styled.div`
    width: 40%;
    min-height: 450px;
    display: flex;
    flex-direction:column;
    justify-items: center;
    align-items: center;
    background-color:#181A20  ;

    @media screen and (max-width:920px){
        width:50%;
    }
    @media screen and (max-width:540px){
        width:95%;
    }
       
`;

export const SubscriptionFormLabel = styled.p`
    color:white;
    margin-bottom:1px;
    margin-right:34%;
`;

export const SubscriptionFormError = styled.p`
    color:white;
    margin-top:-30px;
    color:#efb810;
    font-size:14px;
`;


export const SubscriptionFormInput = styled(InputSign)`
  width:70%;
  height:50px;
 
`;
export const SubscriptionFormButton = styled(Submit)`

   width:25%;

`;

export const SubscriptionFormBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    border-radius: 5px;
    margin-bottom:25px;

    @media screen and (max-width:540px){
       justify-content:space-around;
    }
    
`;

export const InputBlock = styled.div`
width:100%;
min-width:100px;
display:flex;
flex-direction:column;
align-items:center;
`
export const Title = styled.h4`
  font-size:30px;
  color:white;
`
export const SubTitle = styled.span`
     color:#efb810;
`
export const SubsGraphics= styled(OrderGraphics)`
  min-height:450px;
  width:80%;
  @media screen and (max-width:940px){
    width:100%;
   }
   

`
export const DivInfoSubs= styled(DivInfoOrder)`
  height:450px;
  width:60%;
  @media screen and (max-width:920px){
    width:50%;
   }
   @media screen and (max-width:540px){
    width:100%;
    height:300px;
    margin-top:40px;
   }
`
export const TitleGraphicSubs = styled(TitleGraphic)`

 margin-top:-15px;


`