import styled from 'styled-components';
import backgroundImage from '../img/SectionBg.png';

export const Container = styled.div`
    width: 100vw;
    height: 70vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 20px;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 배경을 어둡게 하기 위한 반투명 오버레이 */
    z-index: 1; /* 오버레이가 배경 위에 위치하도록 설정 */
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2; /* 텍스트가 오버레이 위에 위치하도록 설정 */
`;

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2; /* 텍스트가 오버레이 위에 위치하도록 설정 */
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1000px;
    z-index: 2; /* 텍스트가 오버레이 위에 위치하도록 설정 */
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
`;

export const Highlight = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2; /* 텍스트가 오버레이 위에 위치하도록 설정 */
`;

export const Description = styled.p`
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2; /* 텍스트가 오버레이 위에 위치하도록 설정 */
`;
