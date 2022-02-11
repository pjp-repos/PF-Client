import {helpFetch} from '../../helpers/helpFetch'

import { 
    GET_PRICES,
    GET_PRICES_STATUS,
    GET_PRICES_ERROR,
    GET_SYMBOLS,
    GET_SYMBOLS_STATUS,
    GET_SYMBOLS_ERROR,
    SET_PRICES_FILTER,
    SET_PRICES_ORDER,
    SET_PRICES_CURRENCY,
    NEW_ACCOUNT,
    NEW_ACCOUNT_STATUS,
    NEW_ACCOUNT_ERROR,
    SIGN_IN,
    SIGN_IN_STATUS,
    SIGN_IN_ERROR,
    SIGN_OUT,
    SIGN_OUT_STATUS,
    SIGN_OUT_ERROR,
    GET_SUBSCRIPTIONS,
    GET_SUBSCRIPTIONS_STATUS,
    GET_SUBSCRIPTIONS_ERROR,
    GET_SUBSCRIPTION,
    GET_SUBSCRIPTION_STATUS,
    GET_SUBSCRIPTION_ERROR,
    ADD_SUBSCRIPTION,
    ADD_SUBSCRIPTION_STATUS,
    ADD_SUBSCRIPTION_ERROR,
    UPDATE_SUBSCRIPTION,
    UPDATE_SUBSCRIPTION_STATUS,
    UPDATE_SUBSCRIPTION_ERROR,
    DELETE_SUBSCRIPTION,
    DELETE_SUBSCRIPTION_STATUS,
    DELETE_SUBSCRIPTION_ERROR

} from "../types";

const API_URL = 'https://pfapi2.herokuapp.com';



// getGlobalPrices action (thunk function)
export const getGlobalPrices = (dispatch, currency) =>{
    const dataCbPrices = (data)=>dispatch({type:GET_PRICES,payload:data});
    const statusCbPrices = (value)=>dispatch({type:GET_PRICES_STATUS,payload:value});
    const errorCbPrices = (errorObj)=>dispatch({type:GET_PRICES_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/cryptos/${currency}`,  dataCbPrices, statusCbPrices, errorCbPrices);
};

// getSymbols action (thunk function)
export const getSymbols = (dispatch) =>{
    const dataCbSymbols = (data)=>dispatch({type:GET_SYMBOLS,payload:data});
    const statusCbSymbols = (value)=>dispatch({type:GET_SYMBOLS_STATUS,payload:value});
    const errorCbSymbols = (errorObj)=>dispatch({type:GET_SYMBOLS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/cryptos/symbols`,  dataCbSymbols, statusCbSymbols, errorCbSymbols);
};

// filterGlobalPrices action
export const filterGlobalPrices = (dispatch, filterString)=>dispatch({type:SET_PRICES_FILTER,payload:filterString});

// filterGlobalPrices action
export const orderGlobalPrices = (dispatch, order)=>dispatch({type:SET_PRICES_ORDER,payload:order});

// filterGlobalPrices action
export const currencyGlobalPrices = (dispatch, currency)=>dispatch({type:SET_PRICES_CURRENCY,payload:currency});

// postNewAccount action (thunk function)
export const postNewAccount = (dispatch, form) =>{
    const dataCbNewAccount = (data)=>dispatch({type:NEW_ACCOUNT,payload:data});
    const statusCbNewAccount = (value)=>dispatch({type:NEW_ACCOUNT_STATUS,payload:value});
    const errorCbNewAccount = (errorObj)=>dispatch({type:NEW_ACCOUNT_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/signup/`,  dataCbNewAccount, statusCbNewAccount, errorCbNewAccount,{
        headers:{
            "Content-Type": "application/json"
        },
        method:'POST',
        body:form
    });
};

// resetNewAccountStatus
export const resetNewAccountStatus = (dispatch)=>dispatch({type:NEW_ACCOUNT_STATUS,payload:0});

// postSignIn action (thunk function)
export const postSignIn = (dispatch, form,token) =>{
    const dataCbSignIn = (data)=>dispatch({type:SIGN_IN,payload:data});
    const statusCbSignIn = (value)=>dispatch({type:SIGN_IN_STATUS,payload:value});
    const errorCbSignIn = (errorObj)=>dispatch({type:SIGN_IN_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/login`,  dataCbSignIn, statusCbSignIn, errorCbSignIn,{
        headers:{
            "Content-Type": "application/json",
        },
        method:'POST',
        body:form
    });
};

// resetNewAccountStatus
export const resetSignInStatus = (dispatch)=>dispatch({type:SIGN_IN_STATUS,payload:0});

// getSingOut action (thunk function)
export const getSingOut = (dispatch) =>{
    const dataCbSingOut = (data)=>dispatch({type:SIGN_OUT,payload:data});
    const statusCbSingOut = (value)=>dispatch({type:SIGN_OUT_STATUS,payload:value});
    const errorCbSingOut = (errorObj)=>dispatch({type:SIGN_OUT_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/logout/`,  dataCbSingOut, statusCbSingOut, errorCbSingOut);
};

// getSubscriptions action (thunk function)
export const getSubscriptions = (dispatch,token) =>{
    const dataCbSubscriptions = (data)=>dispatch({type:GET_SUBSCRIPTIONS,payload:data});
    const statusCbSubscriptions = (value)=>dispatch({type:GET_SUBSCRIPTIONS_STATUS,payload:value});
    const errorCbSubscriptions = (errorObj)=>dispatch({type:GET_SUBSCRIPTIONS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/`,  dataCbSubscriptions, statusCbSubscriptions, errorCbSubscriptions,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};

// getSubscription action (thunk function)
export const getSubscription = (dispatch, id) =>{
    const dataCbSubscription = (data)=>dispatch({type:GET_SUBSCRIPTION,payload:data});
    const statusCbSubscription = (value)=>dispatch({type:GET_SUBSCRIPTION_STATUS,payload:value});
    const errorCbSubscription = (errorObj)=>dispatch({type:GET_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCbSubscription, statusCbSubscription, errorCbSubscription);
};

// addSubscription action (thunk function)
export const addSubscription = (dispatch, form) =>{
    const dataCbAddSubscription = (data)=>dispatch({type:ADD_SUBSCRIPTION,payload:data});
    const statusCbAddSubscription = (value)=>dispatch({type:ADD_SUBSCRIPTION_STATUS,payload:value});
    const errorCbAddSubscription = (errorObj)=>dispatch({type:ADD_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/`,  dataCbAddSubscription, statusCbAddSubscription, errorCbAddSubscription,{
        headers:{
            "Content-Type": "application/json"
        },
        method:'POST',
        body:form
    });
};

// resetaddSubscriptionStatus
export const resetAddSubscriptionStatus = (dispatch)=>dispatch({type:ADD_SUBSCRIPTION_STATUS,payload:0});

// updateSubscription action (thunk function)
export const updateSubscription = (dispatch, form, id) =>{
    const dataCbupdateSubscription = (data)=>dispatch({type:UPDATE_SUBSCRIPTION,payload:data});
    const statusCbupdateSubscription = (value)=>dispatch({type:UPDATE_SUBSCRIPTION_STATUS,payload:value});
    const errorCbupdateSubscription = (errorObj)=>dispatch({type:UPDATE_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCbupdateSubscription, statusCbupdateSubscription, errorCbupdateSubscription,{
        headers:{
            "Content-Type": "application/json"
        },
        method:'PUT',
        body:form
    });
};

// resetUpdateSubscriptionStatus
export const resetUpdateSubscriptionStatus = (dispatch)=>dispatch({type:UPDATE_SUBSCRIPTION_STATUS,payload:0});


// deleteSubscription action (thunk function)
export const deleteSubscription = (dispatch, id) =>{
    const dataCbdeleteSubscription = (data)=>dispatch({type:DELETE_SUBSCRIPTION,payload:data});
    const statusCbdeleteSubscription = (value)=>dispatch({type:DELETE_SUBSCRIPTION_STATUS,payload:value});
    const errorCbdeleteSubscription = (errorObj)=>dispatch({type:DELETE_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCbdeleteSubscription, statusCbdeleteSubscription, errorCbdeleteSubscription,{
        headers:{
            "Content-Type": "application/json"
        },
        method:'DELETE'
    });
};