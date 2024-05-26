import styled, { keyframes, css } from 'styled-components';

// 애니메이션 정의
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: ${(props) => props.height || '80vh'};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    ${(props) =>
        props.animate &&
        css`
            animation: ${fadeIn} ${(props) => props.duration || '2s'} ease-in-out;
        `}
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    ${(props) =>
        props.animate &&
        css`
            animation: ${fadeIn} ${(props) => props.duration || '2s'} ease-in-out;
        `}
`;

export const TextContainer = styled.div`
    position: relative;
    z-index: 3;
    text-align: center;
    color: #fff;
    padding-top: 80px;
    ${(props) =>
        props.animate &&
        css`
            animation: ${fadeIn} ${(props) => props.duration || '2s'} ease-in-out;
        `}
`;

export const LogoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    padding: 20px 20px 20px; /* 패딩을 60px 20px 20px으로 변경하여 아래로 40px 만큼 내림 */
    position: relative;
    ${(props) =>
        props.animate &&
        css`
            animation: ${fadeIn} ${(props) => props.duration || '2s'} ease-in-out;
        `}
`;

export const Line = styled.div`
    position: absolute;
    top: -3px;
    left: -3px;
    width: 30px;
    height: 30px;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    ${(props) =>
        props.animate &&
        css`
            animation: ${fadeIn} ${(props) => props.duration || '2s'} ease-in-out;
        `}
`;

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 150;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    ${(props) =>
        props.animate &&
        css`
            animation: ${fadeIn} ${(props) => props.duration || '2s'} ease-in-out;
        `}
    & strong {
        font-weight: 700;
    }
`;
