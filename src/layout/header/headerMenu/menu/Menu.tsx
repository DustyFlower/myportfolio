import React, {FC} from 'react';
import {LanguageSwitcher} from '../../../../components/langSwitcher/LanguageSwitcher';
import {S} from '../HeaderMenu_Styles'

export type MenuItem = {
    title: string,
    href: string,
}

type MenuProps = {
    menuItems: MenuItem[];
    onNavClick?: () => void;
    onLangBtn?: () => void;
}

export const Menu: FC<MenuProps> = ({menuItems, onNavClick, onLangBtn}) => {

    const handleNavClick = () => {
        if (onNavClick) {
            onNavClick();
        }
    };

    return (
        <ul>

            {menuItems.map((item, index) => (
                <li key={index}>
                    <S.NavLink activeClass={'active'}
                               to={item.href}
                               smooth={true}
                               offset={-35}
                               spy={true}
                               onClick={handleNavClick}
                    >
                        {item.title}
                    </S.NavLink>
                </li>
            ))}

            <li>
                <LanguageSwitcher onLangBtn={onLangBtn}/>
            </li>
        </ul>
    );
};