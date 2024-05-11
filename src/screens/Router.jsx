import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './routes/Home';
import LoginPage from './routes/LoginPage';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                { path: '', element: <Home /> },
                { path: '/login', element: <LoginPage /> },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    }
);

export default router;
