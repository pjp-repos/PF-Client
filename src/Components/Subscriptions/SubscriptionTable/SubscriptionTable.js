import { useState, useEffect } from 'react'
import {useNavigate, Link} from "react-router-dom";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { 
    getSubscriptions, 
    getSymbols,
    deleteSubscription,
    formSubscriptionsNewBtn,
    formSubscriptionsEditBtn,
    filterSubscriptions,
    sortSubscriptions,
} from '../../../Redux/Actions/actionCreators';
import { 
    selectSubscriptionsAll,
    selectDeleteSubscriptionAll,
    selectSessionAll
} from '../../../Redux/Selectors/selectors';

//import Container from '../AaaGenerics/Sections/Container'
//import {Button} from '../AaaGenerics/Button/Button'
import arrow from '../../../Assets/arrow.svg'
import edit from '../../../Assets/edit.svg'
import borrar from '../../../Assets/delete.svg'
import subs from "../../../Assets/Images/subs.png"
// Styled components
import {
    Button,
    ButtonE,
    TableS,
    RowS,
    TableWrapper
} from './SubscriptionTableElements'
import { Column } from '../../Home/Table/Column';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'
import { BannerImg,BannerOrder,DivBanner} from '../../Orders/OrderTable/OrderTableElements';
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { Title } from '../../UserHome/UserHomeElements';
import { DivButtons,ButtonOrder } from '../../Orders/OrderTable/OrderTableElements';
import SubscriptionFilters from './SubscriptionFilters';
import Pagination from '../../Home/Pagination/Pagination';

const ROWS_PER_PAGE=10;

const SubscriptionTable = () => {

    // Router-dom hooks
    const navigate = useNavigate();

    // states
    const [actualPage, setActualPage] = useState(1);
    let topRows = ROWS_PER_PAGE * actualPage;
    let initialRows = topRows - ROWS_PER_PAGE;
    const [currentSortKey, setCurrentSortKey] = useState(""); // Keys:symbol1,symbol2, alertOnRise,alertOnFall,id
   
    // Redux
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const [subsData, subsStatus, subsError ] = useSelector(selectSubscriptionsAll);
    const [deleteData, deleteStatus, deleteError ] = useSelector(selectDeleteSubscriptionAll);

    // Load table data and any other data who is needed by the form
    useEffect(() => {
        if(!isAuthenticated)
            navigate("/signin")
        else{
            getSubscriptions(dispatch, token);
            getSymbols(dispatch,token);
        }
    },[isAuthenticated]);
    
    // New - Edit - Delete events
    const handleNew = () =>{
        formSubscriptionsNewBtn(dispatch);
        navigate('/subscriptions/form');
    };

    const handleEdit = (form) =>{
        formSubscriptionsEditBtn(dispatch, form);
        navigate('/subscriptions/form');
    };

    const handleDelete = (e) =>{
        if(window.confirm('Are you sure you want to delete?'))
        {
            deleteSubscription(dispatch, token, e.target.id);            
        }
    };
    
    const handlerSort = (sortKey)=>{
        setCurrentSortKey(sortKey);
        sortSubscriptions(dispatch,sortKey);
    };

    // === RENDERS ============================================

    if(!isAuthenticated)return(<p>Forbbiden</p>)
    // Loadings
    if(
        subsStatus===1 ||
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
    if(subsStatus===3){
        return(<p>{
                `Oops. Something was wrong. 
                ErrorCode:${subsError.errorCode} 
                ErrorType:${subsError.errorType} 
                ErrorMessage:${subsError.errorMessage}
                `
        }</p>)
    }
    return (
        <TableWrapper>

            <DivBanner>
                <BannerOrder onClick={handleNew}>
                  <Title>Make A Subscription</Title>
                  <BannerImg className = "Img" src =  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt = "banner" />
                </BannerOrder>
            </DivBanner>
            <SubscriptionFilters />            
           <TableS>                               
                <RowS head='head'>
                    <Column>Symbol1
                       <DivButtons>
                         <ButtonOrder onClick={() => handlerSort("symbol1Asc")} actual = {currentSortKey} id = "symbol1Asc" > { <FaAngleUp/>} </ButtonOrder>
                         <ButtonOrder onClick={() => handlerSort("symbol1Desc")} actual = {currentSortKey} id = "symbol1Desc"> { <FaAngleDown/>} </ButtonOrder>
                      </DivButtons>         
                    </Column>
                    <Column></Column>
                    <Column>Symbol2
                        <DivButtons>
                           <ButtonOrder onClick={() => handlerSort("symbol2Asc")} actual = {currentSortKey} id = "symbol2Asc" > { <FaAngleUp/>} </ButtonOrder>
                           <ButtonOrder onClick={() => handlerSort("symbol2Desc")} actual = {currentSortKey} id = "symbol2Desc"> { <FaAngleDown/>} </ButtonOrder>
                        </DivButtons>  
                    </Column>
                    <Column>Price</Column>
                    <Column>Fall Price</Column>
                    <Column>AlertOnFall</Column>
                    <Column>Rise Price</Column>
                    <Column>AlertOnRise</Column>
                </RowS>
                {subsData.slice(initialRows,topRows).map(s => (
                    <RowS key={s.id} id={s.id}>
                        <Column><img src={s.symbol1[1]} height='20px'/>{s.symbol1[0]}</Column>
                        <Column><img src={arrow} width='20px'/></Column>
                         <Column><img src={s.symbol2[1]} height='20px'/>{s.symbol2[0]}</Column>
                        <Column> {s.price % 1 !== 0 ? Number(s.price).toFixed(6):Number(s.price)} </Column>
                        <Column> {s.fallPrice} </Column>
                        <Column>{s.alertOnFall ? 'Y' : 'N'}</Column>
                        <Column> {s.risePrice} </Column>
                        <Column>{s.alertOnRise ? 'Y' : 'N'}</Column>
                        <Column>
                          <ButtonE onClick={()=>handleEdit(s)}><img src={edit} height='20px'/></ButtonE>
                          <ButtonE id={s.id} onClick={handleDelete}><img id={s.id} src={borrar} height='20px'/></ButtonE>
                        </Column>
                        
                    </RowS>
                ))}
                
                {/* </> :<>
                    <div>Usuario sin subscripciones</div>
                    <Link to='/addsubscription'><Button>New Subscription</Button></Link>
                </>} */}
            </TableS>            
            {<Pagination totalCryptos = {subsData.length} cryptosForPage = {ROWS_PER_PAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
        </TableWrapper>
    )
}

export default SubscriptionTable