import React from 'react';
import {
    GrayBg,
    Container,
    MainContentWrapper,
    Title,
    LinkStyled,
    SideContent,
    SideBox,
    SideTitle,
    SideDescription,
} from '../styled/MainSmartSensorStyles';

export default function MainSmartSensor() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <GrayBg>
            <Container>
                <MainContentWrapper>
                    <Title>스마트 팩토리 센서 및 부품</Title>
                    <LinkStyled to="/smartfactory" onClick={scrollToTop}>
                        기능에 대해 더 알아보기
                    </LinkStyled>
                </MainContentWrapper>
                <SideContent>
                    <SideBox>
                        <SideTitle>실시간 모니터링</SideTitle>
                        <SideDescription>
                            실시간 데이터 수집과 분석을 통해 생산 현황을 모니터링하고, 이상 상황을 즉시 감지하여 대응할
                            수 있습니다.
                        </SideDescription>
                    </SideBox>
                    <SideBox>
                        <SideTitle>자동화 제어</SideTitle>
                        <SideDescription>
                            스마트 센서와 부품을 활용한 자동화 시스템은 생산 효율성을 극대화하고, 인건비를 절감합니다.
                        </SideDescription>
                    </SideBox>
                    <SideBox>
                        <SideTitle>데이터 분석</SideTitle>
                        <SideDescription>
                            생산 데이터를 분석하여 공정 최적화, 품질 개선, 비용 절감 등의 인사이트를 제공합니다.
                        </SideDescription>
                    </SideBox>
                    <SideBox>
                        <SideTitle>예측 유지보수</SideTitle>
                        <SideDescription>
                            센서를 통해 장비 상태를 모니터링하고, 예측 알고리즘을 적용하여 고장을 사전에 예방합니다.
                        </SideDescription>
                    </SideBox>
                </SideContent>
            </Container>
        </GrayBg>
    );
}
