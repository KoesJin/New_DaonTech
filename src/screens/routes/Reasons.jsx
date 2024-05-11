import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100vw;
    background: #fff;
`;

const Title = styled.p`
    margin-top: 60px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #292e3d;
`;

const ExamplesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 60px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 292px;
    gap: 18px;
    padding: 20px 20px 40px;
    border-radius: 4px;
    background: #fff;
    border: 1.4px solid #e0e3eb;
    margin: 0 30px;
`;

const CardOne = styled(Card)`
    /* CardOne styles */
`;

const CardTwo = styled(Card)`
    /* CardTwo styles */
`;

const CardThree = styled(Card)`
    /* CardThree styles */
`;

const CardTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #3d445c;
`;

const CardContent = styled.p`
    width: 254px;
    font-size: 16px;
    text-align: left;
    color: #858ead;
`;

const SvgIcon = styled.svg`
    flex-grow: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    position: relative;
`;

export default function Reasons() {
    return (
        <MainContainer>
            <Title>Our Reputation</Title>
            <ExamplesContainer>
                <CardOne>
                    <SvgIcon viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M35 13.3333C35.884 13.3333 36.7319 13.6845 37.357 14.3096C37.9821 14.9348 38.3333 15.7826 38.3333 16.6667V23.3333C38.3333 24.2174 37.9821 25.0652 37.357 25.6904C36.7319 26.3155 35.884 26.6667 35 26.6667H33.23C32.8236 29.8888 31.2554 32.852 28.8195 35C26.3837 37.148 23.2476 38.3333 20 38.3333V35C22.6521 35 25.1957 33.9464 27.071 32.0711C28.9464 30.1957 30 27.6522 30 25V15C30 12.3478 28.9464 9.80429 27.071 7.92893C25.1957 6.05357 22.6521 5 20 5C17.3478 5 14.8043 6.05357 12.9289 7.92893C11.0535 9.80429 9.99996 12.3478 9.99996 15V26.6667H4.99996C4.1159 26.6667 3.26806 26.3155 2.64294 25.6904C2.01782 25.0652 1.66663 24.2174 1.66663 23.3333V16.6667C1.66663 15.7826 2.01782 14.9348 2.64294 14.3096C3.26806 13.6845 4.1159 13.3333 4.99996 13.3333H6.76996C7.17668 10.1115 8.74509 7.14878 11.1809 5.00112C13.6167 2.85346 16.7525 1.66846 20 1.66846C23.2474 1.66846 26.3832 2.85346 28.819 5.00112C31.2548 7.14878 32.8232 10.1115 33.23 13.3333H35ZM12.9333 26.3083L14.7 23.4817C16.2884 24.4767 18.1256 25.003 20 25C21.8743 25.003 23.7115 24.4767 25.3 23.4817L27.0666 26.3083C24.9487 27.6352 22.4992 28.3372 20 28.3333C17.5007 28.3372 15.0512 27.6352 12.9333 26.3083Z"
                            fill="#F9995D"
                        />
                    </SvgIcon>
                    <CardTitle>Best Services</CardTitle>
                    <CardContent>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</CardContent>
                </CardOne>
                <CardTwo>
                    <SvgIcon viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M35 13.3333C35.884 13.3333 36.7319 13.6845 37.357 14.3096C37.9821 14.9348 38.3333 15.7826 38.3333 16.6667V23.3333C38.3333 24.2174 37.9821 25.0652 37.357 25.6904C36.7319 26.3155 35.884 26.6667 35 26.6667H33.23C32.8236 29.8888 31.2554 32.852 28.8195 35C26.3837 37.148 23.2476 38.3333 20 38.3333V35C22.6521 35 25.1957 33.9464 27.071 32.0711C28.9464 30.1957 30 27.6522 30 25V15C30 12.3478 28.9464 9.80429 27.071 7.92893C25.1957 6.05357 22.6521 5 20 5C17.3478 5 14.8043 6.05357 12.9289 7.92893C11.0535 9.80429 9.99996 12.3478 9.99996 15V26.6667H4.99996C4.1159 26.6667 3.26806 26.3155 2.64294 25.6904C2.01782 25.0652 1.66663 24.2174 1.66663 23.3333V16.6667C1.66663 15.7826 2.01782 14.9348 2.64294 14.3096C3.26806 13.6845 4.1159 13.3333 4.99996 13.3333H6.76996C7.17668 10.1115 8.74509 7.14878 11.1809 5.00112C13.6167 2.85346 16.7525 1.66846 20 1.66846C23.2474 1.66846 26.3832 2.85346 28.819 5.00112C31.2548 7.14878 32.8232 10.1115 33.23 13.3333H35ZM12.9333 26.3083L14.7 23.4817C16.2884 24.4767 18.1256 25.003 20 25C21.8743 25.003 23.7115 24.4767 25.3 23.4817L27.0666 26.3083C24.9487 27.6352 22.4992 28.3372 20 28.3333C17.5007 28.3372 15.0512 27.6352 12.9333 26.3083Z"
                            fill="#F9995D"
                        />
                    </SvgIcon>
                    <CardTitle>Best Teams</CardTitle>
                    <CardContent>Cursus semper tellus volutpat aliquet lacus.</CardContent>
                </CardTwo>
                <CardThree>
                    <SvgIcon viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M36.3167 28.4333L27.0667 19.1833L29.6833 16.5667L23.4333 10.3167L20.8167 12.9333L11.5667 3.68335L3.68335 11.5667L12.9333 20.8167L5.00002 28.75V35H11.25L19.1833 27.0667L28.4333 36.3167L36.3167 28.4333ZM15.3 18.45L8.40002 11.5667L11.5667 8.40002L13.6833 10.5167L11.7 12.5L14.05 14.85L16.0333 12.8667L18.45 15.2833L15.3 18.45ZM21.55 24.7L24.7167 21.5333L27.1334 23.95L25.15 25.9333L27.5 28.2833L29.4834 26.3L31.6 28.4167L28.4333 31.5834L21.55 24.7ZM25.2217 8.53835L29.4517 4.30668L35.6983 10.5533L31.4684 14.785L25.2217 8.53835Z"
                            fill="#F9995D"
                        ></path>
                    </SvgIcon>
                    <CardTitle>Best Designs</CardTitle>
                    <CardContent>Ultricies at ipsum nunc, tristique nam lectus.</CardContent>
                </CardThree>
            </ExamplesContainer>
        </MainContainer>
    );
}
