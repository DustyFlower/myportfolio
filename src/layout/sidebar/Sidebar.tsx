import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon';

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <VerticalLine/>
            <ul>
                <li><a href=""><Icon iconId={'git'}/></a></li>
                <li><a href=""><Icon iconId={'linkedin'}/></a></li>
                <li><a href=""><Icon iconId={'telegram'}/></a></li>
            </ul>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const VerticalLine = styled.div`
    border-left: 2px solid #000; /* Параметры линии */
    height: 100px;
`