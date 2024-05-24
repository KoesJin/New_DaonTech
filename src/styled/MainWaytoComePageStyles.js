import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GrayBg = styled.div`
    body {
        background-color: rgb(248, 248, 248);
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }
`;

export const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 120px 0;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #000;
    text-align: center;
    padding-bottom: 60px;
`;

export const MapAndInfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const InfoContainer = styled.div`
    width: 700px; /* 고정된 너비 */
    height: 400px; /* 고정된 높이 */
    background-color: #464850;
    color: white;
    padding: 40px;
    border-radius: 10px 0 0 10px; /* 왼쪽 상단과 하단의 테두리만 둥글게 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    @media (max-width: 1440px) {
        width: 600px;
        height: 350px;
        padding: 30px;
    }

    @media (max-width: 1200px) {
        width: 500px;
        height: 300px;
        padding: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        border-radius: 10px 10px 0 0; /* 상단만 둥글게 */
        padding: 20px;
    }
`;

export const MapContainer = styled.div`
    width: 700px; /* 고정된 너비 */
    height: 400px; /* 고정된 높이 */
    border-radius: 0 10px 10px 0; /* 오른쪽 상단과 하단의 테두리만 둥글게 */
    overflow: hidden;

    @media (max-width: 1440px) {
        width: 600px;
        height: 350px;
    }

    @media (max-width: 1200px) {
        width: 500px;
        height: 300px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 50vh;
        border-radius: 0 0 10px 10px; /* 하단만 둥글게 */
    }
`;

export const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 10px;

    svg {
        margin-right: 10px;
        color: #e74c3c;
    }

    @media (max-width: 1200px) {
        font-size: 1rem; /* 작은 화면에서는 폰트 크기 조정 */
    }
`;

export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 10px;

    svg {
        margin-right: 10px;
        color: #ecf0f1;
    }

    @media (max-width: 1200px) {
        font-size: 1rem; /* 작은 화면에서는 폰트 크기 조정 */
    }
`;

export const ButtonWrapper = styled.div`
    text-align: center;
`;

export const Button = styled(Link)`
    padding: 10px 30px;
    color: white;
    border: 2px solid white;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;

    &:hover {
        background-color: #2980b9;
    }

    &::after {
        content: ' +';
        margin-left: 10px;
    }

    @media (max-width: 1200px) {
        font-size: 1rem; /* 작은 화면에서는 폰트 크기 조정 */
        padding: 10px 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
        font-size: 1.2rem;
    }
`;
