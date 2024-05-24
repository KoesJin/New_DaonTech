import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5vh 10vw;
    background-color: #f8f8f8;
`;

export const Card = styled(Link)`
    position: relative;
    width: 45%;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover img {
        transform: scale(1.1); /* 이미지 확대 */
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 20vh;
    display: block;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out; /* 부드러운 확대와 필터 전환 */
    filter: brightness(45%) opacity(0.8); /* 어둡고 투명하게 */
`;

export const CardTitle = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    z-index: 1; /* 글씨를 이미지 위에 표시 */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* 글씨에 그림자 추가 */
`;
