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