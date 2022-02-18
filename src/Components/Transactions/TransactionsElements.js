import styled from "styled-components"
import {Row} from "../Home/Table/Row"
import { Select } from "../Home/Filters/Selects/SelectElements"
import { ContainerFilters } from "../Home/Filters/ContainerFilters"
import {TableC} from "../Home/Table/TableElements"
export const Rowt = styled(Row)`
  grid-template-columns: 0.1fr 0.2fr 0.2fr 0.2fr 0.3fr;
  margin-left:auto;
  margin-right:auto;
  width:60%;
  grid-gap:0.1%;

  @media screen and (max-width:840px){
    grid-template-columns: 0.1fr 0.3fr 0.3fr 0.3fr;
    width:90%;
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
  height:40px;
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

`
export const TableT = styled(TableC)`
  min-height:40vh;
`
   
export const Container = styled.div`
   width: 100%;
   justify-content: center;
`