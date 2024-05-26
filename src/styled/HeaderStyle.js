import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: visible;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    z-index: 1000;
    border-bottom: 2px solid #e0e3eb;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 0 20px;
    }
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: 10px;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 0 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding: 0;
    }
`;

export const NavItem = styled.div`
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    color: #14171f;
    text-decoration: none;
    cursor: pointer;
    margin: 0 20px;

    &:hover > ul {
        display: block;
        animation: fadeIn 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        margin: 0;
        font-size: 1rem;
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
    margin: 0 20px;

    &:hover > ul {
        display: block;
        animation: fadeIn 0.3s ease-in-out;
    }

    @media (max-width: 768px) {
        margin: 0;
        font-size: 1rem;
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

    @media (max-width: 768px) {
        font-size: 1.2rem;
        margin-left: 0;
    }
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
    top: 100%;
    left: 0;
    background: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    list-style: none;
    z-index: 10000;

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
