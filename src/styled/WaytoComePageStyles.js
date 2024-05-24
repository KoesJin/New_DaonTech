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

export const MapContainer = styled.div`
    width: 100%;
    height: 550px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    text-align: left;
    font-size: 1.3rem;
    line-height: 1.6;
    color: #555;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
        margin-right: 10px;
        color: #e74c3c;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 20px;
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 50px;
    background-color: #ccc;
    margin: 20px 0;

    @media (min-width: 768px) {
        margin: 0 20px;
    }
`;

export const TransportContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

export const TransportTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #333;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export const TransportItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
        margin-right: 10px;
        color: #f9995d;
    }
`;
