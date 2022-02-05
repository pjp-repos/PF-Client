import { 
    GET_PRICES,
    GET_PRICES_STATUS,
    GET_PRICES_ERROR,
    SET_PRICES_FILTER,
    SET_PRICES_ORDER,
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
    ADD_SUBSCRIPTION,
    ADD_SUBSCRIPTION_STATUS,
    ADD_SUBSCRIPTION_ERROR,
    GET_SUBSCRIPTION,
    GET_SUBSCRIPTION_STATUS,
    GET_SUBSCRIPTION_ERROR,
    UPDATE_SUBSCRIPTION,
    UPDATE_SUBSCRIPTION_STATUS,
    UPDATE_SUBSCRIPTION_ERROR,
    DELETE_SUBSCRIPTION,
    DELETE_SUBSCRIPTION_STATUS,
    DELETE_SUBSCRIPTION_ERROR


} from "../types";

const sortCbPricesAsc = (a,b) =>{
    let nameA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let nameB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) return -1;   
    if (nameA > nameB) return 1;
    return 0; // names must be equal
}

const sortCbPricesDesc = (a,b) =>{
    let nameA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let nameB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) return 1;   
    if (nameA > nameB) return -1;
    return 0; // names must be equal
}

const initialState = {
    session:{
        userName:"",
        isAutenticated: false,
        roles:[]
    },
    prices:{
        data:[],
        status:0,
        error:{name:"",message:""},
        filter:"",
        order:false,
    },
    newAccount:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
    signIn:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
    signOut:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
    subscriptions:{
        data:[],
        status:0,
        error:{name:"",message:""},
        filter:"",
        order:false,
    },
    subscription:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
    addSubscription:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
    updateSubscription:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
    deleteSubscription:{
        data:{},
        status:0,
        error:{name:"",message:""},
    },
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRICES:
            let prices = [...action.payload];
            if(state.prices.filter!==""){
                prices = prices.filter(el=>el.symbol.includes(state.prices.filter));
            };
            if(state.prices.order){
                prices.sort(sortCbPricesDesc);
            }else{
                prices.sort(sortCbPricesAsc);
            }
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
        case GET_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions:{
                    ...state.subscriptions,
                    data:action.payload
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

        case GET_SUBSCRIPTION:
            return {
                ...state,
                subscription:{
                    ...state.subscription,
                    data:action.payload
                }
            }

        case GET_SUBSCRIPTION_STATUS:
            return {
                ...state,
                subscription:{
                    ...state.subscription,
                    status:action.payload
                }
            }
    
        case GET_SUBSCRIPTION_ERROR:
            return {
                ...state,
                subscription:{
                    ...state.subscription,
                    error:action.payload
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

        default:
            return {...state}
    }
}

export default reducer;