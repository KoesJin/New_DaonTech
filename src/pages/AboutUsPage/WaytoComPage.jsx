import Hero from '../../Component/HeroComponent';
import WaytoComePageComponent from '../../Component/WaytoComeComponent';
import daonBg from '../../img/DaonBg.jpg';

export default function WaytoCome() {
    return (
        <>
            <Hero
                title={
                    <>
                        <h3>회사소개</h3>
                    </>
                }
                backgroundImage={daonBg}
                showLogoBox={false}
                height="65vh"
                animateBackground={false} // 배경 이미지 애니메이션 비활성화
                animateText={true} // 텍스트 애니메이션 활성화
                animationDuration="1s" // 텍스트 애니메이션 지속 시간 설정
            />
            <WaytoComePageComponent />
        </>
    );
}
