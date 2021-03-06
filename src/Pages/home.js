import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filters from '../Components/Home/Filters/Filters';
import NavBar from '../Components/Navbar/NavBar';
import Pagination from '../Components/Home/Pagination/Pagination';
import Table from '../Components/Home/Table/Table';
import {getGlobalPrices} from '../Redux/Actions/actionCreators';
import {
  selectGlobalPricesAll,
  selectGlobalPricesCurrency
} from '../Redux/Selectors/selectors';
import Spinner from '../Components/AaaGenerics/Loaders/Spinner/Spinner';
import { Div } from '../Components/AaaGenerics/PrincipalDiv';

const CRYPTOS_PER_PAGE = 20;

function Home() {
  const [actualPage, setActualPage] = React.useState(1);
  let topCryptos = CRYPTOS_PER_PAGE * actualPage;
  let initialCryptos = topCryptos - CRYPTOS_PER_PAGE;
  const dispatch = useDispatch();
  const [data, status,error] = useSelector(selectGlobalPricesAll);
  const currency = useSelector(selectGlobalPricesCurrency);
  
  useEffect(() => {    
    getGlobalPrices(dispatch,currency); 
  }, [])
  
  // const refresh = ()=>{
  //   console.log('Refreshing...');
  //   getGlobalPrices(dispatch,currency)
  // }

  // // Refresh prices
  // const intervalID = setInterval(refresh, 5000);

  const reset = () => {
    getGlobalPrices(dispatch,currency);
  }

  return (
    
    <Div >
      <NavBar />
      {status===1
      ?<Spinner />
      :<>
        <Filters reset = {reset} />
        <Table cryptos = {data.slice(initialCryptos,topCryptos)}/>
        {data.length > 0 && <Pagination totalCryptos = {data.length} cryptosForPage = {CRYPTOS_PER_PAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
      </>
      }      
    </Div>
  );
}

export default Home;