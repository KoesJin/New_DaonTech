import styled from 'styled-components';

export const TopButtonContainer = styled.button`
    position: fixed;
    bottom: 120px;
    right: 80px;
    width: 60px;
    height: 60px;
    background-color: #4d4d4d;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.9)')};
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

    &:hover {
        background-color: #3a3a3a;
    }

    &:active {
        transform: scale(0.95);
    }
`;
