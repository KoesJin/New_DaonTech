import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    padding: 80px 80px 30px 80px;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #000;
    text-align: left;
    margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
    font-size: 1.3rem;
    padding-bottom: 60px;
`;

export const Section = styled.div`
    margin-bottom: 60px;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: #000;
    text-align: left;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const FeatureList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FeatureItem = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const FeatureIcon = styled.div`
    font-size: 1.5rem;
    margin-right: 10px;
`;

export const FeatureTitle = styled.h3`
    font-size: 1.25rem;
    color: #000;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const FeatureDescription = styled.p`
    font-size: 1rem;
    color: #333;
    margin: 0;
`;
