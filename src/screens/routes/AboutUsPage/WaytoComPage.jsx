import styled from 'styled-components';
import DaonWayImage from '../../img/DaonWay.png';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
`;

const Address = styled.div`
    margin-top: 40px;
    text-align: left;
    font-size: 1.2em;
    line-height: 1.6;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 10px;
`;

export default function WaytoComePage() {
    return (
        <Container>
            <Image src={DaonWayImage} alt="Daon Tech 위치" />
            <Address>
                주소: 경기도 안산시 단원구 원포공원1로 59 신명트윈타워 A동 5층
                <br />
                대표번호: 031-487-9972
                <br />
                팩스: 031-402-3079
            </Address>
        </Container>
    );
}
