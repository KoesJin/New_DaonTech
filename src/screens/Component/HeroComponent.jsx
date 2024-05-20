import { Container, StyledImage } from '../styled/HeroStyles';
import backgroundImage from '../img/DaonBg.jpg';

export default function Hero() {
    return (
        <Container>
            <StyledImage src={backgroundImage} alt="Daon Background" />
        </Container>
    );
}
