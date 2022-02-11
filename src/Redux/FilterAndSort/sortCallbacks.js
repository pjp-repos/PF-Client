
const sortCbSymbolAsc = (a,b) =>{
    let elementA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let elementB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const sortCbSymbolDesc = (a,b) =>{
    let elementA = a.symbol.toUpperCase(); // ignore upper and lowercase
    let elementB = b.symbol.toUpperCase(); // ignore upper and lowercase
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}

const sortCbMarketAsc = (a,b) =>{
    let elementA = a.market_cap;
    let elementB = b.market_cap;
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const sortCbMarketDesc = (a,b) =>{
    let elementA = a.market_cap;
    let elementB = b.market_cap;
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}

const sortCbPriceAsc = (a,b) =>{
    let elementA = a.price;
    let elementB = b.price;
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const sortCbPriceDesc = (a,b) =>{
    let elementA = a.price;
    let elementB = b.price;
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; 
}

const sortCallbacks={
    marketDesc:sortCbMarketDesc,
    marketAsc:sortCbMarketAsc,
    symbolAsc:sortCbSymbolAsc,
    symbolDesc:sortCbSymbolDesc,
    priceAsc:sortCbPriceAsc,
    priceDesc:sortCbPriceDesc,
    subscriptions:{
        bySymbol:"",
    }
};
export default sortCallbacks;