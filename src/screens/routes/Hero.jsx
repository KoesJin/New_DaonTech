import styled from 'styled-components';
import backgroundImage from '../img/DaonBg.jpg';

const Container = styled.div`
    width: 100vw; /* 뷰포트 너비에 맞춤 */
    height: 645px;
    position: relative;
    overflow: hidden;
    background: #fff;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
`;

export default function Hero() {
    return (
        <Container>
            <StyledImage src={backgroundImage} alt="Daon Background" />
        </Container>
    );
}
