import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getGlobalPrices} from '../Redux/Actions/actionCreators';
import {
  selectGlobalPrices,
  selectGlobalPricesStatus,
  selectGlobalPricesError
} from '../Redux/Selectors/selectors';

function Home() {
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
    
    <>
      {
          data.map((price)=>{
             let string = `Symbol: ${price.symbol} name:${price.name} price: ${price.price}`;
             return(
                <p key={price.id}>
                  {string}
                </p>
              )
          })
      }     
    </>
  );
}

export default Home;