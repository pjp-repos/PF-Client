
import React from "react";
import { Row } from ".//Table/Row";
import { Container,TableC,Coin } from ".//Table/TableElements";
import { Column } from ".//Table/Column";
import {useState,useEffect} from 'react';
import {useDispatch,useSelector}from 'react-redux';
import { getPortfolio,
  filterPortfolio,
  sortPortfolio,
  }from "../../../src/Redux/Actions/actionCreators";
import {
  selectPortfolio ,
  selectPortfolioStatus ,
  selectPortfolioError ,
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
    const [data, subsStatus, subsError ] = useSelector(selectPortfolioAll);
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
      subsStatus===1 ||
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
  if(subsStatus===3){
      return(<p>{
              `Oops. Something was wrong. 
              ErrorCode:${subsError.errorCode} 
              ErrorType:${subsError.errorType} 
              ErrorMessage:${subsError.errorMessage}
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
          <p><span>Saldo(BTC):  {ShowSum(data,1)} btc</span> </p> 
          <p><span>Saldo(USD):  {ShowSum(data,0) } usdt</span></p>
          <p><span>Rendimiento: {(((ShowSum(data,0)-1000000)/1000000)*100).toFixed(5)}%</span></p>

        </div>
        <TableC>
            <Row head>
                <Column>Icon</Column> 
                <Column>Symbol <button onClick = {handleSymbol} > {toOrderSymbol ? <FaAngleUp/>:<FaAngleDown/>} </button></Column> 
                <Column>Amount<button onClick = {handleAmount} > {toOrderAmount ? <FaAngleUp/>:<FaAngleDown/>} </button> </Column> 
               <Column>Value in BTC  <button onClick = {handlpriceBtc} > {toOrderPriceBtc ? <FaAngleUp/>:<FaAngleDown/>} </button> </Column> 
               <Column>Value in USDT <button onClick = {handlepriceUsdt} > {toOrderPriceU ? <FaAngleUp/>:<FaAngleDown/>} </button></Column> 
            </Row>
           
            {

              data.length > 0  && data.map(crypto =>
              <Row key={crypto.symbol}>
                <Column><Coin src ={crypto.image} alt="icon"/></Column>
                <Column>{crypto.symbol}</Column>
                <Column>{crypto.balance}</Column>
                <Column>{crypto.inBtc}</Column>
                <Column>{crypto.inUsdt}</Column>
              </Row>) 
            }
            

        </TableC>
    </Container>
  )
}