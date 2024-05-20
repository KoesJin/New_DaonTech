import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    background: #f6f8f7;
`;

export const PageTitle = styled.p`
    padding-top: 60px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    color: #292e3d;
`;

export const ServiceCardsContainer1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const ServiceCardsContainer2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const ServiceCard = styled.div`
    margin: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 271px;
    height: 181px;
    gap: 20px;
    padding: 20px;
    border-radius: 4px;
    background: ${({ background }) => background || '#fff'};
    box-shadow: 0px 0px 37px -2px rgba(17, 24, 39, 0.05);
`;

export const CardTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: ${({ color }) => color || '#2947a9'};
`;

export const CardDivider = styled.div`
    width: 60px;
    height: 2px;
    background: #e0e3eb;
`;

export const Position = styled.div``;
