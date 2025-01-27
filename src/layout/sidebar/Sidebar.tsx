import React from 'react';
import {Icon} from '../../components/icon/Icon';
import {IconLink} from '../../components/IconLink';
import {S} from './Sidebar_Styles'

export const Sidebar = () => {
    return (
        <S.Sidebar>
            <Icon iconId={'vertical-line'} width={'2px'} height={'191px'} viewBox={'0 0 2 191'}/>
            <S.SidebarList>
                <S.SidebarListItem>
                    <IconLink href="https://github.com/DustyFlower"><Icon iconId={'git'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </S.SidebarListItem>
                <S.SidebarListItem>
                    <IconLink href="https://www.linkedin.com/in/natalia-lukasheva/"><Icon iconId={'linkedin'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </S.SidebarListItem>
                <S.SidebarListItem>
                    <IconLink href="https://t.me/dustyflower/"><Icon iconId={'telegram'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/></IconLink>
                </S.SidebarListItem>
            </S.SidebarList>
        </S.Sidebar>
    );
};

