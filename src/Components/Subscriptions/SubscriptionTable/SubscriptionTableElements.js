import styled from 'styled-components';

export const Button = styled.button`
    margin: 25px;
    height: 25px;
    background-color: #0ecb81;
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

export const Table = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 15px;
    align-items: center;
    justify-content: center;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(12,${props => props.width < 1200 ? '10%' : '5rem'});
    border-bottom: 1px solid #ccc;
    background-color: ${props => props.head ? '#0b0e11' : '#181A20'};
`;

export const Column = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
`;

export const TableWrapper = styled.div`
    min-width: 100%;
    width: 100%;
    background-color: #181A20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
