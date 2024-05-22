import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 157px;
    position: relative;
    overflow: hidden;
    background: rgb(46, 48, 50);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    box-sizing: border-box;
`;

export const LogoSection = styled.div`
    display: flex;
    align-items: center;
`;

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ContactInfo = styled.p`
    font-size: 1.1rem;
    color: whitesmoke;
    margin: 0;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const ContactLabel = styled.span`
    font-weight: bold;
    color: #000;
`;

export const LogoWhite = styled(Link)`
    font-size: 1.5rem;
    font-weight: 1000;
    font-style: italic;
    text-align: left;
    color: #fff;
    text-decoration: none;
    margin-left: 8px;
`;
