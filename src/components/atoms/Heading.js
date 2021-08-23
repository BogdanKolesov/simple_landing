import styled from 'styled-components';

export const Heading = styled.h2`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;