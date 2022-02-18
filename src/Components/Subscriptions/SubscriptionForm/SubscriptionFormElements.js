import styled from "styled-components";

import { Button } from "../../AaaGenerics/Button/Button";
import { Input } from "../../AaaGenerics/Input/Input"

export const SubscriptionFormWrapper = styled.div`
    margin-left:auto;
    margin-right:auto;
    width: 40%;
    height: 100vh;
    padding: 8px;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10vh 25vh 15vh 15vh 20vh; 
    /* justify-content: center; */
    justify-items: center;
    align-items: center;

    background-color: var(--gb-color-content-dark);
    
    @media screen and (min-width: 768px){
        height: 75vh;
        grid-template-rows: 10vh repeat(4,15vh); 
    }
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


export const SubscriptionFormInput = styled(Input)`
    margin: 0 3px;
    @media screen and (min-width: 768px){
        width: 50%;
    }
`;
export const SubscriptionFormButton = styled(Button)`

`;

export const SubscriptionFormBlock = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    border-radius: 5px;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        height: auto;
    }
`;