import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding: 80px 80px 30px 80px;
    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    color: #2947a9;
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
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    text-align: left;
    font-size: 1.2em;
    line-height: 1.6;
    color: #555;
`;

export const AddressContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 20px;

    svg {
        margin-right: 10px;
        color: #e74c3c;
    }
`;

export const Divider = styled.div`
    width: 1px;
    height: 50px;
    background-color: #ccc;
    margin: 0 20px;
`;

export const TransportContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const TransportTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
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
