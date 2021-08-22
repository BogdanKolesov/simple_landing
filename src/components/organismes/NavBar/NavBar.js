import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2 rem;
    position: sticky;
    top: 0;
    z-index: 999;
    &:hover{
        color: red;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, debitis!</p>
        </Nav>
    );
};

export default Navbar;