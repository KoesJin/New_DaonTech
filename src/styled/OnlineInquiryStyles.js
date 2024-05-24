import styled from 'styled-components';

export const Container = styled.div`
    width: 70vw;
    margin: 0 auto;
    padding: 80px 80px 50px 80px;
    background-color: #fff;
`;

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 1; /* 배경 이미지 위에 내용이 표시되도록 함 */
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #000;
    text-align: left;
    margin-bottom: 10px;
`;

export const SubTitle = styled.p`
    font-size: 1.3rem;
    padding-bottom: 60px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
`;

export const TextArea = styled.textarea`
    padding: 10px 10px 150px 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    resize: vertical;
`;

export const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
`;

export const PrivacyPolicy = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #000; /* 검은색 글씨 */
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    width: 130px;
    height: 40px;
    align-self: center; /* 가운데 배치 */

    &:hover {
        background-color: #555;
    }
`;

export const PolicyButton = styled.button`
    margin-left: 10px;
    background: none;
    border: none;
    color: ${(props) => (props.isPolicyVisible ? 'black' : 'blue')};
    cursor: pointer;
    text-decoration: ${(props) => (props.isPolicyVisible ? 'none' : 'underline')};
`;
