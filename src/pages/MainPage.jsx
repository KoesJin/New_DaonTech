import { Helmet } from 'react-helmet';
import Hero from '../Component/HeroComponent';
import MainWaytoComePageComponent from '../Component/MainWaytoComePageComponent';
import OnlineInquiryTechnology from '../Component/OnlineInquiryTechnology';
import TopButton from '../Component/TopButton';
import MainSection from '../Component/MainSectionComponet';
import MainSmartFactory from '../Component/MainSmartFactoryComponent';
import MainSmartSensor from '../Component/MainSmartSensorComponent';

export default function MainPage() {
    return (
        <>
            <Helmet>
                <title>DaonTech</title>
            </Helmet>
            <Hero />
            <MainSmartFactory />
            <MainSmartSensor />
            <MainSection />
            <MainWaytoComePageComponent />
            <OnlineInquiryTechnology />
            <TopButton />
        </>
    );
}
