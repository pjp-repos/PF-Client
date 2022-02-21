import styled from "styled-components"
import {Row} from "../../Home/Table/Row"
import {TableC} from "../../Home/Table/TableElements"
import { Card ,Img} from "../../UserHome/UserHomeElements"

export const RowO = styled(Row)`
  grid-template-columns: 0.08fr 0.15fr 0.15fr 0.15fr 0.16fr 0.15fr 0.17fr 0.15fr  0.15fr 0.22fr  ;
  margin-left:auto;
  margin-right:auto;
  width:100%;
  grid-gap:0.1%;

  @media screen and (max-width:920px){
    width:170%;
  }
  
  @media screen and (max-width:540px){
    width:340%;
  }

`
export const Container = styled.div`
   min-width: 100%;
   justify-content: center;
   margin-top:20px;
`

export const TableO = styled(TableC)`
  margin-top:30px;
  min-height:30px;

  @media screen and (max-width:920px){
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
export const ContainerEdit = styled.div `
  width:100%;
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
  justify-content:center;
  height:120px;

`

export const BannerOrder = styled(Card)`
  margin-left:auto;
  margin-right:auto;
  height:100%;
  width:40%;
 
   @media screen and (max-width:920px){
    width:70%;
   }
   @media screen and (max-width:540px){
    width:80%;
   }
`

export const BannerImg = styled(Img)`
    height:100%;
    opacity:0.6;
`
export const ButtonOrder = styled.button`
  border:0;
  color:white;
  outline:0;
  background-color:transparent;
  height:13px;
  ${props => props.id === props.actual && 'color:#efb810;'}
`
export const DivButtons = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
`