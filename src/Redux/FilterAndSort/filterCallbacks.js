const includeTxtSensitive = (el,param, cb) =>{
    let field = cb(el);
    return field.toLowerCase().includes(param.toLowerCase()) || param==="";
};

const dateFrom = (el,param, cb) =>{
    let field = cb(el);
    return field >= param || param==="";
};

const dateTo = (el,param, cb) =>{
    let field = cb(el);
    return field <= param || param==="";
};


const filterCallbacks={
    prices:{
        symbol:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol),
    },
    transactions:{
        symbol:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol),
        dateFrom:(el,param)=>dateFrom(el,param,el=>el.date),
        dateTo:(el,param)=>dateTo(el,param,el=>el.date),
    },
    orders:{
        symbol1:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol1.symbol),
        symbol2:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol2.symbol),
        dateFrom:(el,param)=>dateFrom(el,param,el=>el.date),
        dateTo:(el,param)=>dateTo(el,param,el=>el.date),
    },
 
};

export default filterCallbacks;