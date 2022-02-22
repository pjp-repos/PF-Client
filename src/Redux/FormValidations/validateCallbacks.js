import { helpRegexValidate } from "../../helpers/helpRegexValidate";

// ==== SUBSCRIPTIONS FORM FIELDS =================================================
const subscriptionSymbolId = (param,form) =>{
    if(!param) return "Missing field. Symbol has to be selected!"
    return "";
};

const subscriptionAlertPrice = (param,form) =>{
    let strParam = `${param}`.trim();
    if(strParam===""){
        return "Alert price is required. 0 for no alert.";
    }else if(!helpRegexValidate('Float',strParam)){
        return "Invalid number.";
    }else if(parseFloat(strParam)<0.0){
        return "Alert price must be 0 or higer than 0.";
    }else{
        return "";
    }
};

// ==== ORDERS FORM FIELDS =================================================
const orderSymbolId = (param,form) =>{
    if(!param) return "Missing field. Symbol has to be selected!"
    return "";
};

const orderAmount = (param,form) =>{
    let strParam = `${param}`.trim();
    if(strParam===""){
        return "Amount is required";
    }else if(!helpRegexValidate('Float',strParam)){
        return "Invalid number.";
    }else if(parseFloat(strParam)<=0.0){
        return "Amount price must be higer than 0.";
    }else{
        return "";
    }
};

const orderLimit = (param,form) =>{
    let strParam = `${param}`.trim();
    if(strParam==="" && !form.marketOrder){
        return "Limit is required in Limit orders";
    }else if(!helpRegexValidate('Float',strParam)){
        return "Invalid number.";
    }else if(!form.marketOrder && parseFloat(strParam)<=0.0){
        return "Limit price must be higer than 0.";
    }else{
        return "";
    }
};

const orderBools = (param,form) =>{
    return "";
};

// Validate callbacks return a string containing error description. If no errors, it returns empty string
const validateCallbacks={
    subscriptions:{
        symbol1Id:subscriptionSymbolId,
        symbol2Id:subscriptionSymbolId,
        risePrice:subscriptionAlertPrice,
        fallPrice:subscriptionAlertPrice,
    },
    orders:{
        symbol1Id:orderSymbolId,
        symbol2Id:orderSymbolId,
        buyOrder:orderBools,
        amount:orderAmount,
        marketOrder:orderBools,
        priceLimit:orderLimit,
    },
};

export default validateCallbacks;