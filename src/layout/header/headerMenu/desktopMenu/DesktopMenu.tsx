import React, {FC} from 'react';
import {Menu, MenuItem} from '../menu/Menu';
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu:FC<{ menuItems: MenuItem[] }> = ({menuItems}) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems} />
        </S.DesktopMenu>
    );
};

