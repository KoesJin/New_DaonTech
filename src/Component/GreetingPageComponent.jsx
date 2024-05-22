import React from 'react';
import { Container, Title, Content, AddressContainer, AddressItem, AddressText } from '../styled/GreetingStyles';
import { FaEnvelope, FaPhoneAlt, FaUserTie } from 'react-icons/fa';

export default function GreetingPage() {
    return (
        <Container>
            <Title>인사말</Title>
            <Content>
                안녕하십니까?
                <br />
                Daon Tech 홈페이지를 방문해주셔서 감사합니다.
            </Content>
            <Content>
                저희는 탄소 나노튜브 스마트 섬유, 스마트 공장 센서 및 부품을 제조하는 회사입니다.
                <br />
                혁신적인 기술과 뛰어난 품질을 바탕으로 고객들께 최상의 제품을 제공하기 위해 노력하고 있습니다.
            </Content>
            <Content>
                우리는 고객의 요구 사항을 충족시키기 위해 지속적인 연구 및 개발에 투자하고 있습니다.
                <br />
                또한, 우리의 제품은 환경 친화적이며 지속 가능한 솔루션을 제공하기 위해 노력하고 있습니다.
            </Content>
            <Content>
                Daon Tech의 가치는 협력, 혁신 및 고객 만족입니다.
                <br />
                우리는 팀워크와 상호 존중을 중시하며, 함께 일하고 성장하는 것을 중요시합니다.
                <br />
                우리의 제품과 서비스에 관심을 가져 주셔서 감사합니다.
                <br />
                언제든지 궁금한 점이나 문의사항이 있으시면 언제든지 연락 주시기 바랍니다.
            </Content>
            <Content>
                당신의 성공을 함께 이루기를 기대합니다.
                <br />
                다시 한 번 환영합니다!
            </Content>

            <AddressContainer>
                <AddressItem>
                    <FaUserTie />
                    <AddressText>대표: 조익준</AddressText>
                </AddressItem>
                <AddressItem>
                    <FaPhoneAlt />
                    <AddressText as="a" href="tel:010-5219-8234">
                        대표번호: 010-5219-8234
                    </AddressText>
                </AddressItem>
                <AddressItem>
                    <FaEnvelope />
                    <AddressText as="a" href="mailto:sfs230@hanmail.net">
                        이메일: sfs230@hanmail.net
                    </AddressText>
                </AddressItem>
            </AddressContainer>
        </Container>
    );
}
