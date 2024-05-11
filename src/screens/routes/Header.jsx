import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw; /* 뷰포트 너비에 맞춤 */
    height: 80px;
    position: relative;
    overflow: hidden;
    background: #fff;
`;

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    right: 30px;
    top: 30px;
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

const Logo = styled.span`
    position: absolute;
    left: 30px;
    top: 25px;
    font-size: 33px;
    font-weight: 1000;
    font-style: italic;
    text-align: left;
    color: #2947a9;
`;

function Header() {
    return (
        <Container>
            <Nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About Us</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/login">Login</NavItem>
                <SpecialNavItem href="http://daon.womsbrt.com/" target="_blank">
                    GroupWare
                </SpecialNavItem>
            </Nav>
            <Logo>DaonTech</Logo>
        </Container>
    );
}

export default Header;
