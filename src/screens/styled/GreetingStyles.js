import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #2947a9;
    border-bottom: 2px solid #f9995d;
    display: inline-block;
    padding-bottom: 10px;
`;

export const Content = styled.p`
    font-size: 1.2em;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: left;
    color: #555;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const AddressContainer = styled.div`
    margin-top: 40px;
    text-align: left;
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
`;

export const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
        margin-right: 10px;
        color: #2947a9;
    }
`;

export const AddressText = styled.a`
    font-size: 1em;
    color: #555;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        color: #2947a9;
    }
`;
