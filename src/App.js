// Dependences
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/home';
import SignUp from './Pages/signUp';
import SignIn from './Pages/signIn';
import SubscriptionPage from './Pages/subscriptions';
import UpdateSubscriptionPage from './Pages/updateSubscriptions';
import AddSubscriptionPage from './Pages/addSubscriptions'

function App() {
   
    return (
        <Routes>
            <Route exact path="/" element={ <Home/>} />           
            <Route exact path="/signup" element={ <SignUp/>} />           
            <Route exact path="/signin" element={ <SignIn/>} />           
            <Route exact path="/subscriptions" element={ <SubscriptionPage/>} />           
            <Route exact path="/addsubscription" element={ <UpdateSubscriptionPage/>} />           
            <Route exact path="/editsubscription" element={ <AddSubscriptionPage/>} />           
        </Routes>
    );
}

export default App;

