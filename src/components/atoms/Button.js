import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#3b59f7' : '#0467fb')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.3 ease-out;
        background: ${({ primary }) => (primary ? '#0467fb' : '#3b59f7')};
    }
    @media screen and (max-width:960px){
        width: 100%;
    }
`