import styled from 'styled-components';

export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4b15f7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    `;