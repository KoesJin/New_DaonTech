import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    position: fixed; /* fixed로 변경하여 스크롤 고정 */
    top: 0; /* 상단에 고정 */
    left: 0;
    overflow: visible;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    z-index: 1000;
    border-bottom: 2px solid #e0e3eb;
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 0 40px; /* 양쪽 여백을 40px로 설정 */
`;

export const NavItem = styled.div`
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    color: #14171f;
    text-decoration: none;
    cursor: pointer;
    margin: 0 20px; /* NavItem 간의 간격을 40px로 설정 (좌우 20px씩) */

    &:hover > ul {
        display: block;
        animation: fadeIn 0.3s ease-in-out; /* 애니메이션 추가 */
    }
`;

export const SpecialNavItem = styled.a`
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    color: #f9995d;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    margin: 0 20px; /* SpecialNavItem 간의 간격을 40px로 설정 (좌우 20px씩) */

    &:hover > ul {
        display: block;
        animation: fadeIn 0.3s ease-in-out; /* 애니메이션 추가 */
    }
`;

export const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: 1000;
    font-style: italic;
    text-align: left;
    color: #2947a9;
    text-decoration: none;
    margin-left: 8px;
`;

export const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;

export const DropdownMenu = styled.ul`
    display: none;
    position: absolute;
    top: 100%; /* Position below the NavItem */
    left: 0;
    background: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    list-style: none;
    z-index: 10000; /* Ensure dropdown is above other elements */

    & > li {
        padding: 8px 16px;
        color: #14171f;
        white-space: nowrap;

        &:hover {
            background-color: #f1f1f1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
