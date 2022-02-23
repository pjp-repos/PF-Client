import SubscriptionForm from "../Components/Subscriptions/SubscriptionForm/SubscriptionForm";
import NavBar from "../Components/Navbar/NavBar";
import { Div } from "../Components/AaaGenerics/PrincipalDiv";

const SubscriptionFormPage = () => {
    return(
        <Div>
            <NavBar />
            <SubscriptionForm update={false}/>
        </Div>
    )
 };
 export default SubscriptionFormPage;