export const  setSymbol2 = (setSymbolsState,symbols,e,symbolsState) => {
    const symbolTarget = symbols.find(el => el.symbol === e.target.value);
    setSymbolsState({
        ...symbolsState,
        symbol2Id:symbolTarget.id,
        symbol2:e.target.value,
        symbol2Img:symbolTarget.image 

    })  
}

export const setSymbol1 = (setSymbolsState,portfolio,e,symbolsState) =>{
    
    const symbolPortfolio =  portfolio.find(el => el.symbol === e.target.value);
    setSymbolsState({
        ...symbolsState,
        symbol1Id:symbolPortfolio.idSymbol,
        symbol1:e.target.value,
        symbol1Img: symbolPortfolio.image ,
        symbol1price:symbolPortfolio.balance
    }) 
}

export const validatePair = (symbolsState) => {
    if( symbolsState.symbol1 !== "Crypto" && symbolsState.symbol2 !== "Crypto")
      return true
    return false;
}

export const validateSubmit = (stateOrder,symbolsState,statusPair) => {
    if(symbolsState.symbol1 === "Crypto" || symbolsState.symbol2 === "Crypto")
      return "You need choice two cryptos for the order";
    if(statusPair === 3)
      return "The pair is invalid"
    if(Math.sign(parseFloat(stateOrder.amount)) === -1 || Math.sign(parseFloat(stateOrder.amount)) === 0)
      return "Amount cant be negative,zero or empty"
    if(stateOrder.type === "Limit" && (Math.sign(parseFloat(stateOrder.limit)) === -1 || Math.sign(parseFloat(stateOrder.limit)) === 0))
      return "Limit cant be negative number,zero or empty "
    if(parseFloat(stateOrder.amount) > symbolsState.symbol1price)
      return "Amount invalid";
      return "";
}