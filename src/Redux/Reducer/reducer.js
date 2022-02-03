import { 
    SET_PRICES,
    SET_PRICES_STATUS,
    SET_PRICES_ERROR,
    SET_PRICES_FILTER,
    SET_PRICES_ORDER

} from "../types";

const sortCbPricesAsc = (a,b) =>{
    let nameA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let nameB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) {
        return -1;
    }
    
    if (nameA > nameB) {
        return 1;
    }    
    
    return 0; // names must be equal
}

const sortCbPricesDesc = (a,b) =>{
    let nameA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let nameB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) {
        return 1;
    }
    
    if (nameA > nameB) {
        return -1;
    }    
    
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
        error:{error:"00",description=""},
        filter:"",
        order:false,
    },

};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PRICES:
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

        case SET_PRICES_STATUS:
            return {
                ...state,
                prices:{
                    ...state.prices,
                    status:action.payload
                }
            }

        case SET_PRICES_ERROR:
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
  
        default:
            return {...state}
    }
}

export default reducer;