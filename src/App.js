// Dependences
import { Routes, Route } from 'react-router-dom';

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


function App() {
   
    return (
        <Routes>
            <Route exact path="/" element={ <Home/>} />           
            <Route exact path="/signup" element={ <SignUp/>} />           
            <Route exact path="/signin" element={ <SignIn/>} />   
            <Route exact path="/home" element={ <AuthHome/>} />  
            <Route exact path="/transactions" element={ <TransactionsPage/>} /> 
            <Route exact path="/order/form" element={ <OrderPage />} /> 
            <Route exact path="/order" element={ <OrderTablePage />} />                          
            <Route exact path="/subscriptions" element={ <SubscriptionPage/>} />           
            <Route exact path="/subscriptions/form" element={ <SubscriptionFormPage/>} />                     
            <Route path="/subscriptions/form/:id" element={ <SubscriptionFormPage/>} />                     
        </Routes>
    );
}

export default App;

