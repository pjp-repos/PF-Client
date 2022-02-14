import React from "react";
import TransactionsTable from "./TransactionsTable";
import Pagination from "../Home/Pagination/Pagination";
import NavBar from "../Navbar/NavBar";
import { Wallet ,SelectTransactions,ContainerFiltersT } from "./TransactionsElements";
import {
  selectTransactions,
  selectSessionIsAuthenticated,
  selectSessionToken,
  selectPortfolio,
  selectPortfolioStatus
} from "../../Redux/Selectors/selectors";
import { useSelector,useDispatch} from "react-redux";
import {getTransactions,getPortfolio} from '../../Redux/Actions/actionCreators';
import { useNavigate } from "react-router-dom";
const TRANSACTIONSFORPAGE = 10;
const types = ["All","usdt","btc"];

export default function Transactions(){
    const [actualPage, setActualPage] = React.useState(1);
    let topTransactions = TRANSACTIONSFORPAGE * actualPage;
    let initialTransactions = topTransactions - TRANSACTIONSFORPAGE;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const transactions = useSelector(selectTransactions);
    const portfolio = useSelector(selectPortfolio);
    const isAuthenticated = useSelector(selectSessionIsAuthenticated);
    const token = useSelector(selectSessionToken);

    React.useEffect(() => {  
      getTransactions(dispatch,token);    
      getPortfolio(dispatch,token);
    }, []);

  return (
    <div >
        <NavBar />
        <ContainerFiltersT>
            <Wallet>Wallet</Wallet>
            <SelectTransactions>
                {
                  portfolio.length > 0 &&  portfolio.map(type => <option key = {type.symbol}>{type.symbol}</option>)
                }
            </SelectTransactions>
        </ContainerFiltersT>
        {transactions.length > 0 && <TransactionsTable transactionsUser = {transactions.slice(initialTransactions,topTransactions)}/>}
        {transactions.length > 0 && <Pagination totalCryptos = {transactions.length} cryptosForPage = {TRANSACTIONSFORPAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
    </div>
  )
}