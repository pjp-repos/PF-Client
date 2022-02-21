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
import { ContainBanner, InfoBanner,Banner,ButtonWallet,ImgBannerr,Henry,TitleHenry } from '../../UserHome/UserHomeElements';
import SubscriptionFilters from './SubscriptionFilters';
import Swal from 'sweetalert2'

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
        Swal.fire({
           title: 'Are you sure you want to delete it?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            background:'#14151a',
            color:'white',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!' 
        }).then(result => {
            if(result.isConfirmed){
                deleteSubscription(dispatch,token,e.target.id)
                Swal.fire({
                    background: '#14151a',
                    title:'Subscription deleted succesfuly',
                    icon:'success',
                    timer:2500,
                    color:'white',
                    showConfirmButton: false, 
                })
            }
        })
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
        return(
            Swal.fire({
                icon:'error',
                background:'#14151a',
                color:'white',
                title:`Oops. <p>Something was wrong.`,
                html:`
                <p>ErrorCode:${deleteError.errorCode}</p> 
                <p>ErrorType:${deleteError.errorType}</p> 
                <p>ErrorMessage:${deleteError.errorMessage}</p>
`,
            })
        )
    }
    if(subsStatus===3){
        //return(<p>{
        //`Oops.</p> Something was wrong. 
                //ErrorCode:${subsError.errorCode} 
                //ErrorType:${subsError.errorType} 
                //ErrorMessage:${subsError.errorMessage}
                //`
        //}</p>)
         return(
            Swal.fire({
                icon:'error',
                background:'#14151a',
                color:'white',
                title:`Oops. Something was wrong.`,
                html:`
                <p>ErrorCode:${subsError.errorCode}</p> 
                <p>ErrorType:${subsError.errorType}</p> 
                <p>ErrorMessage:${subsError.errorMessage}</p>
`,
            })
        )
    }
    return (
        <TableWrapper>
            { subsData.length === 0 && 
                <Banner>
                 <ContainBanner>
                    <TitleHenry><Henry>HenryCoin</Henry> Subscriptions</TitleHenry>
                    <InfoBanner>Receive alerts from your favorite crypto pairs</InfoBanner>
                    <ButtonWallet  onClick={handleNew}>Go to Subs</ButtonWallet>
                 </ContainBanner>
                 <ImgBannerr src ={subs} alt="banner"/>
               </Banner> 
       } 
            { subsData.length > 0 &&  <DivBanner>
                <BannerOrder onClick={handleNew}>
                  <Title>Make A Subscription</Title>
                  <BannerImg className = "Img" src =  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt = "banner" />
                </BannerOrder>
             </DivBanner>
            }
            {
                subsData.length > 0 && <SubscriptionFilters />
            }
           {  subsData.length > 0 && <TableS>
                {/* {subs.length ?<> */}
                
                <RowS head='head'>
                    <Column>id</Column>
                    <Column>Pair</Column>
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
                {subsData.map(s => (
                    <RowS key={s.id} id={s.id}>
                        <Column>{s.id}</Column>
                        <Column>{s.pair}</Column>
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
            }
        </TableWrapper>
    )
}

export default SubscriptionTable
