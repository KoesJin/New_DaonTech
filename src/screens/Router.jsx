import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import MainPage from './routes/MainPage';

import GreetingPage from './Component/GreetingPageComponent';
import WaytoComePage from './Component/WaytoComeComponent';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '', element: <MainPage /> },
                { path: 'greeting', element: <GreetingPage /> },
                { path: 'waytocome', element: <WaytoComePage /> },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
