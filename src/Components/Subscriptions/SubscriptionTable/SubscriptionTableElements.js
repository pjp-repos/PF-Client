import styled from 'styled-components';
import { Row } from '../../Home/Table/Row';
import { TableC } from '../../Home/Table/TableElements';

export const Button = styled.button`
    margin: 25px;
    height: 25px;
    background-color:  #efb810;
    color: white;
    border-radius: 5px;
    border: none;
    width: auto;
    cursor: pointer;
    @media screen and(max-width: 700px){
        width: auto;
    };
`;

export const ButtonE = styled(Button)`
    width: auto;
    cursor:pointer;
`;

export const TableS = styled(TableC)`
  margin-top:50px;
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
`;

export const RowS= styled(Row)`
    grid-template-columns:  0.4fr 0.2fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.9fr ;

    @media screen and (max-width:920px){
        width:180%;
}

    @media screen and (max-width:540px){
        width:380%;
    }
       
    
`;

export const TableWrapper = styled.div`
    min-width: 300px;
    width: 90%;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
