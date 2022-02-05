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
        const json = await res.json();
        console.log(json);
        
        if(!res.ok){
            let err = new Error("Error en la petición fetch")
            if(res.status === 490){
                err.name = json.name
                err.message = json.message
            }else{
                err.name = res.status || "00";
                err.message = res.statusText || "Ocurrió un error";
            }
            throw err;
        }

        dataCb(json);
        statusCb(2);
        errorCb({name:"",message:""})


    } catch (err) {
        statusCb(3);
        errorCb({name:err.name, message:err.message})
    } 
}
