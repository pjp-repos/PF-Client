// Packages
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
// Redux connections
import {
	selectTransactionsAll,
	selectSessionAll,
	selectPortfolioAll,
} from "../../Redux/Selectors/selectors";
import {
	getTransactions,
	getPortfolio,
	filterTransactions,
	sortTransactions,
} from '../../Redux/Actions/actionCreators';
// Components
import TransactionsTable from "./TransactionsTable";
import Pagination from "../Home/Pagination/Pagination";
import NavBar from "../Navbar/NavBar";
import { Wallet ,SelectTransactions,ContainerFiltersT } from "./TransactionsElements";
import Spinner from "../AaaGenerics/Loaders/Spinner/Spinner";

const ROWS_PER_PAGE = 10;

export default function Transactions(){
    // Router
    const navigate = useNavigate();

    // States
    const [actualPage, setActualPage] = useState(1);
    let topRows = ROWS_PER_PAGE * actualPage ;
    let initialRows = topRows - ROWS_PER_PAGE;
	const [currentSortKey, setCurrentSortKey] = useState("");
	const [filterForm, setFilterForm] = useState({
		symbol:"",
		dateFrom:"",
		dateTo:"",
	});

    // Redux
    const dispatch = useDispatch();
    const [userName, token, isAuthenticated, email] = useSelector(selectSessionAll);
    const [transactions, transactionsStatus,transactionsErrors] = useSelector(selectTransactionsAll);
    const [portfolio, portfolioStatus, portfolioErrors ] = useSelector(selectPortfolioAll);


    useEffect(() => {  
		if(!isAuthenticated)
			navigate("/signin")
		else{
			getTransactions(dispatch,token);    
			getPortfolio(dispatch,token);
		}
    }, [isAuthenticated]);


	const handlerFilter = (filterKey,filterValue)=>{
		// Notice: For no filter, filterValue has to be "" (Empty string).
		let newFilterForm={
		  ...filterForm,
		  [filterKey]:filterValue
		};
		setFilterForm(newFilterForm);
		filterTransactions(dispatch,newFilterForm);
	};

    const handlerSort = (sortKey)=>{
		setCurrentSortKey(sortKey);
		sortTransactions(dispatch,sortKey);
	};
	 
	  
    // === RENDERS ============================================

    if(!isAuthenticated) navigate("/signin");

    // Loadings
    if(
        transactionsStatus===1 ||
        portfolioStatus===1

    ) return (<Spinner/>);

    // Errors
    if(transactionsStatus===3){
        return(<p>{
                `Oops. Something was wrong. 
                ErrorCode:${transactionsErrors.errorCode} 
                ErrorType:${transactionsErrors.errorType} 
                ErrorMessage:${transactionsErrors.errorMessage}
                `
        }</p>)
    }

    if(portfolioStatus===3){
        return(<p>{
                `Oops. Something was wrong. 
                ErrorCode:${portfolioErrors.errorCode} 
                ErrorType:${portfolioErrors.errorType} 
                ErrorMessage:${portfolioErrors.errorMessage}
                `
        }</p>)
    }
    
	return (
		<>
			<NavBar />
			<ContainerFiltersT>
				<Wallet onClick={(e) => navigate("../wallet")}>Wallet</Wallet>
				<SelectTransactions id = "symbol" onChange = {(e)=>handlerFilter(e.target.name,e.target.value)}> 
					<option id = "symbol" value = "">All</option>
					{
					portfolio.length > 0 &&  portfolio.map(type => <option key = {type.symbol} id = "symbol" value = {type.symbol}>{type.symbol}</option>)
					}
				</SelectTransactions>
			</ContainerFiltersT>
			{transactions.length > 0 && <TransactionsTable transactionsUser = {transactions.slice(initialRows,topRows)}/>}
			{transactions.length > 0 && <Pagination totalCryptos = {transactions.length} cryptosForPage = {ROWS_PER_PAGE} actualPage = {actualPage} setActualPage = {setActualPage} />}
		</>
	)
}