import styled from 'styled-components';

export const Container = styled.div`
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px 50px 20px;
    background-color: #fff;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #000;
    text-align: left;
    margin-bottom: 10px;
`;

export const TableContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table-layout: fixed; /* 고정된 테이블 레이아웃 */
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableHeader = styled.th`
    padding: 12px;
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    font-weight: bold;
    text-align: center;
`;

export const TableData = styled.td`
    padding: 20px; /* 높이를 넓히기 위해 패딩을 늘림 */
    border: 1px solid #ddd;
    text-align: center;
    height: 20vh; /* 게시물 공간 높이 추가 */
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const SearchSelect = styled.select`
    width: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
`;

export const SearchInput = styled.input`
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    margin-left: 10px;
`;

export const SearchButton = styled.button`
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;
