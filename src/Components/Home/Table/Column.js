import styled from "styled-components"

export const Column = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:30px;
height:45px;

@media screen and (max-width:840px){
    ${props => props.invisiblemd && 'display:none'} ;
    margin-left:10px;
}

@media screen and (max-width:520px){
    ${props => props.invisiblesm && 'display:none'} ;
    margin-left:10px;
}

`