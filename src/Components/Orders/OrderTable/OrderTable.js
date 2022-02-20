// Packages
import React, {useState, useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
// Redux
import { 
  getOrders,
  deleteOrder,
  resetUpdateOrderStatus,
  resetAddOrderStatus,
  filterOrders,
  sortOrders
} from "../../../Redux/Actions/actionCreators";
import {
  selectOrdersAll,
  selectSessionAll, 
  selectDeleteOrderAll
} from "../../../Redux/Selectors/selectors"
// Assets
import Delete from "../../../Assets/delete.svg"
import Edit from "../../../Assets/edit.svg"
import img from "../../../Assets/Images/orderBanner.png"
// Components
import { 
  Container ,
  TableO,
  RowO,
  BannerOrder,
  DivBanner,
  BannerImg,
  DivButtons,
  ButtonOrder
} from "./OrderTableElements";
import Pagination from "../../Home/Pagination/Pagination";
import { Column } from "../../Home/Table/Column";
import { Title } from "../../UserHome/UserHomeElements";
import { ButtonE } from "../../Subscriptions/SubscriptionTable/SubscriptionTableElements";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import Spinner from "../../AaaGenerics/Loaders/Spinner/Spinner";


const ROWS_PER_PAGE = 10;

export default function OrderTable(){
  // React router
  const navigate = useNavigate();
  
  // states
  const [actualPage, setActualPage] = useState(1);
  let topRows = ROWS_PER_PAGE * actualPage;
  let initialRows = topRows - ROWS_PER_PAGE;
  const [currentSortKey, setCurrentSortKey] = useState("");
  const [filterForm, setFilterForm] = useState({
      symbol1:"",
      symbol2:"",
      dateFrom:"",
      dateTo:"",
  });

  // Redux
  const dispatch = useDispatch();
  const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
  const [ordersData, ordersStatus, ordersError ] = useSelector(selectOrdersAll);
  const [deleteData, deleteStatus, deleteError ] = useSelector(selectDeleteOrderAll);

  useEffect(() => {
    if(!isAuthenticated)
        navigate("/signin")
    else{
        getOrders(dispatch,token);
    }
  },[isAuthenticated]);

  const handlerDelete = (e) => {
    if(window.confirm('Are you sure you want to delete….?'))
    {
        deleteOrder(dispatch, token, e.target.id);            
    }
  }

  const editForm = (e) => {
    resetUpdateOrderStatus(dispatch);
    navigate(`/order/form/${e.target.id}`)
  }

  const addForm = (e) => {
    resetAddOrderStatus(dispatch);
    navigate("./form")
  }
  
  
  const handlerFilter = (filterKey,filterValue)=>{
    // Notice: For no filter, filterValue has to be "" (Empty string).
    let newFilterForm={
      ...filterForm,
      [filterKey]:filterValue
    };
    setFilterForm(newFilterForm);
    filterOrders(dispatch,newFilterForm);
  };

  const handlerSort = (sortKey)=>{
    setCurrentSortKey(sortKey);
    sortOrders(dispatch,sortKey);
  };
  
  // === RENDERS ============================================

  if(!isAuthenticated)return(<p>Forbbiden</p>)

  // Loadings
  if(
      ordersStatus===1 ||
      deleteStatus===1

  ) return (
      <Spinner/>                
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
  if(ordersStatus===3){
      return(<p>{
        `Oops. Something was wrong. 
        ErrorCode:${ordersError.errorCode} 
        ErrorType:${ordersError.errorType} 
        ErrorMessage:${ordersError.errorMessage}
        `
      }</p>)
  }
  
  return (    
    <Container>
         <DivBanner>
          <BannerOrder onClick={addForm}>
            <Title>{"Make A Order" }</Title>
            <BannerImg className = "Img" src =  "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt = "banner" />
          </BannerOrder>
         </DivBanner>
       <TableO>
            <RowO head>
                <Column>Id</Column> 
                <Column>Symbol1 <DivButtons>
                     <ButtonOrder onClick={() => handlerSort("symbol1Asc")} actual = {currentSortKey} id = "symbol1Asc" > { <FaAngleUp/>} </ButtonOrder>
                     <ButtonOrder onClick={() => handlerSort("symbol1Desc")} actual = {currentSortKey} id = "symbol1Desc"> { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column> 
                <Column >symbol2 
                  <DivButtons>
                      <ButtonOrder onClick={() => handlerSort("symbol2Asc")} actual = {currentSortKey} id = "symbol2Asc" > { <FaAngleUp/>} </ButtonOrder>
                      <ButtonOrder onClick={() => handlerSort("symbol2Desc")} actual = {currentSortKey} id = "symbol2Desc"> { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column> 
                <Column>Amount</Column> 
                <Column>Price</Column>
                <Column>PriceLimit</Column> 
                <Column>Type Order
                  <DivButtons>
                      <ButtonOrder onClick={() => handlerSort("typeAsc")} actual = {currentSortKey} id = "typeAsc" > { <FaAngleUp/>} </ButtonOrder>
                      <ButtonOrder onClick={() => handlerSort("typeDesc")} actual = {currentSortKey} id = "typeDesc"> { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column>  
                <Column>State Order</Column> 
                <Column >Date 
                  <DivButtons>
                    <ButtonOrder  onClick={() => handlerSort("dateAsc")} actual = {currentSortKey} id = "dateAsc" > { <FaAngleUp/>} </ButtonOrder>
                    <ButtonOrder  onClick={() => handlerSort("dateDesc")} actual = {currentSortKey} id = "dateDesc" > { <FaAngleDown/>} </ButtonOrder>
                  </DivButtons>
                </Column>  
                <Column>Edit</Column>  
            </RowO>
           
            {
              ordersData.slice(initialRows,topRows).map(orderItem=><RowO key = {orderItem.id}>
              <Column>{orderItem.id}</Column>
              <Column><img src={orderItem.symbol1.image} height='20px'/>{orderItem.symbol1.symbol}</Column>
              <Column><img src={orderItem.symbol2.image} height='20px'/>{orderItem.symbol2.symbol}</Column>
              <Column >{orderItem.amount % 1 !== 0 ? orderItem.amount.toFixed(5) : orderItem.amount}</Column>
              <Column>{orderItem.price % 1 !== 0 ? orderItem.price.toFixed(6) : orderItem.price}</Column>
              <Column >{orderItem.priceLimit % 1 !== 0 ? orderItem.priceLimit.toFixed(5) : orderItem.priceLimit}</Column>
              <Column >{orderItem.buyOrder === true ? "Buy" : "Sell"}</Column>
              <Column >{orderItem.sendOnPending === true ? "Pending" : orderItem.sendOnFullfiled === true ? "Fullfilled" : "Pending"}</Column>
              <Column >{orderItem.date}</Column>
                {
                  orderItem.sendOnPending === true && orderItem.marketOrder === false ?
                  <Column >
                    <ButtonE id = {orderItem.id} onClick = {editForm}><img id = {orderItem.id} src = {Edit} height="20px" alt = "edit"/></ButtonE>
                    <ButtonE id={orderItem.id} onClick={handlerDelete}><img id = {orderItem.id} src = {Delete} height="20px" alt = "delete"/></ButtonE>
                  </Column>: 
                  <Column>Not Editable</Column>
                }
              </RowO>) 
            }
        </TableO>
        <Pagination totalCryptos = {ordersData.length} cryptosForPage = {ROWS_PER_PAGE} actualPage = {actualPage} setActualPage = {setActualPage} />
    </Container>
  )
};