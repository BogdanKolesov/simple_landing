import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
        width: 80%;
    }
`