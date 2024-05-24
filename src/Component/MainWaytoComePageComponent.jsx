import React, { useEffect } from 'react';
import {
    Container,
    Title,
    MapAndInfoWrapper,
    MapContainer,
    InfoContainer,
    AddressContainer,
    ContactItem,
    Button,
    ButtonWrapper,
    GrayBg,
} from '../styled/MainWaytoComePageStyles';
import { FaMapMarkerAlt, FaPhone, FaFax } from 'react-icons/fa';

export default function MainWaytoComePageComponent() {
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

                // InfoWindow를 추가하여 주소를 표시하고 클릭 이벤트 추가
                const iwContent =
                    '<div style="padding:5px; font-size:14px; cursor: pointer;" onmouseover="this.style.textDecoration=\'underline\';" onmouseout="this.style.textDecoration=\'none\';" onclick="window.open(\'https://map.kakao.com/link/map/37.30246,126.8115\', \'_blank\');">경기도 안산시 단원구 원포공원1로 59 신명트윈타워 A동 5층</div>';
                const iwPosition = new window.kakao.maps.LatLng(37.30246, 126.8115);

                const infowindow = new window.kakao.maps.InfoWindow({
                    position: iwPosition,
                    content: iwContent,
                });

                infowindow.open(map, marker);

                // 마커 클릭 시 카카오 지도 페이지로 이동
                window.kakao.maps.event.addListener(marker, 'click', () => {
                    window.open('https://map.kakao.com/link/map/37.30246,126.8115', '_blank');
                });
            });
        };
        document.head.appendChild(script);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <GrayBg>
            <Container>
                <Title>오시는 길</Title>
                <MapAndInfoWrapper>
                    <InfoContainer>
                        <h1>LOCATION</h1>
                        <AddressContainer>
                            <FaMapMarkerAlt />
                            <span>경기도 안산시 단원구 원포공원1로 59 신명트윈타워 A동 5층</span>
                        </AddressContainer>
                        <ContactItem>
                            <FaPhone />
                            <span>031-487-9972</span>
                        </ContactItem>
                        <ContactItem>
                            <FaFax />
                            <span>FAX : 031-402-3079</span>
                        </ContactItem>
                        <ButtonWrapper>
                            <Button to="/oninquiry" onClick={scrollToTop}>
                                문의 바로가기
                            </Button>
                        </ButtonWrapper>
                    </InfoContainer>
                    <MapContainer id="map" />
                </MapAndInfoWrapper>
            </Container>
        </GrayBg>
    );
}
