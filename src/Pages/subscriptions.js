import PageViewport from "../Components/AaaGenerics/Sections/PageViewport";
import Container from "../Components/AaaGenerics/Sections/Container";
import SubscriptionTable from "../Components/Subscriptions/SubscriptionTable/SubscriptionTable";

const SubscriptionPage = () => {
    return(
        <PageViewport>
            <Container>
                <SubscriptionTable/>
            </Container>
        </PageViewport>
    )
 };
 export default SubscriptionPage;