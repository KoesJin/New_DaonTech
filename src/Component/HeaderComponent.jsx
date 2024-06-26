import { useEffect } from 'react';
import {
    Container,
    NavWrapper,
    Nav,
    NavItem,
    SpecialNavItem,
    Logo,
    LogoSection,
    DropdownMenu,
    StyledLink,
} from '../styled/HeaderStyle';
import logoImage from '../img/BigLogo.png';

export default function Header() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const handleMenuClick = (e, path) => {
        if (path === '/qna' || path === '/free') {
            e.preventDefault();
            alert('준비중입니다.');
        } else {
            scrollToTop();
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const zoomLevel = Math.round(window.devicePixelRatio * 100);
            const header = document.querySelector('#header-container');
            if (zoomLevel >= 350) {
                header.style.display = 'none';
            } else {
                header.style.display = 'flex';
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container id="header-container">
            <LogoSection>
                <img src={logoImage} style={{ height: '40px' }} alt="DaonTech 로고" />
                <Logo to="/" onClick={scrollToTop}>
                    DaonTech
                </Logo>
            </LogoSection>
            <NavWrapper>
                <Nav>
                    <NavItem>
                        회사 소개
                        <DropdownMenu>
                            <li>
                                <StyledLink to="/greeting" onClick={scrollToTop}>
                                    인사말
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/waytocome" onClick={scrollToTop}>
                                    오시는길
                                </StyledLink>
                            </li>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem>
                        제품 소개
                        <DropdownMenu>
                            <li>
                                <StyledLink to="/carbon" onClick={scrollToTop}>
                                    Carbon Nanotube 스마트 섬유
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/smartfactory" onClick={scrollToTop}>
                                    스마트팩토리 센서 및 부품
                                </StyledLink>
                            </li>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem>
                        고객지원
                        <DropdownMenu>
                            <li>
                                <StyledLink to="/oninquiry" onClick={scrollToTop}>
                                    온라인 문의
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/notice" onClick={scrollToTop}>
                                    공지사항
                                </StyledLink>
                            </li>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem>
                        커뮤니티
                        <DropdownMenu>
                            <li>
                                <StyledLink to="/qna" onClick={(e) => handleMenuClick(e, '/qna')}>
                                    Q&A
                                </StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/free" onClick={(e) => handleMenuClick(e, '/free')}>
                                    자유게시판
                                </StyledLink>
                            </li>
                        </DropdownMenu>
                    </NavItem>
                    <SpecialNavItem href="http://daon.womsbrt.com/" target="_blank">
                        그룹웨어
                    </SpecialNavItem>
                </Nav>
            </NavWrapper>
        </Container>
    );
}
