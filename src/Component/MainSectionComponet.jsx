import React from 'react';
import {
    Container,
    Overlay,
    Title,
    SubTitle,
    InfoWrapper,
    InfoBox,
    Highlight,
    Description,
} from '../styled/MainSectionStyles';

export default function MainSection() {
    return (
        <Container>
            <Overlay />
            <Title>Now, Daon</Title>
            <SubTitle>DaonTech는 누구도 가보지 않은 혁신의 영역을 끊임없이 개척합니다.</SubTitle>
            <InfoWrapper>
                <InfoBox>
                    <Highlight>No.1</Highlight>
                    <Description>최고의 기술력과 서비스</Description>
                </InfoBox>
                <InfoBox>
                    <Highlight>24년도</Highlight>
                    <Description>카본나노튜브 스마트섬유 , 스마트팩토리 센서 및 부품 연구개발</Description>
                </InfoBox>
                <InfoBox>
                    <Highlight>50건 이상</Highlight>
                    <Description>플랜트 EPC 프로젝트 수행</Description>
                </InfoBox>
            </InfoWrapper>
        </Container>
    );
}
