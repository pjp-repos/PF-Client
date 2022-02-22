import styled from "styled-components"
import {Row} from "../Home/Table/Row"
import {TableC} from "../Home/Table/TableElements"

export const RowP = styled(Row)`
  grid-template-columns: 0.2fr 0.2fr 0.3fr 0.3fr 0.3fr;
  margin-left:auto;
  margin-right:auto;
  width:70%;
  grid-gap:0.1%;

  @media screen and (max-width:920px){
    width:100%;
  }
  
  @media screen and (max-width:540px){
    width:180%;
  }

`
export const Container = styled.div`
   min-width: 100%;
   justify-content: center;
   margin-top:20px;
`

export const TableP = styled(TableC)`
  margin-top:30px;
  min-height:30px;
  margin-bottom:30px;

  @media screen and (max-width:540px){
    overflow-x:scroll;
    overflow-y:hidden;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width:5px;
      height:6px;
      background-color: var(--second-color);
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--text-color);
      height: 1px;
    }
   }
   
`
export const Coin = styled.img`
width: 30px;
height: 30px;
`
export const ButtonOrder = styled.button`
  border:0;
  outline:0;
  background-color:transparent;
  color:var(--text-color);

`