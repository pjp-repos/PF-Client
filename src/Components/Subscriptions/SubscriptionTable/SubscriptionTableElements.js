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
`;

export const TableS = styled(TableC)`
    
`;

export const RowS = styled(Row)`
     grid-template-columns: 0.2fr 0.5fr 0.4fr 0.2fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.9fr ;
`;


export const TableWrapper = styled.div`
    min-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
