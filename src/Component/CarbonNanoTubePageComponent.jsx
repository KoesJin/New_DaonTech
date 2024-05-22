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
    Table,
    TableRow,
    TableHeader,
    TableData,
} from '../styled/CarbonNanoTubePageStyles';
import { FaDotCircle } from 'react-icons/fa';

export default function CarbonNanoTubePageCoponent() {
    return (
        <Container>
            <Title>CNT</Title>
            <Subtitle>끊임없는 기술개발과 투자를 통해 기업의 지속가능 경영을 실현합니다.</Subtitle>

            <Section>
                <SectionTitle>당사 CNT 기술(탄소나노튜브 방식)의 특징</SectionTitle>
                <FeatureList>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>전계 전자 방출원 사용</FeatureTitle>
                            <FeatureDescription>
                                탄소나노튜브는 상온에서 즉시 구동이 가능하여 에너지 손실과 피폭량을 최소화 할 수 있으며,
                                특히 반도체 응답 시스템을 통해 응답시간 최소화 실현
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>점 소스 단위의 전자 방출</FeatureTitle>
                            <FeatureDescription>
                                탄소나노튜브 방식은 에미터(Emitter) 끝에서 점 소스(nm 단위)의 전자방출을 구현하여 이미지
                                흐림 최소화를 통해 고 해상도의 이미지를 획득 가능
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                    <FeatureItem>
                        <FeatureIcon>
                            <FaDotCircle color="#007bff" />
                        </FeatureIcon>
                        <div>
                            <FeatureTitle>탄소나노튜브기술(CNT)의 선두 주자</FeatureTitle>
                            <FeatureDescription>
                                전 세계적으로 당사를 포함한 8개의 기관에서 탄소나노튜브(CNT)에 대한 연구를 활발하게 진행
                                중이나, 양산화 단계에 들어선 업체는 당사가 유일
                            </FeatureDescription>
                        </div>
                    </FeatureItem>
                </FeatureList>
            </Section>

            <Section>
                <SectionTitle>기존 기술과 당사 기술의 항목 별 비교 분석표</SectionTitle>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>항목/소스</TableHeader>
                            <TableHeader>텅스텐 필라멘트 (W Filament)</TableHeader>
                            <TableHeader>탄소나노튜브 (CNT)</TableHeader>
                            <TableHeader>비고</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableData>크기</TableData>
                            <TableData>대형</TableData>
                            <TableData>소형 (휴대용)</TableData>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>온도</TableData>
                            <TableData>200도 이상</TableData>
                            <TableData>상온</TableData>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>초점</TableData>
                            <TableData>0.4mm</TableData>
                            <TableData>0.05~0.2mm</TableData>
                            <TableData>촬영용 가변 가능</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>전력</TableData>
                            <TableData>높음</TableData>
                            <TableData>낮음</TableData>
                            <TableData></TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>해상도</TableData>
                            <TableData>낮음</TableData>
                            <TableData>높음</TableData>
                            <TableData>선질의 우수성</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>분해능</TableData>
                            <TableData>낮음</TableData>
                            <TableData>높음</TableData>
                            <TableData>치아 우식증 초기 진단</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>응답시간</TableData>
                            <TableData>느림</TableData>
                            <TableData>반도체 응답</TableData>
                            <TableData>유방암 및 기타 암 조기진단</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>연속촬영</TableData>
                            <TableData>5분 이상 대기</TableData>
                            <TableData>무제한</TableData>
                            <TableData>퓨마터스 관절염 조기진단</TableData>
                        </TableRow>
                        <TableRow>
                            <TableData>피폭량</TableData>
                            <TableData>높음</TableData>
                            <TableData>낮음</TableData>
                            <TableData>상온</TableData>
                        </TableRow>
                    </tbody>
                </Table>
            </Section>
        </Container>
    );
}
