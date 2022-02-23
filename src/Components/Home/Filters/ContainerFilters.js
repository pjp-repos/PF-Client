import styled from "styled-components"


export const ContainerFilters = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
margin-bottom:18px;
margin-left:auto;
margin-right:auto;
width:95%;
margin-top:30px;

@media screen and (max-width:540px){
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items:center;
    margin-bottom:25px;
}

`