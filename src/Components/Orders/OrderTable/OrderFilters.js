import styled from "styled-components"
import { Submit } from "../../LogIn/SignElements"
import { Select } from "../../Home/Filters/Selects/SelectElements"
import { InputSign } from "../../LogIn/SignElements"

export const ContainerFilters= styled.div`
  display:flex;
  justify-content:space-evenly;
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
 color:${props => props.theme.textColor};
 background-color:transparent;
 font-family: 'Montserrat', sans-serif;
 border:0.5px solid ${props => props.theme.thirdColor};
 width:15%;
 padding:5px;
 margin-right:10px;
 border-radius:5px;
 height:45px;
 outline:0;
 @media screen and (max-width:540px){
  width:70%;
  margin-right:0%;
}
`
export const InputSymbols = styled(InputSign)`
  height:45px;
  width:15%;
  margin-bottom:0px;
  margin-left:20px;
  @media screen and (max-width:540px){
    width:70%;
    margin-top:20px;
    margin-left:0px;
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
  width:100%;
`
export const BtnFilter = styled(Submit)`
  width:60px;
  ${props => (props.status === true  && `background-color:var(--gold-color)`)};
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
  margin-left:auto;
  margin-right:auto;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-end;
  width:92%;
`

export const DivInputFilters = styled.div`
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:center;
   width:100%;
   @media screen and (max-width:540px){
     margin-right:0%;
     display:flex;
     align-items:center;
     flex-direction:column;
  }

`
export const BtnRefresh = styled.div`
 border:0;
 outline:0;
 background-color:transparent;
 cursor:pointer; 
`
