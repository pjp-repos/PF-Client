import React from "react";

export default function DateFilters(){
   const handlerDates = (e) => {
         console.log(e.target.value);
   }
  return (
    <div>
       <input onChange = {handlerDates} type="date" min="2022-01-01" max = "2022-12-31"/>
    </div>
  )
}