import React from "react";
import { ButtonSearch,ContainerSearch,InputSearch } from "./SearchBar/SearchBarElements";
import { ContainerSelects,Select,ContainerSelectTooltip } from "./Selects/SelectElements";
import { ContainerFilters } from "./ContainerFilters";
import { Tooltip } from "../../AaaGenerics/Tooltip/Tooltip";
import {useDispatch} from "react-redux";


const initialState = {
  search:"",
  orderBy:"Order By",
  worldMoneys:"usd"
}

export default function Filters(){
  const [selectState,setSelectState] = React.useState(initialState); 
  const worldMoneys = ["Usd","Eur","Cny","Jpy","Ars","Mxn"];
  const orders = ["Asc Market","Desc Market","A-Z","Z-A","Asc Price","Desc Price"];
  const dispatch = useDispatch();

  const handlerSelects = (e) => {
    setSelectState({
      ...selectState,
      [e.target.id]:e.target.value
    }
    )
  }
  return (
    <ContainerFilters>
       <ContainerSelects>
          <ContainerSelectTooltip>
           <Tooltip className="Tooltip">Cryto Against</Tooltip>
            <Select className="Select" id = "worldMoneys" value = {selectState.worldMoneys} onChange = {handlerSelects}>
              {
                worldMoneys.map(money => <option key = {money} id = "worldMoneys" value = {money.toLowerCase()}>{money}</option>)
              }
            </Select>
          </ContainerSelectTooltip>
          <ContainerSelectTooltip>
            <Tooltip className="Tooltip">Order By</Tooltip>
            <Select className="Select" id = "orderBy" value = {selectState.orderBy} onChange = {handlerSelects}>
             {
              orders.map(order => <option key = {order} id ="orderBy" value={order.toLowerCase()}>{order}</option>)
             }
            </Select>
          </ContainerSelectTooltip>
       </ContainerSelects>
       <ContainerSearch>
          <InputSearch placeholder="Search for symbol"/>
          <ButtonSearch><span class="material-icons-outlined">search</span></ButtonSearch>
       </ContainerSearch>
    </ContainerFilters>
  )
}