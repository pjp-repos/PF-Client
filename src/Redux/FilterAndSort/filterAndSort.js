import filterCallbacks from "./filterCallbacks";
import sortCallbacks from "./sortCallbacks";

const filterAndSort = (name,array,filterForm,orderKey) =>{
    let newArray = [...array];
    const callbacks = filterCallbacks[name]
    const keys = Object.keys(filterForm);
    keys.forEach(key=>{
        let cb = callbacks[key];
        let param = filterForm[key];
        if(param!=="") newArray = newArray.filter((el)=>cb(el,param))
    })
    if (orderKey!=="") newArray.sort(sortCallbacks[name][orderKey]);
    return newArray;
}

export default filterAndSort;