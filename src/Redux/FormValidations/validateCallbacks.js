import { helpRegexValidate } from "../../helpers/helpRegexValidate";

// ==== TRANSACTION FORM FIELDS =================================================
const subscriptionSymbolId = (param) =>{
    if(!param) return "Missing field. Symbol has to be selected!"
    return "";
};

const subscriptionAlertPrice = (param) =>{
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


// Validate callbacks return a string containing error description. If no errors, it returns empty string
const validateCallbacks={
    subscriptions:{
        symbol1Id:subscriptionSymbolId,
        symbol2Id:subscriptionSymbolId,
        risePrice:subscriptionAlertPrice,
        fallPrice:subscriptionAlertPrice,
    },
};

export default validateCallbacks;