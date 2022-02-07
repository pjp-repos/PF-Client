import PageViewport from "../Components/AaaGenerics/Sections/PageViewport";
import Container from "../Components/AaaGenerics/Sections/Container";
import SubscriptionForm from "../Components/Subscriptions/SubscriptionForm/SubscriptionForm";

const SubscriptionFormPage = () => {
    return(
        <PageViewport>
            <Container>
                <SubscriptionForm update={false}/>
            </Container>
        </PageViewport>
    )
 };
 export default SubscriptionFormPage;