import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import MainPage from '../pages/MainPage';
import CarbonNanoTubePage from '../pages/IntroductionItemPage/CarbonNanoTubePage';
import OnlineInquiryPage from '../pages/OnlineInquiryPage/OnlineInquiryPage';
import SmartFactoryPage from '../pages/IntroductionItemPage/SmartFactoryComponentsPage';
import NoticePage from '../pages/OnlineInquiryPage/NoticePage';
import GreetingPage from '../pages/AboutUsPage/GreetingPage';
import WaytoCome from '../pages/AboutUsPage/WaytoComPage';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '', element: <MainPage /> },
                { path: 'greeting', element: <GreetingPage /> },
                { path: 'waytocome', element: <WaytoCome /> },
                { path: 'carbon', element: <CarbonNanoTubePage /> },
                { path: 'smartfactory', element: <SmartFactoryPage /> },
                { path: 'oninquiry', element: <OnlineInquiryPage /> },
                { path: 'notice', element: <NoticePage /> },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
