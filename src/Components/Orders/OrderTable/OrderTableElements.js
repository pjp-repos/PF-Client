import styled from "styled-components"
import {Row} from "../../Home/Table/Row"
import { Select } from "../../Home/Filters/Selects/SelectElements"
import { ContainerFilters } from "../../Home/Filters/ContainerFilters"
import {TableC} from "../../Home/Table/TableElements"
import { Card ,Img} from "../../UserHome/UserHomeElements"

export const RowO = styled(Row)`
  grid-template-columns: 0.2fr 0.2fr 0.25fr 0.25fr 0.2fr 0.2fr 0.3fr ;
  margin-left:auto;
  margin-right:auto;
  width:95%;
  grid-gap:0.1%;

  @media screen and (max-width:840px){
    grid-template-columns: 0.1fr 0.3fr 0.3fr 0.3fr;
    width:90%;
   }
`
export const Container = styled.div`
   width: 100%;
   justify-content: center;
`

export const TableO = styled(TableC)`
  margin-top:30px;
  min-height:30px;
`
export const ContainerEdit = styled.div `
  width:100%;
  background-color:blue;
  height:100%;
`
export const ImgEdit = styled.img`
  width:50%;
  height:100%;
  object-fit:contain;
`
export const DivBanner = styled.div`
  width:100%;
  display:flex;
  margin-top:40px;
  margin-bottom:40px;
  justify-content:center;
  height:120px;
`

export const BannerOrder = styled(Card)`
  margin-left:auto;
  margin-right:auto;
  height:100%;
  width:40%;
  background-color:blue;
`

export const BannerImg = styled(Img)`
    height:120px;
    opacity:1;
`