import styled from 'styled-components'
import { selectSubscriptions } from '../../Redux/Selectors/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { getSubscriptions, postSignIn, deleteSubscription } from '../../Redux/Actions/actionCreators'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
//import Container from '../AaaGenerics/Sections/Container'
//import {Button} from '../AaaGenerics/Button/Button'
import arrow from '../../Logos/arrow.svg'
import edit from '../../Logos/edit.svg'
import borrar from '../../Logos/delete.svg'

const Button = styled.button`
    margin: 25px;
    height: 25px;
    background-color: #0ecb81;
    color: white;
    border-radius: 5px;
    border: none;
    width: auto;
    cursor: pointer;
    @media screen and(max-width: 700px){
        width: auto;
    }
`

const ButtonE = styled(Button)`
    width: auto;
`

const Table = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin: 15px;
    align-items: center;
    justify-content: center;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(12,${props => props.width < 1200 ? '10%' : '5rem'});
    border-bottom: 1px solid #ccc;
    background-color: ${props => props.head ? '#0b0e11' : '#181A20'}
`
const Column = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 5px 10px;
`

const Container = styled.div`
    min-width: 100%;
    width: 100%;
    background-color: #181A20;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SubscriptionTable = () => {
    // Local 
    const subs = [ {
        "id": 4,
        "risePrice": 12,
        "fallPrice": 0,
        "alertOnRise": true,
        "alertOnFall": false,
        "pair": [
            "ETHBTC",
            0.07248
        ],
        "symbol1": [
            "eth",
            "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        ],
        "symbol2": [
            "btc",
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        ]
    },
    {
        "id": 5,
        "risePrice": 0,
        "fallPrice": 0,
        "alertOnRise": false,
        "alertOnFall": false,
        "pair": [
            "LTCBTC",
            0.002928
        ],
        "symbol1": [
            "ltc",
            "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
        ],
        "symbol2": [
            "btc",
            "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        ]
    }]
    const subsV =[] //Vacio
    
    //Back
    /*
    const subs = useSelector(selectSubscriptions)
    useEffect(()=>{
        getSubscriptions(dispatch)
    }, [])
    */
    const dispatch = useDispatch()
    
    const handleDelete = (e) =>{
        if(window.confirm('Seguro que desea eliminar la subscripcion?'))
        {
            deleteSubscription(dispatch, e.target.id)
        }
    }
   
  
    return (
        <Container flexDir='column'>
            <Table>
                {subs.length ?<>
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
                ))}</> :<>
                    <div>Usuario sin subscripciones</div>
                    <Link to='/addsubscription'><Button>New Subscription</Button></Link>
                </>}
            </Table>
        </Container>
    )
}

export default SubscriptionTable
