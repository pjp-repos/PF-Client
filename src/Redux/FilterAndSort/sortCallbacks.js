// GENERIC CALLBACK
const genericAsc = (a,b,cb,number=false) =>{

    let elementA = cb(a);
    let elementB = cb(b);

    if(!number){
        elementA = `${elementA}`.toUpperCase(); // ignore upper and lowercase
        elementB = `${elementB}`.toUpperCase(); // ignore upper and lowercase
    }else{
        elementA = parseFloat(elementA);
        elementB = parseFloat(elementB);
    }
    
    if (elementA < elementB) return -1;   
    if (elementA > elementB) return 1;
    return 0; // names must be equal
}

const genericDesc = (a,b,cb,number=false) =>{

    let elementA = cb(a);
    let elementB = cb(b);

    if(!number){
        elementA = `${elementA}`.toUpperCase(); // ignore upper and lowercase
        elementB = `${elementB}`.toUpperCase(); // ignore upper and lowercase
    }else{
        elementA = parseFloat(elementA);
        elementB = parseFloat(elementB);
    }
    
    
    if (elementA < elementB) return 1;   
    if (elementA > elementB) return -1;
    return 0; // names must be equal
}


const sortCallbacks={
    prices:{
        marketAsc:(a,b)=>genericAsc(a,b,(el)=>el.market_cap,true),
        marketDesc:(a,b)=>genericDesc(a,b,(el)=>el.market_cap,true),
        symbolAsc:(a,b)=>genericAsc(a,b,(el)=>el.symbol),
        symbolDesc:(a,b)=>genericDesc(a,b,(el)=>el.symbol),
        priceAsc:(a,b)=>genericAsc(a,b,(el)=>el.price,true),
        pricelDesc:(a,b)=>genericDesc(a,b,(el)=>el.price,true),
    },
    subscriptions:{
        bySymbol:"",
    },
    transactions:{
        symbolAsc:(a,b)=>genericAsc(a,b,(el)=>el.symbol),
        symbolDesc:(a,b)=>genericDesc(a,b,(el)=>el.symbol),
    },
    portfolio:{
        symbolAsc:(a,b)=>genericAsc(a,b,(el)=>el.symbol),
        symbolDesc:(a,b)=>genericDesc(a,b,(el)=>el.symbol),
        balanceAsc:(a,b)=>genericAsc(a,b,(el)=>el.balance),
        balanceDesc:(a,b)=>genericDesc(a,b,(el)=>el.balance),
        inBtcAsc:(a,b)=>genericAsc(a,b,(el)=>el.inBtc),
        inBtcDesc:(a,b)=>genericDesc(a,b,(el)=>el.inBtc),
    }
};
export default sortCallbacks;