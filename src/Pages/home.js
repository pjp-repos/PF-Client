import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import Filters from '../Components/Home/Filters/Filters';
import NavBar from '../Components/Navbar/NavBar';
import Pagination from '../Components/Home/Pagination/Pagination';
import Table from '../Components/Home/Table/Table';
import {getGlobalPrices} from '../Redux/Actions/actionCreators';
import {
  selectGlobalPrices,
  selectGlobalPricesStatus,
  selectGlobalPricesError
} from '../Redux/Selectors/selectors';

const CRYPTOSFORPAGE = 20;

function Home() {
  const [actualPage, setActualPage] = React.useState(1);
  let topCryptos = CRYPTOSFORPAGE * actualPage;
  let initialCryptos = topCryptos - CRYPTOSFORPAGE;
  const dispatch = useDispatch();
  const data = useSelector(selectGlobalPrices);
  const status = useSelector(selectGlobalPricesStatus);
  const error = useSelector(selectGlobalPricesError);
  
  useEffect(() => {    
    getGlobalPrices(dispatch,'usd'); 
  }, [])
  
  if(status===1) return(
    <p>
      Loading...
    </p>
  )
  return (
    
    <div >
      <NavBar />
      <Filters />
      <Table cryptos = {data.slice(initialCryptos,topCryptos)}/>
      {data.length > 0 && <Pagination totalCryptos = {data.length} cryptosForPage = {CRYPTOSFORPAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
    </div>
  );
}

export default Home;