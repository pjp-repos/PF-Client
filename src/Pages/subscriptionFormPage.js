import PageViewport from "../Components/AaaGenerics/Sections/PageViewport";
import Container from "../Components/AaaGenerics/Sections/Container";
import SubscriptionForm from "../Components/Subscriptions/SubscriptionForm/SubscriptionForm";
import NavBar from "../Components/Navbar/NavBar";

const SubscriptionFormPage = () => {
    return(
        <div>
            <NavBar />
            <PageViewport>
              <Container>
                <SubscriptionForm update={false}/>
              </Container>
           </PageViewport>
        </div>
    )
 };
 export default SubscriptionFormPage;