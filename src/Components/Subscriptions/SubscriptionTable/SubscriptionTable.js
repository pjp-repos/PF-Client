import { useEffect } from 'react'
import {useNavigate, Link} from "react-router-dom";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { 
    getSubscriptions, 
    getSymbols,
    deleteSubscription,
    formSubscriptionsNewBtn,
    formSubscriptionsEditBtn,
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

// Styled components
import {
    Button,
    ButtonE,
    Table,
    Row,
    Column,
    TableWrapper
} from './SubscriptionTableElements'
import SectionRelative from '../../AaaGenerics/Sections/SectionRelative';
import Container from '../../AaaGenerics/Sections/Container';
import Spinner from '../../AaaGenerics/Loaders/Spinner/Spinner'

const SubscriptionTable = () => {

    // Router-dom hooks
    const navigate = useNavigate();
 
    // Redux
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const [subsData, subsStatus, subsError ] = useSelector(selectSubscriptionsAll);
    const [deleteData, deleteStatus, deleteError ] = useSelector(selectDeleteSubscriptionAll);

    // Load table data and any other data who is needed by the form
    useEffect(()=>{
        isAuthenticated && getSubscriptions(dispatch, token);
        isAuthenticated && getSymbols(dispatch,token); 
    }, [isAuthenticated]);
    
    
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
        if(window.confirm('Seguro que desea eliminar la subscripcion?'))
        {
            deleteSubscription(dispatch, token, e.target.id);            
        }
    };


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
            <Table>
                {/* {subs.length ?<> */}
                <Button onClick={handleNew}>New subscription</Button>
                <Row head='head'>
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
                </Row>
                {subsData.map(s => (
                    <Row key={s.id} id={s.id}>
                        <Column>{s.id}</Column>
                        <Column>{s.pair}</Column>
                        <Column><img src={s.symbol1[1]} height='20px'/>{s.symbol1[0]}</Column>
                        <Column><img src={arrow} width='20px'/></Column>
                         <Column><img src={s.symbol2[1]} height='20px'/>{s.symbol2[0]}</Column>
                        <Column> {Number(s.price)} </Column>
                        <Column> {s.fallPrice} </Column>
                        <Column>{s.alertOnFall ? 'Y' : 'N'}</Column>
                        <Column> {s.risePrice} </Column>
                        <Column>{s.alertOnRise ? 'Y' : 'N'}</Column>
                        <ButtonE onClick={()=>handleEdit(s)}><img src={edit} height='20px'/></ButtonE>
                        <ButtonE id={s.id} onClick={handleDelete}><img id={s.id} src={borrar} height='20px'/></ButtonE>
                    </Row>
                ))}
                
                {/* </> :<>
                    <div>Usuario sin subscripciones</div>
                    <Link to='/addsubscription'><Button>New Subscription</Button></Link>
                </>} */}
            </Table>
        </TableWrapper>
    )
}

export default SubscriptionTable
