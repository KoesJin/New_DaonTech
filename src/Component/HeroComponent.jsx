import React from 'react';
import PropTypes from 'prop-types';
import { Container, BackgroundImage, Overlay, TextContainer, Title, LogoBox, Line } from '../styled/HeroStyles';
import backgroundImage from '../img/DaonBg.jpg';

export default function Hero({ title }) {
    const defaultTitle = (
        <>
            고객의 <strong>혁신적 가치</strong>와
            <br />
            <strong>사람을 중시</strong>하는 기업
        </>
    );

    return (
        <Container>
            <BackgroundImage src={backgroundImage} alt="Daon Background" />
            <Overlay />
            <TextContainer>
                <LogoBox>
                    <Line />
                    <Title>{title || defaultTitle}</Title>
                </LogoBox>
            </TextContainer>
        </Container>
    );
}

Hero.propTypes = {
    title: PropTypes.node,
};

Hero.defaultProps = {
    title: null,
};
