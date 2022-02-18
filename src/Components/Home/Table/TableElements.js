import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   justify-content: center;
`
export const TableC = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  min-height: 60vh;

  @media screen and (max-width:540px){
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

export const Coin = styled.img`
width: 30px;
height: 30px;
`