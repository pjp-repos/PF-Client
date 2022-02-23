export const helpFetch = async (url, dataCb, statusCb,  errorCb, options={},finallyCbs=[])=>{
    statusCb(1);

    // --- Options ------------------------------.-
    
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

        console.log('Response:---------------------');
        console.log(res);
        console.log('Body content:-----------------');        
        console.log(json);

        if(!res.ok){
            dataCb([]);
            errorCb(json)
            statusCb(3);
        }else{
            dataCb(json);
            errorCb({})
            statusCb(2);
        }

    } catch (err) {
        errorCb({errCode:9999, errType:err.name, errMessage:err.message})
            statusCb(3);
    } finally{
        finallyCbs.forEach(cb=>cb());
    }
}
