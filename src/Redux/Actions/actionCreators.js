import {helpFetch} from '../../helpers/helpFetch'
import {useDispatch} from 'react-redux';

import { 
    SET_PRICES,
    SET_PRICES_STATUS,
    SET_PRICES_ERROR,
    SET_PRICES_FILTER,
    SET_PRICES_ORDER

} from "../types";

const API_URL = 'http:/api.com';
const dispatch = useDispatch();


// getGlobalPrices action (thunk function)

const dataCbPrices = (data)=>dispatch(()=>({type:SET_PRICES,payload:data}));
const statusCbPrices = (value)=>dispatch(()=>({type:SET_PRICES_STATUS,payload:value}));
const errorCbPrices = (errorObj)=>dispatch(()=>({type:SET_PRICES_ERROR,payload:errorObj}));

export const getGlobalPrices = (currency) =>{
    helpFetch(`${API_URL}/cryptos/${currency}`,  dataCbPrices, statusCbPrices, errorCbPrices);
};

// filterGlobalPrices action
export const filterGlobalPrices = (filterString)=>dispatch(()=>({type:SET_PRICES_FILTER,payload:filterString}));

// filterGlobalPrices action
export const orderGlobalPrices = (descending)=>dispatch(()=>({type:SET_PRICES_ORDER,payload:descending}));
