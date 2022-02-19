import styled from "styled-components";
import { Submit,InputSign } from "../../LogIn/SignElements";

export const SubscriptionFormWrapper = styled.div`
    margin-left:auto;
    margin-right:auto;
    width: 30%;
    min-height: 500px;
    margin-bottom:20px;
    margin-top:20px;
    padding: 8px;
    display: flex;
    flex-direction:column;
    justify-items: center;
    align-items: center;
    box-shadow: 4px 4px 8px black;
    background-color:#181A20  ;
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
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    border-radius: 5px;
    margin-bottom:10px;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        height: auto;
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