// ==== PRICES CALLBACKS =======================
const pricesCbSymbolAsc = (a,b) =>{
    let elementA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let elementB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const pricesCbSymbolDesc = (a,b) =>{
    let elementA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let elementB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}

const pricesCbMarketAsc = (a,b) =>{
    let elementA = a.market_cap;
    let elementB = b.market_cap;
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const pricesCbMarketDesc = (a,b) =>{
    let elementA = a.market_cap;
    let elementB = b.market_cap;
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}

const pricesCbPriceAsc = (a,b) =>{
    let elementA = a.price;
    let elementB = b.price;
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const pricesCbPriceDesc = (a,b) =>{
    let elementA = a.price;
    let elementB = b.price;
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}

// ==== TRANSACTIONS CALLBACKS =========================

const transactionsCbSymbolAsc = (a,b) =>{
    let elementA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let elementB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const transactionsCbSymbolDesc = (a,b) =>{
    let elementA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let elementB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}


const sortCallbacks={
    prices:{
        marketDesc:pricesCbMarketDesc,
        marketAsc:pricesCbMarketAsc,
        symbolAsc:pricesCbSymbolAsc,
        symbolDesc:pricesCbSymbolDesc,
        priceAsc:pricesCbPriceAsc,
        priceDesc:pricesCbPriceDesc,
    },
    subscriptions:{
        bySymbol:"",
    },
    transactions:{
        symbolAsc:transactionsCbSymbolAsc,
        symbolDesc:transactionsCbSymbolDesc,
    }
};
export default sortCallbacks;