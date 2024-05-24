import React from 'react';
import {
    Container,
    Title,
    Subtitle,
    Section,
    SectionTitle,
    FeatureList,
    FeatureItem,
    FeatureIcon,
    FeatureTitle,
    FeatureDescription,
} from '../styled/SmartFactoryComponentsStyles';
import { FaDotCircle } from 'react-icons/fa';

export default function SmartFactoryComponents() {
    return (
        <Container>
            <Title>스마트 팩토리 센서 및 부품</Title>
            <Subtitle>
                사물인터넷(IoT), 인공지능(AI), 데이터 분석 등 첨단 기술을 활용해 생산 공정을 최적화하고 효율성을
                개선하며 제품 품질을 향상시키는 현대 제조 시설의 필수 구성 요소입니다.
            </Subtitle>

            <Section>
                <SectionTitle>센서</SectionTitle>
                <FeatureList>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>환경 센서</FeatureTitle>
                            <FeatureDescription>
                                공장 환경 내 온도, 습도, 공기 질, 조도 등의 매개변수를 모니터링합니다. 이러한 센서는
                                제조 조건이 생산 공정과 직원 복지에 최적인지 확인합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>장비 센서</FeatureTitle>
                            <FeatureDescription>
                                공장 현장의 기계 및 장비의 성능과 상태를 모니터링합니다. 이상 현상을 감지하고 잠재적인
                                오류를 예측하며 예방 유지 관리 일정을 계획하여 가동 중지 시간을 최소화하고 비용을
                                절감합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>프로세스 센서</FeatureTitle>
                            <FeatureDescription>
                                생산 공정 중 압력, 유속, 화학 성분과 같은 매개변수를 측정합니다. 이는 프로세스가 지정된
                                공차 내에서 작동하도록 보장하여 일관된 제품 품질과 수율을 보장합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>위치 및 모션 센서</FeatureTitle>
                            <FeatureDescription>
                                공장 전체에서 자재, 제품 및 로봇 시스템의 움직임을 추적합니다. 이를 통해 정확한 위치
                                지정, 자재 취급 작업 자동화 및 생산 흐름 조정이 가능합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>진동 및 소음 센서</FeatureTitle>
                            <FeatureDescription>
                                기계 및 장비에서 발생하는 진동 및 소음 수준을 감지합니다. 이는 기계적 문제를 식별하고
                                작동 조건을 최적화하며 안전한 작업 환경을 보장하는 데 도움이 됩니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                </FeatureList>
            </Section>

            <Section>
                <SectionTitle>부품</SectionTitle>
                <FeatureList>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>액추에이터</FeatureTitle>
                            <FeatureDescription>
                                전기 신호를 밸브 열기 또는 닫기, 기계 설정 조정, 로봇 팔 제어 등의 물리적 동작으로
                                변환합니다. 액추에이터를 사용하면 센서 데이터와 사전 정의된 알고리즘을 기반으로 제조
                                공정을 자동으로 제어하고 조정할 수 있습니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>컨트롤러</FeatureTitle>
                            <FeatureDescription>
                                센서의 입력과 상위 제어 시스템의 지침을 기반으로 기계, 장비 및 생산 프로세스의 작동을
                                관리합니다. 컨트롤러는 제조 작업이 조정되고 효율적이며 변화하는 수요에 대응하도록
                                보장합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>임베디드 시스템</FeatureTitle>
                            <FeatureDescription>
                                기계 및 장비 내의 특정 기능을 제어하고 모니터링하는 마이크로컨트롤러, 프로그래밍 가능
                                논리 컨트롤러(PLC) 및 기타 임베디드 컴퓨팅 장치를 포함합니다. 이는 장치 수준에서 실시간
                                데이터 처리, 의사 결정 및 통신 기능을 제공합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>통신 모듈</FeatureTitle>
                            <FeatureDescription>
                                센서, 액추에이터, 컨트롤러 및 상위 시스템(예: 제조 실행 시스템 또는 ERP 시스템) 간의
                                연결을 촉진합니다. 통신 모듈을 사용하면 데이터 교환, 원격 모니터링, 제조 공정 제어가
                                가능해 전반적인 시스템 상호 운용성과 통합에 기여합니다.
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                </FeatureList>
            </Section>
        </Container>
    );
}
