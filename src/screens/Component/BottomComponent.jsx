import { Container, LogoSection, ContactSection, ContactInfo, LogoWhite } from '../styled/BottomStyles';
import logoImage from '../img/BigLogo.png';

export default function Bottom() {
    return (
        <Container>
            <LogoSection>
                <img src={logoImage} style={{ height: '40px' }} alt="DaonTech 로고" />
                <LogoWhite to="/">DaonTech</LogoWhite>
            </LogoSection>
            <ContactSection>
                <ContactInfo>
                    경기도 안산시 단원구 원포공원로 59, 신명트윈타워 A동 5층 15호 대표전화 : 010-5219-8234
                </ContactInfo>
                <ContactInfo>Copyright © 2024 DaonTech All Rights Reserved</ContactInfo>
            </ContactSection>
        </Container>
    );
}
