import React, { useEffect } from 'react';
import {
    Container,
    Title,
    MapContainer,
    InfoContainer,
    AddressContainer,
    Divider,
    TransportContainer,
    TransportTitle,
    TransportItem,
} from '../styled/WaytoComePageStyles';
import { FaMapMarkerAlt, FaBus, FaSubway } from 'react-icons/fa';

export default function WaytoComePage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=dbeba53ea1caf68373bca5fe4efbf270&autoload=false`;
        script.async = true;
        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const options = {
                    center: new window.kakao.maps.LatLng(37.30246, 126.8115),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(37.30246, 126.8115);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        };
        document.head.appendChild(script);
    }, []);

    return (
        <Container>
            <Title>오시는 길</Title>
            <MapContainer id="map" />
            <InfoContainer>
                <AddressContainer>
                    <FaMapMarkerAlt />
                    <span>경기도 안산시 단원구 원포공원1로 59 신명트윈타워 A동 5층</span>
                </AddressContainer>
                <Divider />
                <TransportContainer>
                    <TransportTitle>교통편</TransportTitle>
                    <TransportItem>
                        <FaBus />
                        <span> 버스 : 중앙역 2번 출구 승차 이마트 하차 후 도보 4분</span>
                    </TransportItem>
                    <TransportItem>
                        <FaSubway />
                        <span> 지하철 : 초지역 1번 출구 77,66 버스 탑승 그린빌17단지 하차 후 도보 14분</span>
                    </TransportItem>
                </TransportContainer>
            </InfoContainer>
        </Container>
    );
}
