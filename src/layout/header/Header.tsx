import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../components/menu/Menu';
import {Logo} from '../../components/logo/Logo';
import {Sidebar} from '../sidebar/Sidebar';

export const Header = () => {
    return (
        <StyledHeader>
            <Sidebar/>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-between;
`