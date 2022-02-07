import React from "react";
import { ButtonPagination,ContainerPagination } from "./PaginationElements";

export default function Pagination({totalCryptos,cryptosForPage,actualPage, setActualPage}){
  
    const pages = () => {
        let totalPages = [];
        for( let i = 1 ; i <= Math.ceil(totalCryptos/cryptosForPage); i++){
            totalPages.push(
            <ButtonPagination  key = {i} onClick = {(e) => setActualPage(parseInt(e.target.id))} id = {i} actualPage = {actualPage} >{i}</ButtonPagination>);
        }  
        return totalPages
    }
    
    return (
        <ContainerPagination>
          {pages()}
        </ContainerPagination>
    )
}