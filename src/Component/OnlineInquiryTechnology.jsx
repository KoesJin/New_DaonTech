import React from 'react';
import { Container, Card, CardImage, CardTitle } from '../styled/OnlineInquiryTechnologyStyles';
import mainnotice from '../img/mainnotice.png';
import inquiryImage from '../img/inquiry-image.jpg';
import { GrayBg } from '../styled/MainWaytoComePageStyles';

export default function OnlineInquiryTechnology() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <GrayBg>
            <Container>
                <Card to="/oninquiry" onClick={scrollToTop}>
                    <CardImage src={inquiryImage} alt="온라인 문의" />
                    <CardTitle>온라인 문의</CardTitle>
                </Card>
                <Card to="/notice" onClick={scrollToTop}>
                    <CardImage src={mainnotice} alt="우리의 기술력" />
                    <CardTitle>제품 소개</CardTitle>
                </Card>
            </Container>
        </GrayBg>
    );
}
