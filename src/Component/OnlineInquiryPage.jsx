import React, { useState } from 'react';
import {
    Container,
    Title,
    SubTitle,
    Form,
    Input,
    TextArea,
    CheckboxWrapper,
    Checkbox,
    PrivacyPolicy,
    Button,
    ContentWrapper,
    PolicyButton,
} from '../styled/OnlineInquiryStyles';

const OnlineInquiry = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isPolicyVisible, setIsPolicyVisible] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handlePolicyClick = () => {
        setIsPolicyVisible(!isPolicyVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 유효성 검사
        if (name.length < 2) {
            setError('이름은 2글자 이상이어야 합니다.');
            return;
        }
        if (!/^\d{11}$/.test(phone)) {
            setError('전화번호는 11자리 숫자여야 합니다.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('유효한 이메일 주소를 입력하세요.');
            return;
        }
        if (!isChecked) {
            setError('개인정보처리방침에 동의해야 합니다.');
            return;
        }

        // 모든 조건이 만족되면 폼 제출 처리
        setError('');
        setFormSubmitted(true);
        alert('문의가 정상 처리 완료되었습니다.');
        window.location.reload();
    };

    return (
        <Container>
            <ContentWrapper>
                <Title>온라인문의</Title>
                <SubTitle>끊임없는 기술개발과 투자를 통해 기업의 지속가능 경영을 실현합니다.</SubTitle>
                {formSubmitted ? (
                    <p>문의 접수가 완료되었습니다.</p>
                ) : (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            placeholder="이름을 입력하세요."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <Input
                            type="text"
                            placeholder="연락처를 입력하세요."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <Input
                            type="email"
                            placeholder="이메일을 입력하세요."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextArea
                            rows="4"
                            placeholder="내용을 입력하세요."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <CheckboxWrapper>
                            <Checkbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                            <span>개인정보처리방침에 동의합니다.</span>
                            <PolicyButton type="button" onClick={handlePolicyClick} isPolicyVisible={isPolicyVisible}>
                                개인정보처리방침 보기
                            </PolicyButton>
                        </CheckboxWrapper>
                        {isPolicyVisible && (
                            <PrivacyPolicy>
                                1. 수집하는 개인정보 항목 이름, 이메일주소, 연락처(전화번호)
                                <br />
                                2. 수집 및 이용목적 고객상담 처리 및 결과회신 등
                                <br />
                                3. 보유 및 이용기간 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이
                                파기합니다. 단, 관련 법령의 규정에 의하여 보존할 의무가 있는 경우 법령이 지정한 일정기간
                                동안 보관합니다.
                                <br />
                                개인정보의 수집 및 이용에 관한 사항에 동의하십니까?
                            </PrivacyPolicy>
                        )}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button type="submit">확인</Button>
                    </Form>
                )}
            </ContentWrapper>
        </Container>
    );
};

export default OnlineInquiry;
