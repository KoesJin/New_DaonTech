import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 80px;
    position: relative;
    overflow: hidden;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between; // 양 끝에 요소를 배치
    padding: 0 50px; // 양쪽에 여백 추가
`;

const Nav = styled.div`
    display: flex;
    align-items: center; // flex-start에서 center로 변경
    gap: 50px;
`;

const NavItem = styled(Link)`
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 18px;
    text-align: left;
    color: #14171f;
    text-decoration: none;
    cursor: pointer;
    margin-left: 20px;
`;

const SpecialNavItem = styled.a`
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 18px;
    text-align: left;
    color: #f9995d;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`;

const Logo = styled(Link)`
    font-size: 33px;
    font-weight: 1000;
    font-style: italic;
    text-align: left;
    color: #2947a9;
    margin-left: 50px;
    text-decoration: none;
`;

function Header() {
    return (
        <Container>
            <Logo to="/">DaonTech</Logo>
            <Nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About Us</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <SpecialNavItem href="http://daon.womsbrt.com/" target="_blank">
                    GroupWare
                </SpecialNavItem>
            </Nav>
        </Container>
    );
}

export default Header;
