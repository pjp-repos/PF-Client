import styled from "styled-components"

export const Row = styled.div`
display: grid;
grid-template-columns: 0.5fr 0.6fr 0.8fr 0.7fr 0.7fr 0.8fr 0.6fr;
transition: 0.2s;
justify-content: center; 
background-color:${props => props.theme.secondColor};
border-bottom:0.1px solid ${props => props.theme.thirdColor};
${props => props.head && `font-weight:bold; background-color: ${props.theme.thirdColor};`};
&:hover{
    background-color: ${props => props.theme.firstColor};
}


}
@media screen and (max-width:920px){
    width:135%;
}
@media screen and (max-width:540px){
    width:250%;
}
`