import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon';
import {theme} from '../../styles/Theme';

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <Icon iconId={'vertical-line'} width={'2px'} height={'191px'} viewBox={'0 0 2 191'}/>
            <SidebarList>
                <SidebarListItem>
                    <IconLink href="#"><Icon iconId={'git'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </SidebarListItem>
                <SidebarListItem>
                    <IconLink href="#"><Icon iconId={'linkedin'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </SidebarListItem>
                <SidebarListItem>
                    <IconLink href="#"><Icon iconId={'telegram'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </SidebarListItem>
            </SidebarList>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin-left: 1.1rem;
`

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
`

const SidebarListItem = styled.li`
    padding: 0;
    margin: 0;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    color: ${theme.colors.fontText};
    transition: all 0.2s;
    
    &:hover {
        color: ${theme.colors.fontTitle};
        transform: scale(1.1);
    }
`