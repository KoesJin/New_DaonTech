import React from 'react';
import PropTypes from 'prop-types';
import { Container, BackgroundImage, Overlay, TextContainer, Title, LogoBox, Line } from '../styled/HeroStyles';
import defaultBackgroundImage from '../img/DaonBg.jpg';

export default function Hero({ title, backgroundImage, showLogoBox, height }) {
    const defaultTitle = (
        <>
            고객의 <strong>혁신적 가치</strong>와
            <br />
            <strong>사람을 중시</strong>하는 기업
        </>
    );

    return (
        <Container height={height}>
            <BackgroundImage src={backgroundImage || defaultBackgroundImage} alt="Background Image" />
            <Overlay />
            <TextContainer>
                {showLogoBox ? (
                    <LogoBox>
                        <Line />
                        <Title>{title || defaultTitle}</Title>
                    </LogoBox>
                ) : (
                    <Title>{title || defaultTitle}</Title>
                )}
            </TextContainer>
        </Container>
    );
}

Hero.propTypes = {
    title: PropTypes.node,
    backgroundImage: PropTypes.string,
    showLogoBox: PropTypes.bool,
    height: PropTypes.string,
};

Hero.defaultProps = {
    title: null,
    backgroundImage: defaultBackgroundImage,
    showLogoBox: true,
    height: '80vh',
};
