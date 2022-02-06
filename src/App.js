// Dependences
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/home';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';
import SubscriptionPage from './Pages/subscriptions';
import SubscriptionFormPage from './Pages/subscriptionFormPage';


function App() {
   
    return (
        <Routes>
            <Route exact path="/" element={ <Home/>} />           
            <Route exact path="/signup" element={ <SignUp/>} />           
            <Route exact path="/signin" element={ <SignIn/>} />           
            <Route exact path="/subscriptions" element={ <SubscriptionPage/>} />           
            <Route exact path="/subscriptions/form" element={ <SubscriptionFormPage/>} />                     
        </Routes>
    );
}

export default App;

