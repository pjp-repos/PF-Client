const includeTxtSensitive = (el,param, cb) =>{
    let field = cb(el);
    return field.toLowerCase().includes(param.toLowerCase()) || param==="";
};

const dateFrom = (el,param, cb) =>{
    let field = cb(el).split('/').join('');
    let dateParam = param.split('-').join('');
    let result = field >= dateParam
    return result || param==="";
};

const dateTo = (el,param, cb) =>{
    let field = cb(el).split('/').join('');
    let dateParam = param.split('-').join('');
    let result = field <= dateParam
    return result || param==="";
};

const booleanCkeck = (el,param, cb) =>{
    let field = cb(el);
    let paramBool = param === true || param === 'true'? true : false;
    return field === paramBool || param==="";
};


const filterCallbacks={

    prices:{
        symbol:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol),
    },

    subscriptions:{
        symbol1:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol1[0]),
        symbol2:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol2[0]),
        alertOnRise:(el,param)=>booleanCkeck(el,param,el=>el.alertOnRise),
        alertOnFall:(el,param)=>booleanCkeck(el,param,el=>el.alertOnFall),
    },

    orders:{
        symbol1:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol1.symbol),
        symbol2:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol2.symbol),
        dateFrom:(el,param)=>dateFrom(el,param,el=>el.date),
        dateTo:(el,param)=>dateTo(el,param,el=>el.date),
    },
    
    transactions:{
        symbol:(el,param)=>includeTxtSensitive(el,param,el=>el.symbol),
        dateFrom:(el,param)=>dateFrom(el,param,el=>el.date),
        dateTo:(el,param)=>dateTo(el,param,el=>el.date),
    },
 
};

export default filterCallbacks;