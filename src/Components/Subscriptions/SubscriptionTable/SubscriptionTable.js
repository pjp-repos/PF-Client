import { useEffect } from 'react'
import { Link } from 'react-router-dom'

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectSubscriptions,
    selectSubscriptionsStatus,
    selectSubscriptionsError,
    selectSignIn
} from '../../../Redux/Selectors/selectors';
import { 
    getSubscriptions, 
    deleteSubscription 
} from '../../../Redux/Actions/actionCreators';

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
    const subsV =[] //Vacio
    
    const subs = useSelector(selectSubscriptions);
    const subsStatus = useSelector(selectSubscriptionsStatus);
    const subsError = useSelector(selectSubscriptionsError);
    const validate = useSelector(selectSignIn);

    useEffect(()=>{
        getSubscriptions(dispatch,validate.tokenUser)
    }, [])

    const dispatch = useDispatch()
    
    const handleDelete = (e) =>{
        if(window.confirm('Seguro que desea eliminar la subscripcion?'))
        {
            deleteSubscription(dispatch, e.target.id)
        }
    }


    // === RENDERS ============================================

    // Loadings
    if(
        subsStatus===1 

    ) return (
        <SectionRelative>
            <Container>
                <Spinner/>
            </Container>
        </SectionRelative>        
    );

    if(subsStatus===3)<p>Fail</p>
    return (
        <TableWrapper>
            <Table>
                {/* {subs.length ?<> */}
                <Link to='/addsubscription'><Button>New subscription</Button></Link>
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
                {subs.map(s => (
                    <Row key={s.id} id={s.id}>
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
                        <Link to='/addsubscription'><ButtonE><img src={edit} height='20px'/></ButtonE></Link>
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
