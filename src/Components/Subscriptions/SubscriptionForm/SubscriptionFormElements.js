import styled from "styled-components";
import { Submit,InputSign } from "../../LogIn/SignElements";

export const SubscriptionFormWrapper = styled.div`
    margin-left:auto;
    margin-right:auto;
    width: 40%;
    min-height: 500px;
    padding: 8px;

    display: flex;
    flex-direction:column;
    justify-items: center;
    align-items: center;

    background-color: var(--gb-color-content-dark);
    
`;

export const SubscriptionFormLabel = styled.p`
    margin: 0;
    color:var(--first-color);
    @media screen and (min-width: 768px){
        width: 15%;      
    }
`;

export const SubscriptionFormError = styled.p`
    margin: 0;
    color:red;
    @media screen and (min-width: 768px){
        width: 35%;      
    }
`;


export const SubscriptionFormInput = styled(InputSign)`
    margin: 0 3px;
    @media screen and (min-width: 768px){
        width: 50%;
    }
`;
export const SubscriptionFormButton = styled(Submit)`

   width:25%;

`;

export const SubscriptionFormBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
    margin-top:40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        height: auto;
    }
`;