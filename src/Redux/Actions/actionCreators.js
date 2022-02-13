import {helpFetch} from '../../helpers/helpFetch'

import { 
    GET_PRICES,
    GET_PRICES_STATUS,
    GET_PRICES_ERROR,

    GET_SYMBOLS,
    GET_SYMBOLS_STATUS,
    GET_SYMBOLS_ERROR,

    GET_PAIR,
    GET_PAIR_STATUS,
    GET_PAIR_ERROR,

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
    SET_SESSION_INFO,

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
    DELETE_SUBSCRIPTION_ERROR,
    FILTER_SUBSCRIPTIONS,
    SORT_SUBSCRIPTIONS,

    GET_ORDERS,
    GET_ORDERS_STATUS,
    GET_ORDERS_ERROR,
    GET_ORDER,
    GET_ORDER_STATUS,
    GET_ORDER_ERROR,
    ADD_ORDER,
    ADD_ORDER_STATUS,
    ADD_ORDER_ERROR,
    UPDATE_ORDER,
    UPDATE_ORDER_STATUS,
    UPDATE_ORDER_ERROR,
    DELETE_ORDER,
    DELETE_ORDER_STATUS,
    DELETE_ORDER_ERROR,
    FILTER_ORDERS,
    SORT_ORDERS,

    GET_TRANSACTIONS,
    GET_TRANSACTIONS_STATUS,
    GET_TRANSACTIONS_ERROR,
    FILTER_TRANSACTIONS,
    SORT_TRANSACTIONS,

    GET_PORTFOLIO,
    GET_PORTFOLIO_STATUS,
    GET_PORTFOLIO_ERROR,
    FILTER_PORTFOLIO,
    SORT_PORTFOLIO,

    GET_SETTINGS,
    GET_SETTINGS_STATUS,
    GET_SETTINGS_ERROR,
    UPDATE_SETTINGS,
    UPDATE_SETTINGS_STATUS,
    UPDATE_SETTINGS_ERROR,

} from "../types";


//const API_URL = 'http://localhost:3001';

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

// getPair action (thunk function)
export const getPair = (dispatch, token,symbol1,symbol2) =>{
    const dataCbPair = (data)=>dispatch({type:GET_PAIR,payload:data});
    const statusCbPair = (value)=>dispatch({type:GET_PAIR_STATUS,payload:value});
    const errorCbPair = (errorObj)=>dispatch({type:GET_PAIR_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/pair/valid?symbol1Id=${symbol1}&symbol2Id=${symbol2}`,  dataCbPair, statusCbPair, errorCbPair,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
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
    },[
        ()=>dispatch({type:SET_SESSION_INFO,payload:true})
    ]);
    
};

// resetNewAccountStatus
export const resetSignInStatus = (dispatch)=>dispatch({type:SIGN_IN_STATUS,payload:0});

// getSingOut action (thunk function)
export const getSingOut = (dispatch, token) =>{
    const dataCbSingOut = (data)=>dispatch({type:SIGN_OUT,payload:data});
    const statusCbSingOut = (value)=>dispatch({type:SIGN_OUT_STATUS,payload:value});
    const errorCbSingOut = (errorObj)=>dispatch({type:SIGN_OUT_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/logout/`,  dataCbSingOut, statusCbSingOut, errorCbSingOut,{
        headers:{          
            "Authorization": `Bearer ${token}`,
        },
    },[
        ()=>dispatch({type:SET_SESSION_INFO,payload:false})
    ]);
    
};

// getSubscriptions action (thunk function)
export const getSubscriptions = (dispatch, token) =>{
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
export const getSubscription = (dispatch, token, id) =>{
    const dataCbSubscription = (data)=>dispatch({type:GET_SUBSCRIPTION,payload:data});
    const statusCbSubscription = (value)=>dispatch({type:GET_SUBSCRIPTION_STATUS,payload:value});
    const errorCbSubscription = (errorObj)=>dispatch({type:GET_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCbSubscription, statusCbSubscription, errorCbSubscription,{
        headers:{          
            "Authorization": `Bearer ${token}`,
        },
    });
};

// addSubscription action (thunk function)
export const addSubscription = (dispatch, token, form) =>{
    const dataCbAddSubscription = (data)=>dispatch({type:ADD_SUBSCRIPTION,payload:data});
    const statusCbAddSubscription = (value)=>dispatch({type:ADD_SUBSCRIPTION_STATUS,payload:value});
    const errorCbAddSubscription = (errorObj)=>dispatch({type:ADD_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/`,  dataCbAddSubscription, statusCbAddSubscription, errorCbAddSubscription,{
        headers:{
            "Content-Type": "application/json",            
            "Authorization": `Bearer ${token}`,
        },
        method:'POST',
        body:form
    });
};

// resetaddSubscriptionStatus
export const resetAddSubscriptionStatus = (dispatch)=>dispatch({type:ADD_SUBSCRIPTION_STATUS,payload:0});

// updateSubscription action (thunk function)
export const updateSubscription = (dispatch, token, form, id) =>{
    const dataCbupdateSubscription = (data)=>dispatch({type:UPDATE_SUBSCRIPTION,payload:data});
    const statusCbupdateSubscription = (value)=>dispatch({type:UPDATE_SUBSCRIPTION_STATUS,payload:value});
    const errorCbupdateSubscription = (errorObj)=>dispatch({type:UPDATE_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCbupdateSubscription, statusCbupdateSubscription, errorCbupdateSubscription,{
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method:'PUT',
        body:form
    });
};

// resetUpdateSubscriptionStatus
export const resetUpdateSubscriptionStatus = (dispatch)=>dispatch({type:UPDATE_SUBSCRIPTION_STATUS,payload:0});


// deleteSubscription action (thunk function)
export const deleteSubscription = (dispatch,token, id) =>{
    const dataCbdeleteSubscription = (data)=>dispatch({type:DELETE_SUBSCRIPTION,payload:data});
    const statusCbdeleteSubscription = (value)=>dispatch({type:DELETE_SUBSCRIPTION_STATUS,payload:value});
    const errorCbdeleteSubscription = (errorObj)=>dispatch({type:DELETE_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCbdeleteSubscription, statusCbdeleteSubscription, errorCbdeleteSubscription,{
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method:'DELETE'
    },[
        ()=>getSubscriptions(dispatch, token)
    ]);
};

// filter subscriptions payload=filterForm{criteria1:"",criteria2:"xxx"...}
export const filterSubscriptions = (dispatch, filterForm)=>dispatch({type:FILTER_SUBSCRIPTIONS,payload:filterForm});

// order subscriptions payload='orderCriteria' 
export const sortSubscriptions = (dispatch, order)=>dispatch({type:SORT_SUBSCRIPTIONS,payload:order});

// getOrders action (thunk function)
export const getOrders = (dispatch, token) =>{
    const dataCbOrders = (data)=>dispatch({type:GET_ORDERS,payload:data});
    const statusCbOrders = (value)=>dispatch({type:GET_ORDERS_STATUS,payload:value});
    const errorCbOrders = (errorObj)=>dispatch({type:GET_ORDERS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/`,  dataCbOrders, statusCbOrders, errorCbOrders,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};

// getOrder action (thunk function)
export const getOrder = (dispatch, token, id) =>{
    const dataCbOrder = (data)=>dispatch({type:GET_ORDER,payload:data});
    const statusCbOrder = (value)=>dispatch({type:GET_ORDER_STATUS,payload:value});
    const errorCbOrder = (errorObj)=>dispatch({type:GET_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCbOrder, statusCbOrder, errorCbOrder,{
        headers:{          
            "Authorization": `Bearer ${token}`,
        },
    });
};

// addOrder action (thunk function)
export const addOrder = (dispatch, token, form) =>{
    const dataCbAddOrder = (data)=>dispatch({type:ADD_ORDER,payload:data});
    const statusCbAddOrder = (value)=>dispatch({type:ADD_ORDER_STATUS,payload:value});
    const errorCbAddOrder = (errorObj)=>dispatch({type:ADD_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/`,  dataCbAddOrder, statusCbAddOrder, errorCbAddOrder,{
        headers:{
            "Content-Type": "application/json",            
            "Authorization": `Bearer ${token}`,
        },
        method:'POST',
        body:form
    });
};

// resetaddOrderStatus
export const resetAddOrderStatus = (dispatch)=>dispatch({type:ADD_ORDER_STATUS,payload:0});

// updateOrder action (thunk function)
export const updateOrder = (dispatch, token, form, id) =>{
    const dataCbupdateOrder = (data)=>dispatch({type:UPDATE_ORDER,payload:data});
    const statusCbupdateOrder = (value)=>dispatch({type:UPDATE_ORDER_STATUS,payload:value});
    const errorCbupdateOrder = (errorObj)=>dispatch({type:UPDATE_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCbupdateOrder, statusCbupdateOrder, errorCbupdateOrder,{
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method:'PUT',
        body:form
    });
};

// resetUpdateOrderStatus
export const resetUpdateOrderStatus = (dispatch)=>dispatch({type:UPDATE_ORDER_STATUS,payload:0});


// deleteOrder action (thunk function)
export const deleteOrder = (dispatch,token, id) =>{
    const dataCbdeleteOrder = (data)=>dispatch({type:DELETE_ORDER,payload:data});
    const statusCbdeleteOrder = (value)=>dispatch({type:DELETE_ORDER_STATUS,payload:value});
    const errorCbdeleteOrder = (errorObj)=>dispatch({type:DELETE_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCbdeleteOrder, statusCbdeleteOrder, errorCbdeleteOrder,{
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method:'DELETE'
    },[
        ()=>getOrders(dispatch, token)
    ]);
};

// filter orderscriptions payload=filterForm{criteria1:"",criteria2:"xxx"...}
export const filterOrders = (dispatch, filterForm)=>dispatch({type:FILTER_ORDERS,payload:filterForm});

// order orderscriptions payload='orderCriteria' 
export const sortOrders = (dispatch, order)=>dispatch({type:SORT_ORDERS,payload:order});

// getTransactions action (thunk function)
export const getTransactions = (dispatch, token,dateFrom='2000-01-01',dateTo='2100-12-31') =>{
    const dataCbTransactions = (data)=>dispatch({type:GET_TRANSACTIONS,payload:data});
    const statusCbTransactions = (value)=>dispatch({type:GET_TRANSACTIONS_STATUS,payload:value});
    const errorCbTransactions = (errorObj)=>dispatch({type:GET_TRANSACTIONS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/transactions?dateFrom=${dateFrom}&dateTo=${dateTo}`,  dataCbTransactions, statusCbTransactions, errorCbTransactions,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};


// filter transactions payload=filterForm{criteria1:"",criteria2:"xxx"...}
export const filterTransactions = (dispatch, filterForm)=>dispatch({type:FILTER_TRANSACTIONS,payload:filterForm});

// order transactions payload='orderCriteria' 
export const sortTransactions = (dispatch, order)=>dispatch({type:SORT_TRANSACTIONS,payload:order});

// getPortfolio action (thunk function)
export const getPortfolio = (dispatch, token) =>{
    const dataCbPortfolio = (data)=>dispatch({type:GET_PORTFOLIO,payload:data});
    const statusCbPortfolio = (value)=>dispatch({type:GET_PORTFOLIO_STATUS,payload:value});
    const errorCbPortfolio = (errorObj)=>dispatch({type:GET_PORTFOLIO_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/portfolio/`,  dataCbPortfolio, statusCbPortfolio, errorCbPortfolio,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};


//  filter portfolio payload=filterForm{criteria1:"",criteria2:"xxx"...}
export const filterPortfolio = (dispatch, filterForm)=>dispatch({type:FILTER_PORTFOLIO,payload:filterForm});

// order portfolio payload='orderCriteria' 
export const sortPortfolio = (dispatch, order)=>dispatch({type:SORT_PORTFOLIO,payload:order});

// getSettings action (thunk function)
export const getSettings = (dispatch, token) =>{
    const dataCbSettings = (data)=>dispatch({type:GET_SETTINGS,payload:data});
    const statusCbSettings = (value)=>dispatch({type:GET_SETTINGS_STATUS,payload:value});
    const errorCbSettings = (errorObj)=>dispatch({type:GET_SETTINGS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/settings/`,  dataCbSettings, statusCbSettings, errorCbSettings,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};

// updateSettings action (thunk function)
export const updateSettings = (dispatch, token, form, id) =>{
    const dataCbupdateSettings = (data)=>dispatch({type:UPDATE_SETTINGS,payload:data});
    const statusCbupdateSettings = (value)=>dispatch({type:UPDATE_SETTINGS_STATUS,payload:value});
    const errorCbupdateSettings = (errorObj)=>dispatch({type:UPDATE_SETTINGS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCbupdateSettings, statusCbupdateSettings, errorCbupdateSettings,{
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method:'PUT',
        body:form
    });
};