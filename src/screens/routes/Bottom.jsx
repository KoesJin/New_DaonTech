import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 377px;
    position: relative;
    overflow: hidden;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    box-sizing: border-box;
`;

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ContactInfo = styled.p`
    font-size: 20px;
    color: #6c757d;
    margin: 0;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const ContactLabel = styled.span`
    font-weight: bold;
    color: #000;
`;

const EmailSection = styled.section`
    display: flex;
    align-items: center;
`;

const EmailInput = styled.input`
    font-size: 18px;
    padding: 10px;
    margin-right: 16px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    &::placeholder {
        color: #adb5bd;
    }
`;

const SubscribeButton = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background-color: #f9995d;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export default function Bottom() {
    return (
        <Container>
            <ContactSection>
                <ContactInfo>
                    <ContactLabel>ADDRESS:</ContactLabel> 경기도 안산시 단원구 원포공원로 59, 신명트윈타워 A동 5층 15호
                </ContactInfo>
                <ContactInfo>
                    <ContactLabel>PHONE:</ContactLabel> 010-5219-8234
                </ContactInfo>
                <ContactInfo>
                    <ContactLabel>EMAIL:</ContactLabel> sfs230@hanmail.net
                </ContactInfo>
            </ContactSection>

            <EmailSection>
                <EmailInput type="text" placeholder="Your email here" />
                <SubscribeButton>Subscribe</SubscribeButton>
            </EmailSection>
        </Container>
    );
}
