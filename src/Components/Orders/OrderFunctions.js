export const  setSymbol2 = (setSymbolsState,symbols,e,symbolsState) => {

    setSymbolsState({
        ...symbolsState,
        symbol2:e.target.value,
        symbol2Img: symbols.find(el => el.symbol === e.target.value).image 

    })  
}

export const setSymbol1 = (setSymbolsState,portfolio,e,symbolsState) =>{
    
    const symbolPortfolio =  portfolio.find(el => el.symbol === e.target.value);
    setSymbolsState({
        ...symbolsState,
        symbol1:e.target.value,
        symbol1Img: symbolPortfolio.image ,
        symbol1price:symbolPortfolio.balance
    }) 
}

export const validatePair = (symbolsState,e) => {
    if(e.target.id === "symbol1" && symbolsState.symbol2 !== "Crypto")
      return true
    else if (symbolsState.symbol1 !== "Crypto" && e.target.id === "symbol2")
      return true
    return false;
}

export const validateSubmit = (stateOrder,symbolsState) => {
    if(symbolsState.symbol1 === "Crypto" || symbolsState.symbol2 === "Crypto")
      return "You need choice two cryptos for the order";
    if(Math.sign(parseInt(stateOrder.amount)) === -1 || Math.sign(parseInt(stateOrder.amount)) === 0)
      return "Amount cant be negative or zero"
    if(stateOrder.type === "Limit" && (Math.sign(parseInt(stateOrder.limit)) === -1 || Math.sign(parseInt(stateOrder.limit)) === 0))
      return "Limit cant be negative number or zero "
      return "";
}