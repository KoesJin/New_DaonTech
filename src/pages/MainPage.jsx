import { Helmet } from 'react-helmet';
import Hero from '../Component/HeroComponent';
import Reasons from '../Component/ReasonsCoponent';
import Services from '../Component/ServicesComponet';
import OnlineInquiryTechnology from '../Component/OnlineInquiryTechnology';
import MainWaytoComePageComponent from '../Component/MainWaytoComePageComponent';

export default function MainPage() {
    return (
        <>
            <Helmet>
                <title>DaonTech</title>
            </Helmet>
            <Hero />
            <Reasons />
            <OnlineInquiryTechnology />
            <Services />
            <MainWaytoComePageComponent />
        </>
    );
}
