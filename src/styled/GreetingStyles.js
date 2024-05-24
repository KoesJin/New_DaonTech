import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding: 80px 80px 50px 80px;
    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #000;
    text-align: left;
    padding-bottom: 50px;
`;

export const GreetingContent = styled.div`
    padding: 20px;
    margin-bottom: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 20px;
`;

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
        margin-right: 10px;
        color: #e74c3c;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 20px;
    }
`;

export const AddressText = styled.div`
    font-size: 1rem;
    color: #555;
    text-decoration: none;

    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;
