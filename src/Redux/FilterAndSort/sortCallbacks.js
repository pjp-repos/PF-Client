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
        priceDesc:(a,b)=>genericDesc(a,b,(el)=>el.price,true),
    },

    orders:{
        symbol1Asc:(a,b)=>genericAsc(a,b,(el)=>el.symbol1.symbol),
        symbol1Desc:(a,b)=>genericDesc(a,b,(el)=>el.symbol1.symbol),
        symbol2Asc:(a,b)=>genericAsc(a,b,(el)=>el.symbol2.symbol),
        symbol2Desc:(a,b)=>genericDesc(a,b,(el)=>el.symbol2.symbol),   
        dateAsc:(a,b)=>genericAsc(a,b,(el)=>el.date),
        dateDesc:(a,b)=>genericDesc(a,b,(el)=>el.date),
        typeAsc:(a,b)=>genericAsc(a,b,(el)=>el.buyOrder),
        typeDesc:(a,b)=>genericDesc(a,b,(el)=>el.buyOrder),
    },

    subscriptions:{
        symbol1Asc:(a,b)=>genericAsc(a,b,(el)=>el.symbol1[0]),
        symbol1Desc:(a,b)=>genericDesc(a,b,(el)=>el.symbol1[0]),
        symbol2Asc:(a,b)=>genericAsc(a,b,(el)=>el.symbol2[0]),
        symbol2Desc:(a,b)=>genericDesc(a,b,(el)=>el.symbol2[0]),   
        alertOnRiseAsc:(a,b)=>genericAsc(a,b,(el)=>el.alertOnRise),
        alertOnRiseDesc:(a,b)=>genericDesc(a,b,(el)=>el.alertOnRise),
        alertOnFallAsc:(a,b)=>genericAsc(a,b,(el)=>el.alertOnFall),
        alertOnFallDesc:(a,b)=>genericDesc(a,b,(el)=>el.alertOnFall),
        idAsc:(a,b)=>genericAsc(a,b,(el)=>el.id),
        idDesc:(a,b)=>genericDesc(a,b,(el)=>el.id),
    },

    transactions:{
        symbolAsc:(a,b)=>genericAsc(a,b,(el)=>el.symbol),
        symbolDesc:(a,b)=>genericDesc(a,b,(el)=>el.symbol),
        dateAsc:(a,b)=>genericAsc(a,b,(el)=>el.date),
        dateDesc:(a,b)=>genericDesc(a,b,(el)=>el.date),
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