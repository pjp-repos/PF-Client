import React from "react";
import { SelectSubs ,ContainerSelects,ContainerFilters,InputSymbolsSubs,DivBtnFilterS} from "./SubcriptionElements";
import { useDispatch } from "react-redux";
import { filterSubscriptions } from "../../../Redux/Actions/actionCreators";
import { DivBtnFilter,BtnFilter,Container } from "../../Orders/OrderTable/OrderFilters";

const initialState = {
    symbol1:"",
    symbol2:"",
    alertOnRise:"",
    alertOnFall:"",
}
export default function SubscriptionFilters(){
    const dispatch = useDispatch();
    const [btnFilter,setBtnFilter] = React.useState(false);

    const [filterForm, setFilterForm] = React.useState(initialState);

    React.useEffect(() => {
        filterSubscriptions(dispatch,initialState);
    },[]);

    const handlerFilter = (filterKey,filterValue)=>{
        // Notice: For no filter, filterValue has to be "" (Empty string).
        let newFilterForm={
            ...filterForm,
            [filterKey]:filterValue
        };
        setFilterForm(newFilterForm);
        filterSubscriptions(dispatch,newFilterForm);
    };
       
    return (
        <Container>
             <DivBtnFilter>
               <BtnFilter status = {btnFilter} onClick = {(e) => setBtnFilter(!btnFilter)}>
               <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
               </BtnFilter> 
            </DivBtnFilter>
            <ContainerFilters status = {btnFilter}>
                <InputSymbolsSubs id = "symbol1" onChange= {e => handlerFilter(e.target.id,e.target.value)} placeholder="Symbol1"/>
                <InputSymbolsSubs id = "symbol2" onChange= {e => handlerFilter(e.target.id,e.target.value)} placeholder="Symbol2"/>  
                <ContainerSelects>
                <SelectSubs>
                    <option>AlertOnFall</option>
                    <option>Yes</option>
                    <option>Not</option>
                </SelectSubs>
                <SelectSubs id = "alertOnRise" onChange = {(e) => handlerFilter(e.target.id,e.target.value)}>
                    <option id = "alertOnRise" value = "">AlertOnRise</option>
                    <option id = "alertOnRise" value = {true}>Yes</option>
                    <option id = "alertOnRise" value = {false}>Not</option>
                </SelectSubs>
            </ContainerSelects>     
            </ContainerFilters>  
        </Container>
    )
}