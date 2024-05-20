import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 80px;
    position: relative;
    overflow: visible; /* Ensure dropdowns are visible */
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    z-index: 1000; /* Ensure the header is above other elements */
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
`;

export const NavWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    position: relative; /* For positioning the dropdown menu */
`;

export const NavItem = styled.div`
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 18px;
    text-align: left;
    color: #14171f;
    text-decoration: none;
    cursor: pointer;
    margin-right: 80px;

    &:hover > ul {
        display: block;
    }
`;

export const SpecialNavItem = styled.a`
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 18px;
    text-align: left;
    color: #f9995d;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover > ul {
        display: block;
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
`;
