import styled from "styled-components";


export const Div= styled.div`
margin: 0;
position:absolute;
width:100%;
background-color:${props => props.theme.firstColor};
color:${props => props.theme.textColor};
font-family: 'Montserrat', sans-serif;
overflow-y: visible; 
min-height:100vh;
`;