import styled from "styled-components"

export const Row = styled.div`
display: grid;
grid-template-columns: 0.5fr 0.6fr 0.8fr 0.7fr 0.7fr 0.8fr 0.6fr;
transition: 0.2s;
justify-content: center; 
background-color:var(--second-color);
border-bottom:0.1px solid var(--third-color);
${props => props.head && 'font-weight:bold; background-color: var(--third-color)'};
&:hover{
    background-color: var(--first-color);
}

@media screen and (max-width:540px){
    width:250%;
}
`