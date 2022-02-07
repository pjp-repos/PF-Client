import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  getGlobalPrices, 
  currencyGlobalPrices,
  orderGlobalPrices,
  filterGlobalPrices
} from '../../../Redux/Actions/actionCreators';

import {
  selectGlobalPricesCurrency,
  selectGlobalPricesOrder,
  selectGlobalPricesFilter
} from '../../../Redux/Selectors/selectors';

import { ButtonSearch,ContainerSearch,InputSearch } from "./SearchBar/SearchBarElements";
import { ContainerSelects,Select,ContainerSelectTooltip } from "./Selects/SelectElements";
import { ContainerFilters } from "./ContainerFilters";
import { Tooltip } from "../../AaaGenerics/Tooltip/Tooltip";

export default function Filters(){

  const currencies = [
    {key:'usd',value:'US Dollar'},
    {key:'eur',value:'Euro'},
    {key:'cny',value:'Cannadian'},
    {key:'jpy',value:'Japanesse'},
    {key:'ars',value:'Ars pesos'},
    {key:'mxn',value:'Mex pesos'},
  ];
  const orders = [
    {key:'marketDesc',value:'Market - Desc'},
    {key:'marketAsc',value:'Market - Asc'},
    {key:'symbolAsc',value:'Symbol - Asc'},
    {key:'symbolDesc',value:'Symbol - Desc'},
    {key:'priceAsc',value:'Price - Asc'},
    {key:'priceDesc',value:'Price - Desc'},
  ];
  
  //Redux
  const dispatch = useDispatch();
  const currency = useSelector(selectGlobalPricesCurrency);
  const order = useSelector(selectGlobalPricesOrder);
  const filter = useSelector(selectGlobalPricesFilter);
 
  const handlerCurrency = (e) => {
    currencyGlobalPrices(dispatch,e.target.value); 
    getGlobalPrices(dispatch,e.target.value);   
  }

  const handlerOrder = (e) => {
    orderGlobalPrices(dispatch,e.target.value); 
    getGlobalPrices(dispatch,currency);   
  }

  const handlerFilter = (e) => {
    filterGlobalPrices(dispatch,e.target.value); 
    getGlobalPrices(dispatch,currency);   
  }

  return (
    <ContainerFilters>
       <ContainerSelects>
          <ContainerSelectTooltip>
           <Tooltip className="Tooltip">Cryto Against</Tooltip>
            <Select className="Select" id = "worldMoneys" value = {currency} onChange = {handlerCurrency}>
              {
                currencies.map(money => <option key = {money.key} id = "worldMoneys" value = {money.key}>{money.value}</option>)
              }
            </Select>
          </ContainerSelectTooltip>
          <ContainerSelectTooltip>
            <Tooltip className="Tooltip">Order By</Tooltip>
            <Select className="Select" id = "orderBy" value = {order} onChange = {handlerOrder}>
             {
              orders.map(order => <option key = {order.key} id ="orderBy" value={order.key}>{order.value}</option>)
             }
            </Select>
          </ContainerSelectTooltip>
       </ContainerSelects>
       <ContainerSearch> 
          <InputSearch placeholder="Search for symbol" value = {filter} onChange = {handlerFilter}/>
          <ButtonSearch><span className="material-icons-outlined">search</span></ButtonSearch>
       </ContainerSearch>
    </ContainerFilters>
  )
}