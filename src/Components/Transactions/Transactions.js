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
import { DivInputFilters,Label,InputDate } from "../Orders/OrderTable/OrderFilters";
import Swal from 'sweetalert2'


const ROWS_PER_PAGE = 10;
const initialState = 
	{
		symbol:"",
		dateFrom:"",
		dateTo:"",
	}


export default function Transactions(){
    // Router
    const navigate = useNavigate();

    // States
    const [actualPage, setActualPage] = useState(1);
    let topRows = ROWS_PER_PAGE * actualPage ;
    let initialRows = topRows - ROWS_PER_PAGE;
	const [currentSortKey, setCurrentSortKey] = useState("");
	const [filterForm, setFilterForm] = useState(initialState);

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
			filterTransactions(dispatch,initialState);
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
	  
    // === RENDERS ============================================

    if(!isAuthenticated) navigate("/signin");

    // Loadings
    if(
        transactionsStatus===1 ||
        portfolioStatus===1

    ) return (<Spinner/>);

    // Errors
    if(transactionsStatus===3){
        //return(<p>{
                //`Oops. Something was wrong. 
                //ErrorCode:${transactionsErrors.errorCode} 
                //ErrorType:${transactionsErrors.errorType} 
                //ErrorMessage:${transactionsErrors.errorMessage}
                //`
        //}</p>)
		return (
		 	Swal.fire({
                    background: '#14151a',
                    icon:'error',
                    color: 'white',
                    title: `Opps. An error ocurred.`,
                    html: `<p>Type: ${transactionsErrors.errorType}.</p> 
                        <p>Code: ${transactionsErrors.errorCode}.</p> 
                        <p>Message: ${transactionsErrors.errorMessage}.</p>`,
                })
		)
	}

    if(portfolioStatus===3){
        //return(<p>{
                //`Oops. Something was wrong. 
                //ErrorCode:${portfolioErrors.errorCode} 
                //ErrorType:${portfolioErrors.errorType} 
                //ErrorMessage:${portfolioErrors.errorMessage}
                //`
        //}</p>)
		return (
			Swal.fire({
                    background: '#14151a',
                    icon:'error',
                    color: 'white',
                    title: `Opps. An error ocurred.`,
                    html: `<p>Type: ${portfolioErrors.errorType}.</p> 
                        <p>Code: ${portfolioErrors.errorCode}.</p> 
                        <p>Message: ${portfolioErrors.errorMessage}.</p>`,
                })
		)
    }
	return (
		<>
			<NavBar />
			<ContainerFiltersT>
				<Wallet onClick={(e) => navigate("../wallet")}>Wallet</Wallet>
                <DivInputFilters>
                  <Label>Date From</Label>
                  <InputDate type="date" id="dateFrom"  min="2022-01-01" max="2030-12-31"  onChange={(e) => handlerFilter(e.target.id,e.target.value)} />
                  <Label>Date to</Label>
                  <InputDate type="date" id="dateTo"   min="2022-01-01" max="2030-12-31" onChange={(e) => handlerFilter(e.target.id,e.target.value)} /> 
                </DivInputFilters>
				<SelectTransactions id = "symbol" onChange = {(e)=>handlerFilter(e.target.id,e.target.value)}> 
					<option id = "symbol" value = "">All Symbols</option>
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