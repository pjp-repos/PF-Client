// Dependences
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { useSelector} from 'react-redux';

// Pages
import Home from './Pages/home';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';
import SubscriptionPage from './Pages/subscriptions';
import SubscriptionFormPage from './Pages/subscriptionFormPage';
import AuthHome from './Pages/AuthHome';
import TransactionsPage from './Pages/TransactionsPage';
import OrderPage from './Pages/OrderPage';
import OrderTablePage from './Pages/OrderTablePage';
import Wallet from './Pages/Wallet';

// Redux
import {
    selectSessionAll,
    selectSessionTheme
} from './Redux/Selectors/selectors'


function App() {
    const theme = useSelector(selectSessionTheme);
    const [isAuthenticated] = useSelector(selectSessionAll);

    const themeDark = {
        firstColor:"rgb(20, 21, 26)",
        secondColor:"#181A20",
        thirdColor:"#474D57",
        textColor:"white",
        whiteColor:"white",
        orderColor:"#efb810"
    };
    const themelight = {
        secondColor:"#FEF1F2",
        firstColor:"#DEDEDE",
        thirdColor:"#efb810",
        textColor:"black",
        whiteColor:"white",
        orderColor:"white"
    };

    let currentTheme = !isAuthenticated ? themeDark : theme?themelight:themeDark;

    return (
        <ThemeProvider theme={currentTheme}>        
            <Routes>
                <Route exact path="/" element={ <Home/>} />           
                <Route exact path="/signup" element={ <SignUp/>} />           
                <Route exact path="/signin" element={ <SignIn/>} />   
                <Route exact path="/home" element={ <AuthHome/>} />  
                <Route exact path="/transactions" element={ <TransactionsPage/>} />            

                <Route exact path="/order" element={ <OrderTablePage />} /> 
                <Route exact path="/order/form" element={ <OrderPage />} /> 
                <Route exact path="/order/form/:id" element={ <OrderPage />} />                                      
                <Route exact path="/subscriptions" element={ <SubscriptionPage/>} />           
                <Route exact path="/subscriptions/form" element={ <SubscriptionFormPage/>} />                     
                <Route path="/subscriptions/form/:id" element={ <SubscriptionFormPage/>} />  
                <Route exact path="/wallet" element={ <Wallet/>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;

