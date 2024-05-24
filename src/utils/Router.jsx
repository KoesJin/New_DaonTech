import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import MainPage from '../pages/MainPage';

import GreetingPage from '../Component/GreetingPageComponent';
import WaytoComePage from '../Component/WaytoComeComponent';
import CarbonNanoTubePage from '../pages/IntroductionItemPage/CarbonNanoTubePage';
import OnlineInquiryPage from '../pages/OnlineInquiryPage/OnlineInquiryPage';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '', element: <MainPage /> },
                { path: 'greeting', element: <GreetingPage /> },
                { path: 'waytocome', element: <WaytoComePage /> },
                { path: 'carbon', element: <CarbonNanoTubePage /> },
                { path: 'oninquiry', element: <OnlineInquiryPage /> },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
