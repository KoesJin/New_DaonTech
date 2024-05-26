import React from 'react';
import CarbonNanoTubePageComponent from '../../Component/CarbonNanoTubePageCoponent';
import Hero from '../../Component/HeroComponent';
import techbackground from '../../img/tech-background.png';

export default function CarbonNanoTubePage() {
    return (
        <>
            <Hero
                title={
                    <>
                        <h3>제품소개</h3>
                    </>
                }
                backgroundImage={techbackground}
                showLogoBox={false}
                height="65vh"
                animateBackground={false} // 배경 이미지 애니메이션 비활성화
                animateText={true} // 텍스트 애니메이션 활성화
                animationDuration="1s" // 텍스트 애니메이션 지속 시간 설정
            />
            <CarbonNanoTubePageComponent />
        </>
    );
}
