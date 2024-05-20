import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import MainPage from './routes/MainPage';
import WaytoComPage from './routes/AboutUsPage/WaytoComPage';
import GreetingPage from './Component/GreetingPageComponent';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '', element: <MainPage /> },
                { path: 'greeting', element: <GreetingPage /> },
                { path: 'waytocome', element: <WaytoComPage /> },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
