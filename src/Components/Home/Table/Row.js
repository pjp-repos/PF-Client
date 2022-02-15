import styled from "styled-components"

export const Row = styled.div`
display: grid;
grid-template-columns: 0.5fr 0.6fr 0.8fr 0.7fr 0.7fr 0.8fr 0.6fr;
transition: 0.2s;
justify-content: center; 
background-color: #181A20;
border-bottom:0.1px solid #474D57;
${props => props.head && 'font-weight:bold; background-color:#474D57'};
&:hover{
    background-color: rgb(20, 21, 26);
}

}
@media screen and (max-width:540px){
    width:250%;
}
`