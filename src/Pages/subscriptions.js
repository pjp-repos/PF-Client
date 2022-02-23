import NavBar from "../Components/Navbar/NavBar";
import SubscriptionTable from "../Components/Subscriptions/SubscriptionTable/SubscriptionTable";
import { Div } from "../Components/AaaGenerics/PrincipalDiv";

const SubscriptionPage = () => {
    return(
        <Div>
          <NavBar />
          <SubscriptionTable/>
        </Div>
    )
 };
 export default SubscriptionPage;