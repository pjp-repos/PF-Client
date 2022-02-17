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

    // Fetch to get subscriptions
    GET_SUBSCRIPTIONS,
    GET_SUBSCRIPTIONS_STATUS,
    GET_SUBSCRIPTIONS_ERROR,
    // Fetch to add a new subscription
    ADD_SUBSCRIPTION,
    ADD_SUBSCRIPTION_STATUS,
    ADD_SUBSCRIPTION_ERROR,
    // Fetch to edit an existing subscription
    UPDATE_SUBSCRIPTION,
    UPDATE_SUBSCRIPTION_STATUS,
    UPDATE_SUBSCRIPTION_ERROR,
    // Fetch to delete an existing subscription
    DELETE_SUBSCRIPTION,
    DELETE_SUBSCRIPTION_STATUS,
    DELETE_SUBSCRIPTION_ERROR,
    // Filter an sorting setting
    FILTER_SUBSCRIPTIONS,
    SORT_SUBSCRIPTIONS,
    // Form events
    FORM_SUBSCRIPTIONS_NEW_BTN,
    FORM_SUBSCRIPTIONS_EDIT_BTN,
    FORM_SUBSCRIPTIONS_RESET_BTN,
    FORM_SUBSCRIPTIONS_HANDLE_CHANGE,
    FORM_SUBSCRIPTION_VALIDATE,

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

import filterAndSort from "../FilterAndSort/filterAndSort";
import { validateForm, validateField } from "../FormValidations/validateForm";


const initialState = {
    session:{
        userName:"",
        token:"",
        email:"",
        isAuthenticated : false,
        roles:[]
    },
    prices:{
        data:[],
        status:0,
        error:{},
        filter:{
            symbol:""
        },
        order:"",
        currency:"usd"
    },
    symbols:{
        data:[],
        status:0,
        error:{},
    },
    pair:{
        data:[],
        status:0,
        error:{},
    },
    newAccount:{
        data:{},
        status:0,
        error:{},
    },
    signIn:{
        data:{},
        status:0,
        error:{},
    },
    signOut:{
        data:{},
        status:0,
        error:{},
    },
    // --- Subscriptions--------------------
    subscriptions:{
        data:[],
        status:0,
        error:{},
        filter:{
            dateFrom:"",
            dateTo:"",
            symbols:""
        },
        order:false,
    },
    addSubscription:{
        data:{},
        status:0,
        error:{},
    },
    updateSubscription:{
        data:{},
        status:0,
        error:{},
    },
    deleteSubscription:{
        data:{},
        status:0,
        error:{},
    },
    formSubscriptions:{
        initialForm:{
            id:null,
            symbol1Id:"",
            symbol2Id:"",
            risePrice:"0",
            fallPrice:"0"
        },
        form:null,
        edit:false,
        errors:{},
        error:true
    },

    // --- Orders ----------------------------
    orders:{
        data:[],
        status:0,
        error:{},
        filter:"",
        order:false,
    },
    order:{
        data:{},
        status:0,
        error:{},
    },
    addOrder:{
        data:{},
        status:0,
        error:{},
    },
    updateOrder:{
        data:{},
        status:0,
        error:{},
    },
    deleteOrder:{
        data:{},
        status:0,
        error:{},
    },
    transactions:{
        data:[],
        status:0,
        error:{},
        filter:{
            dateFrom:"",
            dateTo:"",
            symbol:""
        },
        order:"",
    },
    portfolio:{
        data:[],
        status:0,
        error:{},
        filter:{
            dateFrom:"",
            dateTo:"",
            symbols:""
        },
        order:"",
    },
    setting:{
        data:[],
        status:0,
        error:{},
    },
    updateSetting:{
        data:[],
        status:0,
        error:{},
    },
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRICES:
            let prices = [...action.payload];
            prices = filterAndSort(
                'prices',
                prices,
                state.prices.filter,
                state.prices.order
            );
            return {
                ...state,
                prices:{
                    ...state.prices,
                    data:prices
                }
            }

        case GET_PRICES_STATUS:
            return {
                ...state,
                prices:{
                    ...state.prices,
                    status:action.payload
                }
            }

        case GET_PRICES_ERROR:
            return {
                ...state,
                prices:{
                    ...state.prices,
                    error:action.payload
                }
            }

        case GET_SYMBOLS:
            return {
                ...state,
                symbols:{
                    ...state.symbols,
                    data:action.payload
                }
            }

        case GET_SYMBOLS_STATUS:
            return {
                ...state,
                symbols:{
                    ...state.symbols,
                    status:action.payload
                }
            }

        case GET_SYMBOLS_ERROR:
            return {
                ...state,
                symbols:{
                    ...state.symbols,
                    error:action.payload
                }
            }
        case GET_PAIR:
            return {
                ...state,
                pair:{
                    ...state.pair,
                    data:action.payload
                }
            }

        case GET_PAIR_STATUS:
            return {
                ...state,
                pair:{
                    ...state.pair,
                    status:action.payload
                }
            }

        case GET_PAIR_ERROR:
            return {
                ...state,
                pair:{
                    ...state.pair,
                    error:action.payload
                }
            }

        case SET_PRICES_FILTER:
            return {
                ...state,
                prices:{
                    ...state.prices,
                    filter:action.payload
                }
            }

        case SET_PRICES_ORDER:
            return {
                ...state,
                prices:{
                    ...state.prices,
                    order:action.payload
                }
            }

        case SET_PRICES_CURRENCY:
            return {
                ...state,
                prices:{
                    ...state.prices,
                    currency:action.payload
                }
            }

        case NEW_ACCOUNT:
            return {
                ...state,
                newAccount:{
                    ...state.newAccount,
                    data:action.payload
                }
            }

        case NEW_ACCOUNT_STATUS:
            return {
                ...state,
                newAccount:{
                    ...state.newAccount,
                    status:action.payload
                }
            }

        case NEW_ACCOUNT_ERROR:
            return {
                ...state,
                newAccount:{
                    ...state.newAccount,
                    error:action.payload
                }
            }

        case SIGN_IN:
            return {
                ...state,
                signIn:{
                    ...state.signIn,
                    data:action.payload
                }
            }

        case SIGN_IN_STATUS:
            return {
                ...state,
                signIn:{
                    ...state.signIn,
                    status:action.payload
                }
            }

        case SIGN_IN_ERROR:
            return {
                ...state,
                signIn:{
                    ...state.signIn,
                    error:action.payload
                }
            }

        case SIGN_OUT:
            return {
                ...state,
                signIn:{
                    ...state.signIn,
                    data:action.payload
                }
            }

        case SIGN_OUT_STATUS:
            return {
                ...state,
                signOut:{
                    ...state.signOut,
                    status:action.payload
                }
            }

        case SIGN_OUT_ERROR:
            return {
                ...state,
                signOut:{
                    ...state.signOut,
                    error:action.payload
                }
            }

        case SET_SESSION_INFO:
            let userName="";
            let token="";
            let email="";
            let isAuthenticated= false;
            //Sign in or sign out?
            if(action.payload){
                if(state.signIn.status===2){
                    userName=state.signIn.data.username;
                    token=state.signIn.data.tokenUser;
                    email=state.signIn.data.email;
                    isAuthenticated=true;
                };
            }
            return {
                ...state,
                session:{
                    ...state.session,
                    userName:userName,
                    token:token,
                    email:email,
                    isAuthenticated:isAuthenticated,
                }
            }

        // ============ SUBSCRIPTIONS ===============================

        case GET_SUBSCRIPTIONS:
            let subscriptions = [...action.payload];
            // subscriptions = filterAndSort(
            //     'subscriptions',
            //     subscriptions,
            //     state.subscriptions.filter,
            //     state.subscriptions.order
            // );
            return {
                ...state,
                subscriptions:{
                    ...state.subscriptions,
                    data:subscriptions
                }
            }

        case GET_SUBSCRIPTIONS_STATUS:
            return {
                ...state,
                subscriptions:{
                    ...state.subscriptions,
                    status:action.payload
                }
            }

        case GET_SUBSCRIPTIONS_ERROR:
            return {
                ...state,
                subscriptions:{
                    ...state.subscriptions,
                    error:action.payload
                }
            }

        case FORM_SUBSCRIPTIONS_NEW_BTN:
            return {
                ...state,
                // Reset Fetch status for 
                addSubscription:{
                    ...state.addSubscription,
                    status:0
                },
                formSubscriptions:{
                    ...state.formSubscriptions,
                    form:state.formSubscriptions.initialForm,
                    edit:false,
                    error:true
                }
            }
            
            case FORM_SUBSCRIPTIONS_EDIT_BTN:
                return {
                    ...state,
                    updateSubscription:{
                        ...state.updateSubscription,
                        status:0
                    },
                    formSubscriptions:{
                        ...state.formSubscriptions,
                        form:{
                            id:action.payload.id,
                            symbol1Id:action.payload.symbol1Id,
                            symbol2Id:action.payload.symbol2Id,
                            risePrice:action.payload.risePrice,
                            fallPrice:action.payload.fallPrice,   
                        },
                        edit:true,
                        error:true
                    }
                }
                
            case FORM_SUBSCRIPTIONS_RESET_BTN:
                return {
                    ...state,
                    formSubscriptions:{
                        ...state.formSubscriptions,
                        form:state.formSubscriptions.initialForm,
                    }
                }
                
            case FORM_SUBSCRIPTIONS_HANDLE_CHANGE:
                return {
                    ...state,
                    formSubscriptions:{
                        ...state.formSubscriptions,
                        form:{
                            ...state.formSubscriptions.form,
                            [action.payload.key]:action.payload.value
                        },
                }
            }   

        case FORM_SUBSCRIPTION_VALIDATE:
            const [subscripcionValidateError, subscripcionValidateErrors] = validateForm(
                'subscriptions',
                state.formSubscriptions.form
            )
            return {
                ...state,
                formSubscriptions:{
                    ...state.formSubscriptions,
                    error:subscripcionValidateError,
                    errors:subscripcionValidateErrors
                }
            }  

        case ADD_SUBSCRIPTION:
            return {
                ...state,
                addSubscription:{
                    ...state.addSubscription,
                    data:action.payload
                }
            }

        case ADD_SUBSCRIPTION_STATUS:
            return {
                ...state,
                addSubscription:{
                    ...state.addSubscription,
                    status:action.payload
                }
            }

        case ADD_SUBSCRIPTION_ERROR:
            return {
                ...state,
                addSubscription:{
                    ...state.addSubscription,
                    error:action.payload
                }
            }


        case UPDATE_SUBSCRIPTION:
            return {
                ...state,
                updateSubscription:{
                    ...state.updateSubscription,
                    data:action.payload
                }
            }

        case UPDATE_SUBSCRIPTION_STATUS:
            return {
                ...state,
                updateSubscription:{
                    ...state.updateSubscription,
                    status:action.payload
                }
            }

        case UPDATE_SUBSCRIPTION_ERROR:
            return {
                ...state,
                updateSubscription:{
                    ...state.updateSubscription,
                    error:action.payload
                }
            }

        case DELETE_SUBSCRIPTION:
            return {
                ...state,
                deleteSubscription:{
                    ...state.deleteSubscription,
                    data:action.payload
                }
            }

        case DELETE_SUBSCRIPTION_STATUS:
            return {
                ...state,
                deleteSubscription:{
                    ...state.deleteSubscription,
                    status:action.payload
                }
            }

        case DELETE_SUBSCRIPTION_ERROR:
            return {
                ...state,
                deleteSubscription:{
                    ...state.deleteSubscription,
                    error:action.payload
                }
            }

        case FILTER_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions:{
                    ...state.subscriptions,
                    filter:action.payload
                }
            }

        case SORT_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions:{
                    ...state.subscriptions,
                    order:action.payload
                }
            }    

        case GET_ORDERS:
            let orders = [...action.payload];
            // orders = filterAndSort(
            //     'orders',
            //     orders,
            //     state.orders.filter,
            //     state.orders.order
            // );
            return {
                ...state,
                orders:{
                    ...state.orders,
                    data:orders
                }
            }

        case GET_ORDERS_STATUS:
            return {
                ...state,
                orders:{
                    ...state.orders,
                    status:action.payload
                }
            }

        case GET_ORDERS_ERROR:
            return {
                ...state,
                orders:{
                    ...state.orders,
                    error:action.payload
                }
            }

        case GET_ORDER:
            return {
                ...state,
                order:{
                    ...state.order,
                    data:action.payload
                }
            }

        case GET_ORDER_STATUS:
            return {
                ...state,
                order:{
                    ...state.order,
                    status:action.payload
                }
            }
    
        case GET_ORDER_ERROR:
            return {
                ...state,
                order:{
                    ...state.order,
                    error:action.payload
                }
            }

        case ADD_ORDER:
            return {
                ...state,
                addSubscription:{
                    ...state.addSubscription,
                    data:action.payload
                }
            }

        case ADD_ORDER_STATUS:
            return {
                ...state,
                addSubscription:{
                    ...state.addSubscription,
                    status:action.payload
                }
            }

        case ADD_ORDER_ERROR:
            return {
                ...state,
                addSubscription:{
                    ...state.addSubscription,
                    error:action.payload
                }
            }


        case UPDATE_ORDER:
            return {
                ...state,
                updateSubscription:{
                    ...state.updateSubscription,
                    data:action.payload
                }
            }

        case UPDATE_ORDER_STATUS:
            return {
                ...state,
                updateSubscription:{
                    ...state.updateSubscription,
                    status:action.payload
                }
            }

        case UPDATE_ORDER_ERROR:
            return {
                ...state,
                updateSubscription:{
                    ...state.updateSubscription,
                    error:action.payload
                }
            }

        case DELETE_ORDER:
            return {
                ...state,
                deleteSubscription:{
                    ...state.deleteSubscription,
                    data:action.payload
                }
            }

        case DELETE_ORDER_STATUS:
            return {
                ...state,
                deleteSubscription:{
                    ...state.deleteSubscription,
                    status:action.payload
                }
            }

        case DELETE_ORDER_ERROR:
            return {
                ...state,
                deleteSubscription:{
                    ...state.deleteSubscription,
                    error:action.payload
                }
            }

        case FILTER_ORDERS:
            return {
                ...state,
                orders:{
                    ...state.orders,
                    filter:action.payload
                }
            }

        case SORT_ORDERS:
            return {
                ...state,
                orders:{
                    ...state.orders,
                    order:action.payload
                }
            }

        case GET_TRANSACTIONS:
            let transactions = [...action.payload];
            transactions = filterAndSort(
                'transactions',
                transactions,
                state.transactions.filter,
                state.transactions.order
            );
            return {
                ...state,
                transactions:{
                    ...state.transactions,
                    data:transactions
                }
            }
        
        case GET_TRANSACTIONS_STATUS:
            return {
                ...state,
                transactions:{
                    ...state.transactions,
                    status:action.payload
                }
            }

        case GET_TRANSACTIONS_ERROR:
            return {
                ...state,
                transactions:{
                    ...state.transactions,
                    error:action.payload
                }
            }

        case FILTER_TRANSACTIONS:
            return {
                ...state,
                transactions:{
                    ...state.transactions,
                    filter:action.payload
                }
            }

        case SORT_TRANSACTIONS:
            return {
                ...state,
                transactions:{
                    ...state.transactions,
                    order:action.payload
                }
            }

        case GET_PORTFOLIO:
            let portfolio = [...action.payload];
            portfolio = filterAndSort(
                'portfolio',
                portfolio,
                state.portfolio.filter,
                state.portfolio.order
            );
            return {
                ...state,
                portfolio:{
                    ...state.portfolio,
                    data:portfolio
                }
            }
        
        case GET_PORTFOLIO_STATUS:
            return {
                ...state,
                portfolio:{
                    ...state.portfolio,
                    status:action.payload
                }
            }

        case GET_PORTFOLIO_ERROR:
            return {
                ...state,
                portfolio:{
                    ...state.portfolio,
                    error:action.payload
                }
            }

        case FILTER_PORTFOLIO:
            return {
                ...state,
                portfolio:{
                    ...state.portfolio,
                    filter:action.payload
                }
            }

        case SORT_PORTFOLIO:
            return {
                ...state,
                portfolio:{
                    ...state.portfolio,
                    order:action.payload
                }
            }

        case GET_SETTINGS:
            let settings = [...action.payload];

            return {
                ...state,
                settings:{
                    ...state.settings,
                    data:settings
                }
            }
        
        case GET_SETTINGS_STATUS:
            return {
                ...state,
                settings:{
                    ...state.settings,
                    status:action.payload
                }
            }

        case GET_SETTINGS_ERROR:
            return {
                ...state,
                settings:{
                    ...state.settings,
                    error:action.payload
                }
            } 
            
        case UPDATE_SETTINGS:
            return {
                ...state,
                updateSettings:{
                    ...state.updateSettings,
                    data:action.payload
                }
            }

        case UPDATE_SETTINGS_STATUS:
            return {
                ...state,
                updateSettings:{
                    ...state.updateSettings,
                    status:action.payload
                }
            }

        case UPDATE_SETTINGS_ERROR:
            return {
                ...state,
                updateSettings:{
                    ...state.updateSettings,
                    error:action.payload
                }
            }


            
        default:
            return {...state}
    }
}
// hh
export default reducer;