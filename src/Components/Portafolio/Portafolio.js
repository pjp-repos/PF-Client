
import React from "react";
import { TableP,RowP,Coin,Container,ButtonOrder} from "./PortafolioElements";
import { Column } from "../Home/Table/Column";
import {useState,useEffect} from 'react';
import {useDispatch,useSelector}from 'react-redux';
import { getPortfolio,
  filterPortfolio,
  sortPortfolio,
  }from "../../../src/Redux/Actions/actionCreators";
import {

  selectPortfolioAll,
  selectSessionAll
} from  "../../Redux/Selectors/selectors";
import SectionRelative from '../../Components/AaaGenerics/Sections/SectionRelative';

import Spinner from '../../Components/AaaGenerics/Loaders/Spinner/Spinner'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import style from "../Portafolio/Portafolio.module.css";

export default function Portafolio(){

    const dispatch=useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const [data, status, errors ] = useSelector(selectPortfolioAll);
    const [deleteData, deleteStatus, deleteError ] = useSelector(selectPortfolioAll);
    const [toOrderSymbol,setToOrderSymbol] = useState(true);
    const [toOrderAmount, setOrderAmount] = useState(true);
    const [toOrderPriceBtc,setOrderPriceBtc] = useState(true);
    const [toOrderPriceU,setOrderPriceU] = useState(true);
    
    useEffect(()=>{
      isAuthenticated && getPortfolio(dispatch, token);
  }, [isAuthenticated])
  if(!isAuthenticated)return(<p>Forbbiden</p>)
  // Loadings
  if(
      status===1 ||
      deleteStatus===1

  ) return (
      <SectionRelative>
          <Container>
              <Spinner/>
          </Container>
      </SectionRelative>        
  );

  // Errors
  if(deleteStatus===3){
      return(<p>{
              `Oops. Something was wrong. 
              ErrorCode:${deleteError.errorCode} 
              ErrorType:${deleteError.errorType} 
              ErrorMessage:${deleteError.errorMessage}
              `
      }</p>)
  }
  if(status===3){
      return(<p>{
              `Oops. Something was wrong. 
              ErrorCode:${errors.errorCode} 
              ErrorType:${errors.errorType} 
              ErrorMessage:${errors.errorMessage}
              `
              }</p>)
    }
  function ShowSum(ticket,coinSelected){
    if(coinSelected===0){
      const sum = ticket.map((t) => t.inUsdt).reduce((a, b) => a + b,0);
      return sum

    }else if(coinSelected===1){
      const sum = ticket.map(t=>t.inBtc).reduce((a, b) => a + b,0);
      return sum
    }
  }
  function handleSymbol(t){
    t.preventDefault();
    toOrderSymbol?sortPortfolio(dispatch,'symbolAsc'):sortPortfolio(dispatch,'symbolDesc');
    setToOrderSymbol(!toOrderSymbol);
    getPortfolio(dispatch, token);
  }
  function handleAmount(t){
    t.preventDefault();
    setOrderAmount(!toOrderAmount);    
    toOrderAmount?sortPortfolio(dispatch,'balanceAsc'):sortPortfolio(dispatch,'balanceDesc');
    getPortfolio(dispatch, token);
  }
  function handlpriceBtc(t){
    t.preventDefault();
    setOrderPriceBtc(!toOrderPriceBtc);
    toOrderPriceBtc?sortPortfolio(dispatch,'inBtcAsc'):sortPortfolio(dispatch,'inBtcDesc');
    getPortfolio(dispatch, token);
  }
  function handlepriceUsdt(t){
    t.preventDefault();
    setOrderPriceU(!toOrderPriceU);
    toOrderPriceU?sortPortfolio(dispatch,'inBtcAsc'):sortPortfolio(dispatch,'inBtcDesc');
    getPortfolio(dispatch, token);
  }


    return (
    <Container>
        <div className={style.text}>
          <p><span>Balance(BTC):  {ShowSum(data,1).toFixed(4)} </span> </p> 
          <p><span>Balance(USDT):  {ShowSum(data,0).toFixed(4) } </span></p>
          <p><span>Performance: {(((ShowSum(data,0)-1000000)/1000000)*100).toFixed(4)}%</span></p>

        </div>
        <TableP>
            <RowP head>
                <Column>Icon</Column> 
                <Column>Symbol <ButtonOrder onClick = {handleSymbol} > {toOrderSymbol ? <FaAngleUp/>:<FaAngleDown/>} </ButtonOrder></Column> 
                <Column>Amount<ButtonOrder onClick = {handleAmount} > {toOrderAmount ? <FaAngleUp/>:<FaAngleDown/>} </ButtonOrder> </Column> 
               <Column>Value in BTC  <ButtonOrder onClick = {handlpriceBtc} > {toOrderPriceBtc ? <FaAngleUp/>:<FaAngleDown/>} </ButtonOrder> </Column> 
               <Column>Value in USDT <ButtonOrder onClick = {handlepriceUsdt} > {toOrderPriceU ? <FaAngleUp/>:<FaAngleDown/>} </ButtonOrder></Column> 
            </RowP>
           
            {

              data.length > 0  && data.map(crypto =>
              <RowP key={crypto.symbol}>
                <Column><Coin src ={crypto.image} alt="icon"/></Column>
                <Column>{crypto.symbol}</Column>
                <Column>{crypto.balance % 1 !== 0 ? crypto.balance.toFixed(5) : crypto.balance}</Column>
                <Column>{crypto.inBtc % 1 !== 0 ? crypto.inBtc.toFixed(5) : crypto.inBtc }</Column>
                <Column>{crypto.inUsdt % 1 !== 0 ? crypto.inUsdt.toFixed(5) : crypto.inUsdt }</Column>
              </RowP>) 
            }
            

        </TableP>
    </Container>
  )
}