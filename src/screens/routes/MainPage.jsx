import { Helmet } from 'react-helmet';
import Hero from '../Component/HeroComponent';
import Reasons from '../Component/ReasonsCoponent';
import Services from '../Component/ServicesComponet';

export default function MainPage() {
    return (
        <>
            <Helmet>
                <title>DaonTech</title>
            </Helmet>
            <Hero />
            <Reasons />
            <Services />
        </>
    );
}
