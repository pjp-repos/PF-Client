import React ,{useState,useEffect} from "react";
import { useNavigate ,useParams} from "react-router-dom";
import { OrderContainer,ContainerOptionsOrders,
    DivImages,Image,DivTrade,SubmitOrder,SubmitDiv,DivSellBuy,
    InputSellBuy,SelectSellBuy,Info,DivInfo,DivTotal,ButtonOption,OrderGraphics,DivInfoOrder, TitleGraphic} from "./OrderElements";
import {
    selectSymbolsAll,
    selectSessionAll,
    selectPortfolioAll,
    selectPairAll,
    selectOrderAll,
    selectAddOrderAll,
    selectUpdateOrderAll,

 } from "../../Redux/Selectors/selectors";
import { useSelector,useDispatch} from "react-redux";
import {
    getSymbols, getPortfolio,getPair,addOrder,getOrder,resetUpdateOrderStatus,updateOrder,resetAddOrderStatus
} from '../../Redux/Actions/actionCreators';
import nomoney from "../../Assets/Images/nomoney.png"
import {setSymbol1,setSymbol2,validatePair,validateSubmit} from "./OrderFunctions"
import Graphics from "../Graphics/Graphics";
import Spinner from '../AaaGenerics/Loaders/Spinner/Spinner'
import Swal from 'sweetalert2'

const stateOrderInitial = {
    type:"Market",
    typeOrder:"Sell", 
    amount:0,
    limit:0
}
const stateSymbolsInitial = {
    symbol1:"Crypto",
    symbol1Id:"",
    symbol1Img:`${nomoney}`,
    symbol1price:0,
    symbol2:"Crypto",
    symbol2Id:"",
    symbol2Img:`${nomoney}`
}

export default function Order(){
	// Params    
    const {id} = useParams();
	// router
    const navigate = useNavigate();
	// States
    const [errorSubmit, setErrorSubmit] = useState("");
    const [stateOrder,setStateOrder] = useState(stateOrderInitial);
    const [symbolsState, setSymbolsState] = useState(stateSymbolsInitial);
    
	//Redux
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
	const [symbols,symbolsStatus,symbolsErrors] = useSelector(selectSymbolsAll);
    const [portfolio,portfolioStatus,portfolioErrors] = useSelector(selectPortfolioAll);
    const pairValid = useSelector(selectPairAll);
    const order = useSelector(selectOrderAll);
    const [dataAdd, statusAdd, errorAdd] = useSelector(selectAddOrderAll);
    const [dataUpdate, statusUpdate, errorUpdate] = useSelector(selectUpdateOrderAll);
    
    let update = false;
    if(id) update = true;
    let loadData = order[1] === 2 && portfolioStatus === 2 && id ? true : false;

    useEffect( () => { 
		if(!isAuthenticated)
			navigate("/signin")
		else{
			getPortfolio(dispatch,token);
			getSymbols(dispatch,token);
			if(update){
			getOrder(dispatch,token,id);
			}
		}
    }, [isAuthenticated]);

	useEffect(() => {
		if(loadData){
			setStateOrder({
				type:"Limit",
				amount:order[0].amount, 
				limit:order[0].priceLimit,
				typeOrder:order[0].buyOrder === true ? "Buy" :"Sell"
				});
				setSymbolsState({
				symbol1:order[0].buyOrder === true ? order[0].symbol2.symbol :order[0].symbol1.symbol,
				symbol1Id:order[0].buyOrder === true ? order[0].idSymbol2 : order[0].idSymbol1,
				symbol1Img:order[0].buyOrder === true ? order[0].symbol2.image : order[0].symbol1.image,
				symbol1price:order[0].buyOrder === true ? portfolio.find(el => el.symbol === order[0].symbol2.symbol).balance : portfolio.find(el => el.symbol === order[0].symbol1.symbol).balance,
				symbol2:order[0].buyOrder === true ? order[0].symbol1.symbol :order[0].symbol2.symbol,
				symbol2Id:order[0].buyOrder === true ? order[0].idSymbol1 : order[0].idSymbol2,
				symbol2Img: order[0].buyOrder === true ? order[0].symbol1.image : order[0].symbol2.image 
			})
		}
    },[loadData])
    
    useEffect(() => {
		if(validatePair(symbolsState)){
			stateOrder.typeOrder === "Sell" ? getPair(dispatch,token,symbolsState.symbol1Id,symbolsState.symbol2Id) : getPair(dispatch,token,symbolsState.symbol2Id,symbolsState.symbol1Id);
		}
    },[symbolsState,stateOrder.typeOrder]);

    
    const handleSubmit =  () => {
        setErrorSubmit("");
        const validate = validateSubmit(stateOrder,symbolsState,pairValid[1]);
        if(validate !== "")
          setErrorSubmit(validate);
        else{
          const order = {
              buyOrder:stateOrder.typeOrder === "Sell" ? false :true,
              symbol1Id:stateOrder.typeOrder === "Sell" ? symbolsState.symbol1Id : symbolsState.symbol2Id,
              symbol2Id:stateOrder.typeOrder === "Sell" ? symbolsState.symbol2Id : symbolsState.symbol1Id,
              amount:parseFloat(stateOrder.amount),
              marketOrder:stateOrder.type === "Limit" ? false :true,
              priceLimit:parseFloat(stateOrder.limit)
          }
          if(update){
             updateOrder(dispatch,token,order,id);
          }else{
            addOrder(dispatch,token,order);
          }
          //navigate("../order")
        }
    }


    const handlerType = (name,value) => {
         setStateOrder({
             ...stateOrder,
             [name]:value
         })
    }

    const handlerSelect = (e) => {
     if(e.target.id === "symbol1")
       setSymbol1(setSymbolsState,portfolio,e,symbolsState);
     else
       setSymbol2(setSymbolsState,symbols,e,symbolsState)    
    }

    // === RENDERS ============================================

    // === Authenticated ===
    if(!isAuthenticated)return<p>Forbbiden</p>

    // === Loadings ===
    if(
        statusAdd===1 
        || statusUpdate===1
    ) return <Spinner/> 

    //Success
    if(
        (
            !update && statusAdd===2 
            || (
              update && statusUpdate===2 
            )
        )        
    ){
        Swal.fire({
            icon:'success',
            title: 'Order done successfully',
            background: '#14151a',
            color:'white',
            timer:2000,
            showConfirmButton:false,
        })
        // return<p>Success!</p>
        navigate("/order");
        //
    };

    // === Errors ===
    
    // Add new subscription
    if(!update && statusAdd===3){
        //return(
            //<>
                //<p>
                    //{`Oops. An error ocurred. 
                        //Type: ${errorAdd.errorType} 
                        //Code: ${errorAdd.errorCode} 
                        //Message: ${errorAdd.errorMessage} 
                    //`}
                //</p>
                //<button onClick={()=>resetAddOrderStatus(dispatch)}>Ok</button>
            //</>)
        Swal.fire({
            background: '#14151a',
            icon: 'error',
            color: 'white',
            title: `Opps. An error ocurred.`,
            html: `<p>Type: ${errorAdd.errorType}.</p> 
                   <p>Code: ${errorAdd.errorCode}.</p> 
                   <p>Message: ${errorAdd.errorMessage}.</p>`,
        }).then(result => {
            if(result.isConfirmed){
            resetAddOrderStatus(dispatch)
            }        
        })
    } 

    // Update subscription
    if(update && statusUpdate===3){
        //return(
        //<>
            //<p>
                //{`Oops. An error ocurred. 
                    //Type: ${errorUpdate.errorType} 
                    //Code: ${errorUpdate.errorCode} 
                    //Message: ${errorUpdate.errorMessage} 
                //`}
            //</p>
            //<button onClick={()=>resetUpdateOrderStatus(dispatch)}>Ok</button>
        //</>)
        Swal.fire({
            background: '#14151a',
            icon: 'error',
            color: 'white',
            title: `Opps. An error ocurred.`,
            html: `<p>Type: ${errorUpdate.errorType}.</p> 
                   <p>Code: ${errorUpdate.errorCode}.</p> 
                   <p>Message: ${errorUpdate.errorMessage}.</p>`,
        }).then(result => {
            if(result.isConfirmed){
            resetUpdateOrderStatus(dispatch)
            }        
        })

    } 

  return (
      
      <div>
        <OrderGraphics>
         <DivInfoOrder>
            <TitleGraphic>{stateOrder.typeOrder === "Sell" ? symbolsState.symbol1 + "-" + symbolsState.symbol2 : symbolsState.symbol2 + "-" + symbolsState.symbol1 }</TitleGraphic>
           { <Graphics data = {pairValid[1] === 2 && symbolsState.symbol1 !== "Crypto" && symbolsState.symbol2 !== "Crypto" ? pairValid[0].array : []} /> }
         </DivInfoOrder>
        <OrderContainer>
            <ContainerOptionsOrders>
              <ButtonOption name = "type" onClick = {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.type} id ="Market">Market</ButtonOption>
              <ButtonOption name = "type" onClick =  {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.type} id = "Limit">Limit</ButtonOption>
            </ContainerOptionsOrders>  
            <ContainerOptionsOrders>
              <ButtonOption border name = "typeOrder" onClick ={(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.typeOrder} id ="Sell">Sell</ButtonOption>
              <ButtonOption border name = "typeOrder" onClick = {(e) => handlerType(e.target.name,e.target.id)} actual = {stateOrder.typeOrder} id = "Buy">Buy</ButtonOption>
            </ContainerOptionsOrders>    
            <DivImages typeOrder = {stateOrder.typeOrder}>
               <Image src = {symbolsState.symbol1Img} alt ="orders"/>
               <Image src = {symbolsState.symbol2Img} alt = "orders"/>
            </DivImages>
            <DivTrade typeOrder = {stateOrder.typeOrder}>
                <DivSellBuy>
                   <SelectSellBuy  id = "symbol1" value = {symbolsState.symbol1} onChange={handlerSelect}>
                       <option id = "symbol1" disabled>Crypto</option>
                       {
                          portfolio.map(option => <option key = {option.symbol} id = "symbol1" value = {option.symbol}>{option.symbol}</option>)
                       }
                   </SelectSellBuy>
                </DivSellBuy>
                {
                  stateOrder.typeOrder === "Sell" ? <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/></svg>
                }
                <DivSellBuy>
                  <SelectSellBuy id = "symbol2"  value = {symbolsState.symbol2} onChange={handlerSelect} >
                      <option id = "symbol2" disabled>Crypto</option>
                      {
                        symbols.length > 0 &&  symbols.map(option => <option key = {option.symbol} id = "symbol2" value = {option.symbol}>{option.symbol}</option>)
                      }       
                   </SelectSellBuy>
                </DivSellBuy>
            </DivTrade>
            <DivInfo>
               {
                  symbolsState.symbol2 !== "Crypto" &&  symbolsState.symbol1 !== "Crypto" && pairValid[1] === 3 && <Info> Error Pair Invalid</Info>
               }
               {
                 symbolsState.symbol2 !== "Crypto" &&  symbolsState.symbol1 !== "Crypto" &&  pairValid[1] === 2 && (stateOrder.typeOrder === "Sell" ?
                 <Info> 1 {symbolsState.symbol1} equals: {(pairValid[0].price).toFixed(8)} {symbolsState.symbol2}</Info>
                 :  <Info> 1 {symbolsState.symbol2} equals: {(pairValid[0].price).toFixed(8)} {symbolsState.symbol1}</Info>)
               }
               
            </DivInfo>
            <SubmitDiv type = {stateOrder.type}>
                <DivTotal>
                   <Info>Avaliable</Info>
                   <Info>{symbolsState.symbol1price % 1 !== 0 ?`${symbolsState.symbol1price.toFixed(8)}  ${symbolsState.symbol1}`:`${symbolsState.symbol1price}  ${symbolsState.symbol1}`} </Info>
                </DivTotal>
                <InputSellBuy id = "amount"  type = "number" onChange = {(e) => handlerType(e.target.id,e.target.value)} placeholder={update === true ? stateOrder.amount.toString() : "Amount"}/>
                { stateOrder.type === "Limit" && <InputSellBuy  type = "number" onChange={(e) => handlerType(e.target.id,e.target.value)} id = "limit" placeholder={update === true ? stateOrder.limit.toString(): "Limit"}/> }
                <DivTotal>
                   <Info>Total:</Info>
                   {pairValid[1] === 2 ? <Info>{(pairValid[0].price*parseFloat(stateOrder.amount)).toFixed(8)} {stateOrder.typeOrder === "Sell" ? symbolsState.symbol2 : symbolsState.symbol1}</Info> :<Info>0 Cryptos</Info>}
                </DivTotal>    
                <Info error >{errorSubmit}</Info>
                <SubmitOrder onClick = {handleSubmit}>Place {stateOrder.type}</SubmitOrder>
            </SubmitDiv>
        </OrderContainer>

        </OrderGraphics>
      </div>
    )
}
