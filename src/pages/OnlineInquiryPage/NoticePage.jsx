import Hero from '../../Component/HeroComponent';
import NoticeComponent from '../../Component/NoticePageComponent';
import noticeBg from '../../img/notice.jpg';

export default function NoticePage() {
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
            <NoticeComponent />
        </>
    );
}
