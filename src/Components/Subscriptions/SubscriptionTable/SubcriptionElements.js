import styled from 'styled-components';
import { Select } from '../../Home/Filters/Selects/SelectElements';
import { InputSymbols} from '../../Orders/OrderTable/OrderFilters';

export const SelectSubs = styled(Select) `
  height:45px;
  margin-right:10px;

`
export const ContainerSelects = styled.div`
 display:flex;

`
export const InputSymbolsSubs = styled(InputSymbols)`
 width:12%;
 margin-right:10px;
 @media screen and (max-width:520px){
    width:80%;
    margin-top:10px;
 }
  
`
export const ContainerFilters = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    margin-top:20px;
    justify-content:center;
    align-items:center;
    ${props => (props.status === false  && `display:none`)};

    @media screen and (max-width:520px){
       flex-direction:column;
       justify-content:center;
    }
`

