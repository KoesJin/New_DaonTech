import React, { useState } from 'react';
import {
    Container,
    Title,
    TableContainer,
    Table,
    TableRow,
    TableHeader,
    TableData,
    SearchContainer,
    SearchSelect,
    SearchInput,
    SearchButton,
} from '../styled/NoticePageStyles';

export default function NoticePage() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchType, setSearchType] = useState('title');

    const handleSearchKeywordChange = (e) => {
        setSearchKeyword(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearch = () => {
        // 검색 로직 구현
        console.log(`Searching for ${searchKeyword} in ${searchType}`);
    };

    return (
        <Container>
            <Title>공지사항</Title>
            <TableContainer>
                <Table>
                    <thead>
                        <TableRow>
                            <TableHeader>번호</TableHeader>
                            <TableHeader>제목</TableHeader>
                            <TableHeader>글쓴이</TableHeader>
                            <TableHeader>날짜</TableHeader>
                            <TableHeader>조회</TableHeader>
                        </TableRow>
                    </thead>
                    <tbody>
                        <TableRow>
                            <TableData colSpan="5">게시물이 없습니다.</TableData>
                        </TableRow>
                    </tbody>
                </Table>
            </TableContainer>
            <SearchContainer>
                <SearchSelect value={searchType} onChange={handleSearchTypeChange}>
                    <option value="title">제목</option>
                    <option value="content">내용</option>
                    <option value="titleContent">제목 + 내용</option>
                </SearchSelect>
                <SearchInput
                    type="text"
                    placeholder="검색어"
                    value={searchKeyword}
                    onChange={handleSearchKeywordChange}
                />
                <SearchButton onClick={handleSearch}>검색</SearchButton>
            </SearchContainer>
        </Container>
    );
}
