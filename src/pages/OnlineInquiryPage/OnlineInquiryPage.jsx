import React from 'react';
import Hero from '../../Component/HeroComponent';

import noticeBg from '../../img/notice.jpg'; // 새로운 배경 이미지
import OnlineInquiry from '../../Component/OnlineInquiryComponent';

export default function OnlineInquiryPage() {
    return (
        <>
            <Hero
                title={
                    <>
                        <h3>고객지원</h3>
                    </>
                }
                backgroundImage={noticeBg}
                showLogoBox={false}
                height="65vh"
                animateBackground={false} // 배경 이미지 애니메이션 비활성화
                animateText={true} // 텍스트 애니메이션 활성화
                animationDuration="1s" // 텍스트 애니메이션 지속 시간 설정
            />
            <OnlineInquiry />
        </>
    );
}
