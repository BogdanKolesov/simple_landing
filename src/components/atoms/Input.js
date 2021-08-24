import styled from 'styled-components';

export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: 1px solid #fff;
    font-size: 16px;

    &::placeholder{
        color: #242424;
    }

    @media screen and (max-width: 820px){
        width: 100%;
        margin: 0 0 16px 0;
    }
`;