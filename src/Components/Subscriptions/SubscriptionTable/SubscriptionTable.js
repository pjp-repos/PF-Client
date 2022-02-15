import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { 
    getSubscriptions, 
    deleteSubscription,
} from '../../../Redux/Actions/actionCreators';
import { 
    selectSubscriptionsAll,
    selectDeleteSubscriptionAll,
    selectSessionAll,
} from '../../../Redux/Selectors/selectors';

//import Container from '../AaaGenerics/Sections/Container'
//import {Button} from '../AaaGenerics/Button/Button'
import arrow from '../../../Assets/arrow.svg'
import edit from '../../../Assets/edit.svg'
import borrar from '../../../Assets/delete.svg'
import { Column } from '../../Home/Table/Column';
import { BannerImg,BannerOrder,DivBanner} from '../../Orders/OrderTable/OrderTableElements';
import { Title } from '../../UserHome/UserHomeElements';

// Styled components
import {
    Button,
    ButtonE,
    TableS,
    RowS,
    TableWrapper
} from './SubscriptionTableElements'
import SectionRelative from '../../AaaGenerics/Sections/SectionRelative';
import Container from '../../AaaGenerics/Sections/Container';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'

const SubscriptionTable = () => {
 
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const navigate = useNavigate();
    
    useEffect(()=>{
        isAuthenticated && getSubscriptions(dispatch, token);
    }, [isAuthenticated])
    
    const [subsData, subsStatus, subsError ] = useSelector(selectSubscriptionsAll);
    const [deleteData, deleteStatus, deleteError ] = useSelector(selectDeleteSubscriptionAll);
    
    const handleDelete = (e) =>{
        if(window.confirm('Seguro que desea eliminar la subscripcion?'))
        {
            deleteSubscription(dispatch, token, e.target.id);            
        }
    }


    // === RENDERS ============================================

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
    return (
        <TableWrapper>
            <DivBanner>
          <BannerOrder onClick={(e) => navigate("./form")}>
            <Title>Make A Subscription</Title>
            <BannerImg className = "Img" src =  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt = "banner" />
          </BannerOrder>
           </DivBanner>
            <TableS>
                {/* {subs.length ?<> */}
                <RowS head>
                    <Column>id</Column>
                    <Column>Pair</Column>
                    <Column>Symbol1</Column>
                    <Column></Column>
                    <Column>Symbol2</Column>
                    <Column>Price</Column>
                    <Column>fallPrice</Column>
                    <Column>alertOnFall</Column>
                    <Column>risePrice</Column>
                    <Column>alertOnRise</Column>
                </RowS>
                {subsData.map(s => (
                    <RowS key={s.id} id={s.id}>
                        <Column>{s.id}</Column>
                        <Column>{s.pair[0]}</Column>
                        <Column><img src={s.symbol1[1]} height='20px'/>{s.symbol1[0]}</Column>
                        <Column><img src={arrow} width='20px'/></Column>
                        <Column><img src={s.symbol2[1]} height='20px'/>{s.symbol2[0]}</Column>
                        <Column> {Number(s.pair[1])} </Column>
                        <Column> {s.fallPrice} </Column>
                        <Column>{s.alertOnFall ? 'True' : 'False'}</Column>
                        <Column> {s.risePrice} </Column>
                        <Column>{s.alertOnRise ? 'True' : 'False'}</Column>
                        <Column>
                           <Link to={`/subscriptions/form/${s.id}`}><ButtonE><img src={edit} height='20px'/></ButtonE></Link>
                           <ButtonE id={s.id} onClick={handleDelete}><img id={s.id} src={borrar} height='20px'/></ButtonE>
                        </Column>
                    </RowS>
                ))}
                
                {/* </> :<>
                    <div>Usuario sin subscripciones</div>
                    <Link to='/addsubscription'><Button>New Subscription</Button></Link>
                </>} */}
            </TableS>
        </TableWrapper>
    )
}

export default SubscriptionTable
