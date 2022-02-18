import React from "react";
import Delete from "../../../Assets/delete.svg"
import Edit from "../../../Assets/edit.svg"
import Pagination from "../../Home/Pagination/Pagination";
import { Container ,TableO,RowO,BannerOrder,DivBanner,BannerImg} from "./OrderTableElements";
import { Column } from "../../Home/Table/Column";
import { Title } from "../../UserHome/UserHomeElements";
import {selectOrdersAll,selectSessionToken,selectSessionIsAuthenticated} from "../../../Redux/Selectors/selectors"
import { getOrders,deleteOrder} from "../../../Redux/Actions/actionCreators";
import { useSelector,useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ButtonE } from "../../Subscriptions/SubscriptionTable/SubscriptionTableElements";
import DateFilters from "../../Utils/DatesFilters";
import { Banner,ContainBanner,InfoBanner,TitleHenry,ButtonWallet,ImgBannerr,Henry } from "../../UserHome/UserHomeElements";
import img from "../../../Assets/Images/orderBanner.png"


const ORDERFORPAGE = 10;

export default function Transactions(){
    const [actualPage, setActualPage] = React.useState(1);
    const dispatch = useDispatch();
    let topOrders = ORDERFORPAGE * actualPage;
    let initialOrders = topOrders - ORDERFORPAGE;
    const isAuthenticated = useSelector(selectSessionIsAuthenticated);
    let orders = useSelector(selectOrdersAll);
    const token = useSelector(selectSessionToken);
    const navigate = useNavigate();
 
    React.useEffect(() => {
      if(!isAuthenticated)
         navigate("/signin")
      else{
        setTimeout(() => {
          getOrders(dispatch,token);
        },3000)
      }
    },[]);

    const handlerDelete = (e) => {
      if(window.confirm('Do you want delete this order?'))
      {
          deleteOrder(dispatch, token, e.target.id);            
      }
    }
   
  return (
    
    <Container>
       { orders[0].length === 0 && 
        <Banner>
         <ContainBanner>
           <TitleHenry><Henry>HenryCoin</Henry> Orders</TitleHenry>
           <InfoBanner>You got 1000000 usdt for orders</InfoBanner>
           <ButtonWallet  onClick={(e) => navigate("./form")}>Go to Orders</ButtonWallet>
         </ContainBanner>
         <ImgBannerr src ={img} alt="banner"/>
        </Banner> 
       } 
       {orders[0].length > 0 &&
         <DivBanner>
          <BannerOrder onClick={(e) => navigate("./form")}>
            <Title>{"Make A Order" }</Title>
            <BannerImg className = "Img" src =  "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt = "banner" />
          </BannerOrder>
         </DivBanner>
        }
        {orders[0].length > 0 && <DateFilters />}
        {orders[0].length > 0 && <TableO>
            <RowO head>
                <Column>Id</Column> 
                <Column>Symbol1</Column> 
                <Column>symbol2</Column> 
                <Column>Amount</Column> 
                <Column>Price</Column>
                <Column>PriceLimit</Column> 
                <Column>Type Order</Column>  
                <Column>State Order</Column> 
                <Column>Update</Column>  
                <Column>Edit</Column>  
            </RowO>
           
            {
              orders[0].slice(initialOrders,topOrders).map(orderItem=><RowO key = {orderItem.id}>
              <Column>{orderItem.id}</Column>
              <Column><img src={orderItem.SymbolSell.image} height='20px'/>{orderItem.SymbolSell.symbol}</Column>
              <Column><img src={orderItem.SymbolBuy.image} height='20px'/>{orderItem.SymbolBuy.symbol}</Column>
              <Column >{orderItem.amount % 1 !== 0 ? orderItem.amount.toFixed(5) : orderItem.amount}</Column>
              <Column>{orderItem.price % 1 !== 0 ? orderItem.price.toFixed(6) : orderItem.price}</Column>
              <Column >{orderItem.priceLimit % 1 !== 0 ? orderItem.priceLimit.toFixed(5) : orderItem.priceLimit}</Column>
              <Column >{orderItem.buyOrder === true ? "Buy" : "Sell"}</Column>
              <Column >{orderItem.sendOnPending === true ? "Pending" : orderItem.sendOnFullfiled === true ? "Fullfilled" : "Pending"}</Column>
              <Column >{orderItem.date}</Column>
                {
                  orderItem.sendOnPending === true && orderItem.marketOrder === false ?
                  <Column >
                    <Link to={`/order/form/${orderItem.id}`}><ButtonE><img id = {orderItem.id} src = {Edit} height="20px" alt = "edit"/></ButtonE></Link>
                    <ButtonE id={orderItem.id} onClick={handlerDelete}><img id = {orderItem.id} src = {Delete} height="20px" alt = "delete"/></ButtonE>
                  </Column>
                  : <Column>Order Not Editable</Column>
                }
              </RowO>) 
            }
        </TableO>
        }
        { orders[0].length > 0 && <Pagination totalCryptos = {orders[0].length} cryptosForPage = {ORDERFORPAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
    </Container>
  )
};