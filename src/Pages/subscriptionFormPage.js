import SubscriptionForm from "../Components/Subscriptions/SubscriptionForm/SubscriptionForm";
import NavBar from "../Components/Navbar/NavBar";

const SubscriptionFormPage = () => {
    return(
        <div>
            <NavBar />
            <SubscriptionForm update={false}/>
        </div>
    )
 };
 export default SubscriptionFormPage;