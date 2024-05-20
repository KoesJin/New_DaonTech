import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100vw;
    background: #fff;
`;

export const Title = styled.p`
    margin-top: 60px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #292e3d;
`;

export const ExamplesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 60px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 292px;
    gap: 18px;
    padding: 20px 20px 40px;
    border-radius: 4px;
    background: #fff;
    border: 1.4px solid #e0e3eb;
    margin: 0 30px;
`;

export const CardOne = styled(Card)`
    /* CardOne styles */
`;

export const CardTwo = styled(Card)`
    /* CardTwo styles */
`;

export const CardThree = styled(Card)`
    /* CardThree styles */
`;

export const CardTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #3d445c;
`;

export const CardContent = styled.p`
    width: 254px;
    font-size: 16px;
    text-align: left;
    color: #858ead;
`;

export const SvgIcon = styled.svg`
    flex-grow: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    position: relative;
`;
