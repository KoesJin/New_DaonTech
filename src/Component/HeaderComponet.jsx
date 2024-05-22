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
    return (
        <Container>
            <LogoSection>
                <img src={logoImage} style={{ height: '40px' }} alt="DaonTech 로고" />
                <Logo to="/">DaonTech</Logo>
            </LogoSection>
            <NavWrapper>
                <Nav>
                    <NavItem>
                        회사 소개
                        <DropdownMenu>
                            <li>
                                <StyledLink to="/greeting">인사말</StyledLink>
                            </li>
                            <li>
                                <StyledLink to="/waytocome">오시는길</StyledLink>
                            </li>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem>
                        제품 소개
                        <DropdownMenu>
                            <li>
                                <StyledLink to="/carbon">Carbon Nanotube 스마트 섬유</StyledLink>
                            </li>
                            <li>스마트팩토리 센서 및 부품</li>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem>
                        자료실
                        <DropdownMenu>
                            <li>Carbon Nanotube 스마트 섬유</li>
                            <li>스마트팩토리 센서</li>
                            <li>스마트팩토리 부품</li>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem>
                        커뮤니티
                        <DropdownMenu>
                            <li>Q&A</li>
                            <li>공지사항</li>
                            <li>자유게시판</li>
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
