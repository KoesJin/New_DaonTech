import React from 'react';
import { Container, Card, CardImage, CardTitle } from '../styled/OnlineInquiryTechnologyStyles';
import technologyImage from '../img/technology-image.jpg';
import inquiryImage from '../img/inquiry-image.jpg';

export default function OnlineInquiryTechnology() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <Container>
            <Card to="/carbon" onClick={scrollToTop}>
                <CardImage src={technologyImage} alt="우리의 기술력" />
                <CardTitle>제품 소개</CardTitle>
            </Card>
            <Card to="/oninquiry" onClick={scrollToTop}>
                <CardImage src={inquiryImage} alt="온라인 문의" />
                <CardTitle>온라인 문의</CardTitle>
            </Card>
        </Container>
    );
}
