import styled from "styled-components"

export const ContainerPagination = styled.div`
   margin-top:20px;
   margin-bottom:20px;
   display:flex;
   flex-direction:row;
   justify-content:center;
   `
   
export const ButtonPagination = styled.button`
   font-family:'Montserrat', sans-serif;
   font-size:18px;
   margin-left:10px;
   color:white;
   outline:0;
   border:0;
   background-color:transparent;
   ${props => props.id === props.actualPage && 'border: 1px solid #efb810;'}


`