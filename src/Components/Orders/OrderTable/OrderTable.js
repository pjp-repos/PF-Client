// Packages
import React, {useState} from "react";
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
import {selectOrdersAll,selectSessionAll, selectDeleteOrderAll} from "../../../Redux/Selectors/selectors"
// Assets
import Delete from "../../../Assets/delete.svg"
import Edit from "../../../Assets/edit.svg"
import img from "../../../Assets/Images/orderBanner.png"
// Components
import Pagination from "../../Home/Pagination/Pagination";
import { Container ,TableO,RowO,BannerOrder,DivBanner,BannerImg} from "./OrderTableElements";
import { Column } from "../../Home/Table/Column";
import { Title } from "../../UserHome/UserHomeElements";
import { ButtonE } from "../../Subscriptions/SubscriptionTable/SubscriptionTableElements";
import DateFilters from "../../Utils/DatesFilters";
import { Banner,ContainBanner,InfoBanner,TitleHenry,ButtonWallet,ImgBannerr,Henry } from "../../UserHome/UserHomeElements";
import Spinner from "../../AaaGenerics/Loaders/Spinner/Spinner";


const ORDERFORPAGE = 10;

export default function OrderTable(){
    // React router
    const navigate = useNavigate();
    
    const [actualPage, setActualPage] = useState(1);
    let topOrders = ORDERFORPAGE * actualPage;
    let initialOrders = topOrders - ORDERFORPAGE;
    
    const [orderForm, setOrderForm] = useState({
      symbol1:{
        asc:"symbol1Asc",
        desc:"symbol1Desc",
        value:false
      },
      symbol2:{
        asc:"symbol2Asc",
        desc:"symbol2Desc",
        value:false
      },
      date:{
        asc:"dateAsc",
        desc:"dateDesc",
        value:false
      },
      type:{
        asc:"typeAsc",
        desc:"typeDesc",
        value:false
      },
    });


    // Redux
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const [ordersData, ordersStatus, ordersError ] = useSelector(selectOrdersAll);
    const [deleteData, deleteStatus, deleteError ] = useSelector(selectDeleteOrderAll);
 
    React.useEffect(() => {
      if(!isAuthenticated)
         navigate("/signin")
      else{
          getOrders(dispatch,token);
      }
    },[]);

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
  
  const handleOrder = (orderKey)=>{
    setOrderForm({
      ...orderForm,
      [orderKey]:{
        ...orderForm[orderKey],
        value:!orderForm[orderKey].value
      }
    })
    let orderSelected = orderForm[orderKey].value?orderForm[orderKey].asc:orderForm[orderKey].desc
    sortOrders(dispatch,orderSelected);
    getOrders(dispatch,token);
  }
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
       <DateFilters />
       <TableO>
            <RowO head>
                <Column>Id</Column> 
                <Column onClick={()=>handleOrder("symbol1")}>Symbol1</Column> 
                <Column onClick={()=>handleOrder("symbol2")}>symbol2</Column> 
                <Column>Amount</Column> 
                <Column>Price</Column>
                <Column>PriceLimit</Column> 
                <Column onClick={()=>handleOrder("type")}>Type Order</Column>  
                <Column>State Order</Column> 
                <Column onClick={()=>handleOrder("date")}>Date</Column>  
                <Column>Edit</Column>  
            </RowO>
           
            {
              ordersData.slice(initialOrders,topOrders).map(orderItem=><RowO key = {orderItem.id}>
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
                  </Column>
                  : <Column>Order Not Editable</Column>
                }
              </RowO>) 
            }
        </TableO>
        <Pagination totalCryptos = {ordersData.length} cryptosForPage = {ORDERFORPAGE} actualPage = {actualPage} setActualPage = {setActualPage} />
    </Container>
  )
};