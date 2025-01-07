import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon';
import {IconLink} from '../../components/IconLink';

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
    z-index: 999;
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
    line-height: 0;
`