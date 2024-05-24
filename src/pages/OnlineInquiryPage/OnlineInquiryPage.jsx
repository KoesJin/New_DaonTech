import React from 'react';
import Hero from '../../Component/HeroComponent';
import OnlineInquiry from '../../Component/OnlineInquiryPage';
import onlineInquiryBg from '../../img/inquiry-background.png'; // 새로운 배경 이미지

export default function OnlineInquiryPage() {
    return (
        <>
            <Hero
                title={
                    <>
                        <h2>온라인 문의</h2>
                    </>
                }
                showLogoBox={false}
                backgroundImage={onlineInquiryBg}
                height="65vh"
            />
            <OnlineInquiry />
        </>
    );
}
