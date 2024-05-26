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
} from '../styled/MainSamrtFactoryStyles';

export default function MainSmartFactory() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <GrayBg>
            <Container>
                <MainContentWrapper>
                    <Title>탄소 나노튜브(CNT)</Title>
                    <LinkStyled to="/carbon" onClick={scrollToTop}>
                        기능에 대해 더 알아보기
                    </LinkStyled>
                </MainContentWrapper>
                <SideContent>
                    <SideBox>
                        <SideTitle>전기 전도성</SideTitle>
                        <SideDescription>
                            탄소 나노튜브는 뛰어난 전기 전도성을 제공하여 스마트 섬유가 전기를 효과적으로 전도할 수 있게
                            합니다.
                        </SideDescription>
                    </SideBox>
                    <SideBox>
                        <SideTitle>기계적 강도</SideTitle>
                        <SideDescription>
                            놀라울 정도로 강하고 가벼운 탄소 나노튜브는 스마트 섬유의 기계적 특성을 강화하여 더욱
                            견고하고 내구성을 높입니다.
                        </SideDescription>
                    </SideBox>
                    <SideBox>
                        <SideTitle>감지 능력</SideTitle>
                        <SideDescription>
                            탄소 나노튜브는 다양한 환경 자극에 민감하여 스마트 섬유가 실시간으로 여러 매개변수를
                            감지하고 모니터링할 수 있게 합니다.
                        </SideDescription>
                    </SideBox>
                    <SideBox>
                        <SideTitle>열 관리</SideTitle>
                        <SideDescription>
                            높은 열 전도성을 가진 탄소 나노튜브는 스마트 섬유가 열을 효율적으로 발산하게 하여 의류의
                            편안함과 전자 장치의 열 관리를 돕습니다.
                        </SideDescription>
                    </SideBox>
                </SideContent>
            </Container>
        </GrayBg>
    );
}
