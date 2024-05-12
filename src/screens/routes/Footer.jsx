import styled from 'styled-components';

// Footer 컨테이너
const FooterContainer = styled.div`
    width: 100vw; /* 뷰포트 너비에 맞춤 */
    height: 70px;
    position: relative;
    overflow: hidden;
    background: #2947a9;
`;

// Footer 텍스트
const FooterText = styled.p`
    position: absolute;
    left: 112px;
    top: 26px;
    font-size: 16px;
    text-align: left;
    color: #fff;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <FooterText>DaonTech © 2024. All Rights Reserved</FooterText>
        </FooterContainer>
    );
}
