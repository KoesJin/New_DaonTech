import { Outlet, useLocation } from 'react-router-dom';
import Header from './Component/HeaderComponet';
import Bottom from './Component/BottomComponent';
import { createGlobalStyle, styled } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './css/animations.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
`;

const AnimationContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

function Root() {
    const location = useLocation();

    return (
        <>
            <GlobalStyle />
            <Header />
            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
                    <AnimationContainer>
                        <Outlet />
                    </AnimationContainer>
                </CSSTransition>
            </TransitionGroup>
            <Bottom />
        </>
    );
}

export default Root;
