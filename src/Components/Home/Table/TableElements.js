import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   justify-content: center;
`
export const TableC = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  min-height: 60vh;

  @media screen and (max-width:540px){
    overflow-x:scroll;
    overflow-y:hidden;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width:5px;
      height:6px;
      background-color: ${props => props.theme.secondColor};
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: white;
      height: 1px;
    }
   }

`

export const Coin = styled.img`
width: 30px;
height: 30px;
`

export const Column = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  margin-left:30px;
  height:45px;
`

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

  @media screen and (max-width:920px){
    width:135%;
}

  @media screen and (max-width:540px){
      width:250%;
  }
`