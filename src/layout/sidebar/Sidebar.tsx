import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../components/icon/Icon';

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <Icon iconId={'vertical-line'} width={'2px'} height={'191px'} viewBox={'0 0 2 191'}/>
            <StyledList>
                <StyledListItem>
                    <IconLink href="#"><Icon iconId={'git'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </StyledListItem>
                <StyledListItem>
                    <IconLink href="#"><Icon iconId={'linkedin'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </StyledListItem>
                <StyledListItem>
                    <IconLink href="#"><Icon iconId={'telegram'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </StyledListItem>
            </StyledList>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 0;
    margin-left: 17px;
`

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`

const StyledListItem = styled.li`
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
`