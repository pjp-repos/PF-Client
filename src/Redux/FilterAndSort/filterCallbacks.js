// ==== PRICES
const pricesBySymbol = (el,param) =>{
    return el.symbol.toLowerCase().includes(param.toLowerCase()) || param==="";
};
// ==== TRANSACTIONS ==========================================================
const transactionBySymbol = (el,param) =>{
    return el.symbol.toLowerCase().includes(param.toLowerCase()) || param==="";
};

const transactionByDateFrom = (el,param) =>{
    return el.date >= param || param==="";
};

const transactionByDateTo = (el,param) =>{
    return el.date <= param || param==="";
};


const filterCallbacks={
    prices:{
        symbol:pricesBySymbol,
    },
    transactions:{
        symbol:transactionBySymbol,
        dateFrom:transactionByDateFrom,
        dateTo:transactionByDateTo,
    },
    portfolio:{

    }
};

export default filterCallbacks;