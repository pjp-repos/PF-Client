import React from "react";
import { ContainerFilters,InputDate,InputSymbols,Container,BtnFilter,Label,DivBtnFilter, DivInputFilters} from "../OrderFilters";
import { useDispatch } from "react-redux";
import { filterOrders } from "../../../../Redux/Actions/actionCreators";

const initialState = {
    symbol1:"",
    symbol2:"",
    dateFrom:"",
    dateTo:"",
};
export default function OrderFilters(){
    const dispatch = useDispatch();
    const [btnFilter,setBtnFilter] = React.useState(false);

    const [filterForm, setFilterForm] = React.useState(initialState);

    React.useEffect(() => {
        filterOrders(dispatch,initialState);
   },[]);


    const setFilter = (filterKey,filterValue)=>{
        // Notice: For no filter, filterValue has to be "" (Empty string).
       let newFilterForm={
          ...filterForm,
          [filterKey]:filterValue
        };
        setFilterForm(newFilterForm);
        filterOrders(dispatch,newFilterForm);
      };
    
    return (
        <Container>
            <DivBtnFilter>
               <BtnFilter status = {btnFilter} onClick = {(e) => setBtnFilter(!btnFilter)}>
               <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
               </BtnFilter> 
            </DivBtnFilter>
            <ContainerFilters status = {btnFilter}>
                <DivInputFilters>
                  <Label>Date From</Label>
                  <InputDate type="date" id="dateFrom"  min="2022-01-01" max="2030-12-31"  onChange={(e) => setFilter(e.target.id,e.target.value)} />
                  <Label>Date to</Label>
                  <InputDate type="date" id="dateTo"   min="2022-01-01" max="2030-12-31" onChange={(e) => setFilter(e.target.id,e.target.value)} /> 
                  <InputSymbols id = "symbol1" onChange= {e => setFilter(e.target.id,e.target.value)} placeholder="Symbol1"/>
                  <InputSymbols id = "symbol2" onChange= {e => setFilter(e.target.id,e.target.value)} placeholder="Symbol2"/>       
                </DivInputFilters>
            </ContainerFilters>
        </Container>
    )
}