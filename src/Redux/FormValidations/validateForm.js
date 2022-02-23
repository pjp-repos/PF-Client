import validateCallbacks from "./validateCallbacks";


export const validateForm = (name, form)=>{
    let errors={};
    let error=false;
    const callbacks = validateCallbacks[name]
    const keys = Object.keys(callbacks);
    keys.forEach(key=>{
        let cb = callbacks[key];
        let param = form[key];
        errors[key]=cb(param,form);
        if(errors[key]!=="") error=true;
    })
    return [error,errors];
};

export const validateField = (name, form, field)=>{
    let errors={};
    let error=false;

    const cb = validateCallbacks[name][field]
    const param = form[field];

    errors[field]=cb(param);
    if(errors[field]!=="") error=true;

    return [error,errors];
};
