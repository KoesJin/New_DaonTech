import styled from 'styled-components';

const Container = styled.div`
    width: 100vw; /* 뷰포트 너비에 맞춤 */
    height: 720px;
    position: relative;
    overflow: hidden;
    background: #fff;
`;

const Sidebar = styled.div`
    width: 522px;
    height: 720px;
    position: absolute;
    right: 0; /* Changed from 'left' to 'right' to ensure the sidebar stays on the right side */
    top: 0;
    background: rgba(41, 71, 169, 0.65);
`;

const ImageContainer = styled.div`
    width: 600px;
    height: 590px;
    position: absolute;
    right: 522px; /* Adjusted to place it next to the sidebar */
    top: 37px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const InputField = styled.div`
    width: 367px;
    height: 34px;
    position: absolute;
    left: 204px;
    border-radius: 50px;
    background: transparent;
    border: 1px solid #656ed3;
`;

const LoginButtonContainer = styled.div`
    width: 365px;
    height: 34px;
    position: absolute;
    left: 206.5px;
    top: 401.5px;
`;

const LoginButton = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background: #5069ba;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ButtonText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`;

const Label = styled.p`
    font-size: 16px;
    color: #000;
    position: absolute;
    left: 205px;
`;

const Logo = styled.span`
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    color: #2947a9;
    position: absolute;
    left: 35px;
    top: 37px;
`;

export default function LoginPage() {
    return (
        <Container>
            <Sidebar />
            <ImageContainer>
                <Image src="../img/object/other-03.png" alt="A descriptive alternative text" />
            </ImageContainer>
            <InputField style={{ top: '249px' }} />
            <InputField style={{ top: '325px' }} />
            <Label style={{ top: '220px' }}>Username:</Label>
            <Label style={{ top: '296px' }}>Password:</Label>
            <LoginButtonContainer>
                <LoginButton>
                    <ButtonText>Login</ButtonText>
                </LoginButton>
            </LoginButtonContainer>
            <Logo>DaonTech</Logo>
        </Container>
    );
}
