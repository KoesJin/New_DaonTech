import { createGlobalStyle } from 'styled-components';
import Hero from './Hero';
import Reasons from './Reasons';
import Services from './Services';
import Bottom from './Bottom';
import Header from './Header';
import Footer from './Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
`;

export default function Home() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Hero />
            <Reasons />
            <Services />
            <Bottom />
            <Footer />
        </>
    );
}
