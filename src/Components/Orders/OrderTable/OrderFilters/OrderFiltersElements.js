import React from "react";
import { ContainerFilters,InputDate,FilterBtn,SelectOrder,Container,BtnFilter,Label,DivBtnFilter, DivPair,DivDate} from "../OrderFilters";
import { useDispatch } from "react-redux";
import { filterOrders } from "../../../../Redux/Actions/actionCreators";

const initialState = {
    symbol1:"",
    symbol2:"",
    dateFrom:"",
    dateTo:"",
};
export default function OrderFilters({orders}){
    const dispatch = useDispatch();
    const [btnFilter,setBtnFilter] = React.useState(false);

    const [filterForm, setFilterForm] = React.useState(initialState);

    const setFilter = (filterKey,filterValue)=>{
        // Notice: For no filter, filterValue has to be "" (Empty string).
       let newFilterForm={
          ...filterForm,
          [filterKey]:filterValue
        };
        setFilterForm(newFilterForm);
      };
    
    const filter = () => {
        filterOrders(dispatch,filterForm);
    }

    const reset = () => {
        setFilterForm(initialState);
        filterOrders(dispatch,initialState);
    }
   
    const arrayAvaliable = (condition) => {
       let newArray = orders.map(el => el[condition].symbol);
       let finalArray = [];
       newArray.forEach(el => {
          if(!finalArray.includes(el))
            finalArray.push(el);
       });
       return finalArray;
    }
    
    return (
        <Container>
            <DivBtnFilter>
               <BtnFilter status = {btnFilter} onClick = {(e) => setBtnFilter(!btnFilter)}>
               <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
               </BtnFilter> 
            </DivBtnFilter>
            <ContainerFilters status = {btnFilter}>
                <DivDate>
                  <Label>Date From</Label>
                  <InputDate type="date" id="dateFrom"  min="2022-01-01" max="2030-12-31"  onChange={(e) => setFilter(e.target.id,e.target.value)} />
                  <Label>Date to</Label>
                  <InputDate type="date" id="dateTo"   min="2022-01-01" max="2030-12-31" onChange={(e) => setFilter(e.target.id,e.target.value)} />   
                </DivDate>
                <DivPair>
                   <SelectOrder id = "symbol1" value = {filterForm.symbol1} onChange = {(e) => setFilter(e.target.id,e.target.value)}>
                      <option id = "symbol1" value = "">All symbol 1</option>
                      {
                      orders.length > 0 && arrayAvaliable("symbol1").map(symbol1 => <option key = {symbol1} id ="symbol1" value = {symbol1}>{symbol1}</option>)
                      }
                   </SelectOrder>
                   <SelectOrder id = "symbol2" value = {filterForm.symbol2} onChange = {(e) => setFilter(e.target.id,e.target.value)}>
                      <option id = "symbol2" value = "">All symbol 2</option>
                      {
                       orders.length > 0 && arrayAvaliable("symbol2").map(symbol2 => <option key = {symbol2} id ="symbol2" value = {symbol2}>{symbol2}</option>)
                      }
                    </SelectOrder>
                </DivPair>
                <DivPair>
                   <FilterBtn onClick={filter}>Filter</FilterBtn>
                   <FilterBtn onClick={reset}>Reset</FilterBtn>
                </DivPair>
            </ContainerFilters>
        </Container>
    )
}