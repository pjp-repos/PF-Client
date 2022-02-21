import styled from "styled-components"
import {Row} from "../Home/Table/Row"
import { Select } from "../Home/Filters/Selects/SelectElements"
import { ContainerFilters } from "../Home/Filters/ContainerFilters"
import {TableC} from "../Home/Table/TableElements"
export const Rowt = styled(Row)`
  grid-template-columns: 0.15fr 0.15fr 0.2fr 0.2fr 0.2fr 0.25fr 0.3fr;
  margin-left:auto;
  margin-right:auto;
  width:80%;
  grid-gap:0.1%;

  @media screen and (max-width:920px){
    width:95%;
  }

  @media screen and (max-width:540px){
    width:190%;
  }
`
export const ContainerFiltersT = styled(ContainerFilters)`
  margin-top:40px;
  margin-bottom:40px;
  @media screen and (max-width:540px){
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`
export const Wallet = styled.button`
  width:130px;
  height:45px;
  cursor:pointer;
  background-color:#efb810;
  color:white;
  text-align: center;
  font-family:'Montserrat', sans-serif;
  outline:0;
  border:1px solid #efb810;
  border-radius:5px;
  margin-left:50px;
  font-size:18px;
` 
export const SelectTransactions = styled(Select)`
  margin-right:50px;
  height:45px;

`
export const TableT = styled(TableC)`
  min-height:40vh;
  @media screen and (max-width:540px){
    overflow-x:scroll;
    overflow-y:hidden;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width:5px;
      height:6px;
      background-color: #181A20;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: white;
      height: 1px;
    }
   }
`
   
export const Container = styled.div`
   width: 100%;
   justify-content: center;
`