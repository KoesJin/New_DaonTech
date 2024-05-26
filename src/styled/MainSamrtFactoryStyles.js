import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GrayBg = styled.div`
    background-color: rgb(248, 248, 248);
    margin: 0;
    padding: 0;
`;

export const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;

export const MainContentWrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 추가된 부분 */
    align-items: flex-start; /* 추가된 부분 */
    padding-right: 20px;
    padding-top: 20px;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    padding-bottom: 20px;
`;

export const LinkStyled = styled(Link)`
    font-size: 1.2rem;
    color: #5f4b8b;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export const SideContent = styled.div`
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SideBox = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const SideTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const SideDescription = styled.p`
    font-size: 1.2rem;
    color: #333;
`;
