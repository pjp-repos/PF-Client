import styled from "styled-components"
import { Submit } from "../../LogIn/SignElements"
import { Select } from "../../Home/Filters/Selects/SelectElements"

export const ContainerFilters= styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  margin-top:30px;
  ${props => (props.status === false  && `display:none`)};
  @media screen and (max-width:920px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
 `

export const InputDate = styled.input`
 color:white;
 background-color:transparent;
 font-family: 'Montserrat', sans-serif;
 border:0.05px solid white;
 padding:5px;
 border-radius:5px;
 height:45px;
 outline:0;
 @media screen and (max-width:540px){
  width:150%;
}
`

export const FilterBtn = styled(Submit)`
  margin-top:0;
  margin-bottom:0;
  width:120px;
  margin-right:25px;
  @media screen and (max-width:920px){
    margin-right:0;
    margin-left:15px;
  }
`
export const SelectOrder = styled(Select)`
  height:45px;
  margin-right:25px;
  
  @media screen and (max-width:920px){
    margin-right:0;
    margin-left:15px;
  }
`
export const Container = styled.div`
  
`
export const BtnFilter = styled(Submit)`
  width:60px;
  ${props => (props.status === true  && `background-color:#efb810`)};
`
export const Label = styled.label`
  margin-left:10px;
  margin-right:15px;
  @media screen and (max-width:540px){
    margin-top:10px;
  }
`
export const DivBtnFilter = styled.div`
  display:flex;
  justify-content:flex-end;
  aling-items:flex-end;
  width:98%;
`
export const DivPair = styled.div`
   margin-right:2%;

   @media screen and (max-width:920px){
    margin-top:20px;
    margin-right:0;
  }
`
export const DivDate = styled.div`
   margin-right:2%;
   @media screen and (max-width:540px){
     margin-right:0%;
     display:flex;
     align-items:center;
     flex-direction:column;
  }

`
