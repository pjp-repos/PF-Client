export const helpFetch = async (url, dataCb, statusCb,  errorCb, options={})=>{
    statusCb(1);

    // --- Options -----------------------------
    
    // - Abort controller
    // const abortController = new AbortController();
    // const signal = abortController.signal;
    // options.signal = signal;
    // setTimeout(() => abortController.abort(), 10000);

    // - Method
    options.method = options.method || "GET";

    // - Headers
    const defaultHeader = {
        accept: "application/json",
    };
    options.headers = options.headers
    ? { ...defaultHeader, ...options.headers }
    : defaultHeader;

    // - Body
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    try {
        const res = await fetch(url, options);
        if(!res.ok){
            let err = new Error("Error en la petición fetch")
            err.error = res.status || "00";
            err.description = res.statusText || "Ocurrió un error";
            throw err;
        }

        const json = await res.json();
        
        dataCb(json);
        statusCb(2);
        errorCb({error:"00",description:""})


    } catch (err) {
        statusCb(3);
        errorCb({status:err.code,statusText:err.message})
    } 
}
