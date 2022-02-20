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
  selectGlobalPricesFilter
} from '../../../Redux/Selectors/selectors';

import { ButtonSearch,ContainerSearch,InputSearch } from "./SearchBar/SearchBarElements";
import { Select,ContainerSelectTooltip } from "./Selects/SelectElements";
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
  
  //Redux
  const dispatch = useDispatch();
  const currency = useSelector(selectGlobalPricesCurrency);
  const filter = useSelector(selectGlobalPricesFilter);
 
  const handlerCurrency = (e) => {
    currencyGlobalPrices(dispatch,e.target.value); 
    getGlobalPrices(dispatch,e.target.value);   
  }

  const handlerFilter = (e) => {
    filterGlobalPrices(dispatch,{symbol:e.target.value}); 
    getGlobalPrices(dispatch,currency);   
  }

  return (
    <ContainerFilters>
          <ContainerSelectTooltip>
           <Tooltip className="Tooltip">Cryto Against</Tooltip>
            <Select className="Select" id = "worldMoneys" value = {currency} onChange = {handlerCurrency}>
              {
                currencies.map(money => <option key = {money.key} id = "worldMoneys" value = {money.key}>{money.value}</option>)
              }
            </Select>
          </ContainerSelectTooltip>
       <ContainerSearch> 
          <InputSearch placeholder="Search for symbol" value = {filter.symbol} onChange = {handlerFilter}/>
          <ButtonSearch><span className="material-icons-outlined">search</span></ButtonSearch>
       </ContainerSearch>
    </ContainerFilters>
  )
}