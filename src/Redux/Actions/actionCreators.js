import {helpFetch} from '../../helpers/helpFetch'

import { 
    GET_PRICES,
    GET_PRICES_STATUS,
    GET_PRICES_ERROR,
    FILTER_PRICES,
    SORT_PRICES,
    SET_PRICES_CURRENCY,

    GET_SYMBOLS,
    GET_SYMBOLS_STATUS,
    GET_SYMBOLS_ERROR,

    GET_PAIR,
    GET_PAIR_STATUS,
    GET_PAIR_ERROR,


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
    UPDATE_SESSION_INFO,
    SET_SESSION_THEME,
    SET_SETTINGS,
    SET_SETTINGS_STATUS,
    SET_SETTINGS_ERROR,

    GET_SUBSCRIPTIONS,
    GET_SUBSCRIPTIONS_STATUS,
    GET_SUBSCRIPTIONS_ERROR,
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
    FORM_SUBSCRIPTIONS_NEW_BTN,
    FORM_SUBSCRIPTIONS_EDIT_BTN,
    FORM_SUBSCRIPTIONS_RESET_BTN,
    FORM_SUBSCRIPTIONS_HANDLE_CHANGE,
    FORM_SUBSCRIPTIONS_VALIDATE,

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
    FORM_ORDERS_NEW_BTN,
    FORM_ORDERS_EDIT_BTN,
    FORM_ORDERS_RESET_BTN,
    FORM_ORDERS_HANDLE_CHANGE,
    FORM_ORDERS_VALIDATE,

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

} from "../types";


//const API_URL = 'http://localhost:3001';

const API_URL = 'https://pfapi2.herokuapp.com';



// getGlobalPrices action (thunk function)
export const getGlobalPrices = (dispatch, currency) =>{
    const dataCb = (data)=>dispatch({type:GET_PRICES,payload:data});
    const statusCb = (value)=>dispatch({type:GET_PRICES_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_PRICES_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/cryptos/${currency}`,  dataCb, statusCb, errorCb);
};

// getSymbols action (thunk function)
export const getSymbols = (dispatch) =>{
    const dataCb = (data)=>dispatch({type:GET_SYMBOLS,payload:data});
    const statusCb = (value)=>dispatch({type:GET_SYMBOLS_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_SYMBOLS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/cryptos/symbols`,  dataCb, statusCb, errorCb);
};

// getPair action (thunk function)
export const getPair = (dispatch, token,symbol1,symbol2) =>{
    const dataCb = (data)=>dispatch({type:GET_PAIR,payload:data});
    const statusCb = (value)=>dispatch({type:GET_PAIR_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_PAIR_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/pair/valid?symbol1Id=${symbol1}&symbol2Id=${symbol2}`,  dataCb, statusCb, errorCb,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};

// filterGlobalPrices action
export const filterPrices = (dispatch, filterForm)=>dispatch({type:FILTER_PRICES,payload:filterForm});

// filterGlobalPrices action
export const sortPrices = (dispatch, order)=>dispatch({type:SORT_PRICES,payload:order});

// filterGlobalPrices action
export const currencyGlobalPrices = (dispatch, currency)=>dispatch({type:SET_PRICES_CURRENCY,payload:currency});

// postNewAccount action (thunk function)
export const postNewAccount = (dispatch, form) =>{
    const dataCb = (data)=>dispatch({type:NEW_ACCOUNT,payload:data});
    const statusCb = (value)=>dispatch({type:NEW_ACCOUNT_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:NEW_ACCOUNT_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/signup/`,  dataCb, statusCb, errorCb,{
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
export const postSignIn = async (dispatch, form,token) =>{
    const dataCb = (data)=>dispatch({type:SIGN_IN,payload:data});
    const statusCb = (value)=>dispatch({type:SIGN_IN_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:SIGN_IN_ERROR,payload:errorObj});
    await helpFetch(`${API_URL}/login`,  dataCb, statusCb, errorCb,{
        headers:{
            "Content-Type": "application/json",
        },
        method:'POST',
        body:form
    });
    dispatch({type:SET_SESSION_INFO,payload:true});    
};

// postSettings action (thunk function)
export const postSettings = async (dispatch, form,token) =>{
    const dataCb = (data)=>dispatch({type:SET_SETTINGS,payload:data});
    const statusCb = (value)=>dispatch({type:SET_SETTINGS_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:SET_SETTINGS_ERROR,payload:errorObj});
    await helpFetch(`${API_URL}/settings`,  dataCb, statusCb, errorCb,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
        method:'POST',
        body:form
    });
    dispatch({type:UPDATE_SESSION_INFO,payload:true});    
};

// resetNewAccountStatus
export const resetSignInStatus = (dispatch)=>dispatch({type:SIGN_IN_STATUS,payload:0});

// getSingOut action (thunk function)
export const getSingOut = (dispatch, token) =>{
    const dataCb = (data)=>dispatch({type:SIGN_OUT,payload:data});
    const statusCb = (value)=>dispatch({type:SIGN_OUT_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:SIGN_OUT_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/logout/`,  dataCb, statusCb, errorCb,{
        headers:{          
            "Authorization": `Bearer ${token}`,
        },
    },[
        ()=>dispatch({type:SET_SESSION_INFO,payload:false})
    ]);
    
};
export const toggleTheme = (dispatch)=>dispatch({type:SET_SESSION_THEME,payload:0});

// ==== SUBSCRIPTIONS ==============================================================================

// Table info
export const getSubscriptions = (dispatch, token) =>{
    const dataCb = (data)=>dispatch({type:GET_SUBSCRIPTIONS,payload:data});
    const statusCb = (value)=>dispatch({type:GET_SUBSCRIPTIONS_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_SUBSCRIPTIONS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/`,  dataCb, statusCb, errorCb,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};

// New button callback
export const formSubscriptionsNewBtn = (dispatch)=>dispatch({type:FORM_SUBSCRIPTIONS_NEW_BTN,payload:null});

// Edit button callback
export const formSubscriptionsEditBtn = (dispatch,dataToEdit)=>dispatch({type:FORM_SUBSCRIPTIONS_EDIT_BTN,payload:dataToEdit});

// REset fields button callback
export const formSubscriptionsResetBtn = (dispatch)=>dispatch({type:FORM_SUBSCRIPTIONS_RESET_BTN,payload:null});

// Handle change callback
export const formSubscriptionsHandleChange = (dispatch,key,value)=>dispatch({type:FORM_SUBSCRIPTIONS_HANDLE_CHANGE,payload:{key,value}});

// Validate form callback
export const formSubscriptionsValidate = (dispatch)=>dispatch({type:FORM_SUBSCRIPTIONS_VALIDATE,payload:null});


// addSubscription action (thunk function)
export const addSubscription = (dispatch, token, form) =>{
    const dataCb = (data)=>dispatch({type:ADD_SUBSCRIPTION,payload:data});
    const statusCb = (value)=>dispatch({type:ADD_SUBSCRIPTION_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:ADD_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/`,  dataCb, statusCb, errorCb,{
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
    const dataCb = (data)=>dispatch({type:UPDATE_SUBSCRIPTION,payload:data});
    const statusCb = (value)=>dispatch({type:UPDATE_SUBSCRIPTION_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:UPDATE_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCb, statusCb, errorCb,{
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
    const dataCb = (data)=>dispatch({type:DELETE_SUBSCRIPTION,payload:data});
    const statusCb = (value)=>dispatch({type:DELETE_SUBSCRIPTION_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:DELETE_SUBSCRIPTION_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/subs/${id}`,  dataCb, statusCb, errorCb,{
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


// ==== ORDERS ==============================================================================
// getOrders action (thunk function)
export const getOrders = (dispatch, token, status=false,dateFrom=false, dateTo=false) =>{
    const dataCb = (data)=>dispatch({type:GET_ORDERS,payload:data});
    const statusCb = (value)=>dispatch({type:GET_ORDERS_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_ORDERS_ERROR,payload:errorObj});
    let queryArray = [
        {key:'status',value:status},
        {key:'dateFrom',value:dateFrom},
        {key:'dateTo',value:dateTo}
    ];
    let queryString = ""
    queryArray.forEach(q=>{
        if(q.value){
            if(queryString===""){
                queryString=`?${q.key}=${q.value}`
            }else{
                queryString=`${queryString}&${q.key}=${q.value}`
            }
        }
    })
    helpFetch(`${API_URL}/orders/${queryString}`,  dataCb, statusCb, errorCb,{
        headers:{
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        },
    });
};

// New button callback
export const formOrdersNewBtn = (dispatch)=>dispatch({type:FORM_ORDERS_NEW_BTN,payload:null});

// Edit button callback
export const formOrdersEditBtn = (dispatch,dataToEdit)=>dispatch({type:FORM_ORDERS_EDIT_BTN,payload:dataToEdit});

// REset fields button callback
export const formOrdersResetBtn = (dispatch)=>dispatch({type:FORM_ORDERS_RESET_BTN,payload:null});

// Handle change callback
export const formOrdersHandleChange = (dispatch,key,value)=>dispatch({type:FORM_ORDERS_HANDLE_CHANGE,payload:{key,value}});

// Validate form callback
export const formOrdersValidate = (dispatch)=>dispatch({type:FORM_ORDERS_VALIDATE,payload:null});


// getOrder action (thunk function)
export const getOrder = (dispatch, token, id) =>{

    const dataCb = (data)=>dispatch({type:GET_ORDER,payload:data});
    const statusCb = (value)=>dispatch({type:GET_ORDER_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCb, statusCb, errorCb,{
        headers:{          
            "Authorization": `Bearer ${token}`,
        },
    });
};

// addOrder action (thunk function)
export const addOrder = (dispatch, token, form) =>{
    const dataCb = (data)=>dispatch({type:ADD_ORDER,payload:data});
    const statusCb = (value)=>dispatch({type:ADD_ORDER_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:ADD_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/`,  dataCb, statusCb, errorCb,{
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
    const dataCb = (data)=>dispatch({type:UPDATE_ORDER,payload:data});
    const statusCb = (value)=>dispatch({type:UPDATE_ORDER_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:UPDATE_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCb, statusCb, errorCb,{
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
    const dataCb = (data)=>dispatch({type:DELETE_ORDER,payload:data});
    const statusCb = (value)=>dispatch({type:DELETE_ORDER_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:DELETE_ORDER_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/orders/${id}`,  dataCb, statusCb, errorCb,{
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

// ==== TRANSACTIONS ==============================================================================
// getTransactions action (thunk function)
export const getTransactions = (dispatch, token,dateFrom='2000-01-01',dateTo='2100-12-31') =>{
    const dataCb = (data)=>dispatch({type:GET_TRANSACTIONS,payload:data});
    const statusCb = (value)=>dispatch({type:GET_TRANSACTIONS_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_TRANSACTIONS_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/transactions?dateFrom=${dateFrom}&dateTo=${dateTo}`,  dataCb, statusCb, errorCb,{
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

// ==== PORTFOLIO ==============================================================================
// getPortfolio action (thunk function)
export const getPortfolio = (dispatch, token) =>{
    const dataCb = (data)=>dispatch({type:GET_PORTFOLIO,payload:data});
    const statusCb = (value)=>dispatch({type:GET_PORTFOLIO_STATUS,payload:value});
    const errorCb = (errorObj)=>dispatch({type:GET_PORTFOLIO_ERROR,payload:errorObj});
    helpFetch(`${API_URL}/portfolio/`,  dataCb, statusCb, errorCb,{
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


