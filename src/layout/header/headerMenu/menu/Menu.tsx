import React, {FC} from 'react';
import {LanguageSwitcher} from '../../../../components/langSwitcher/LanguageSwitcher';
import {S} from '../Header_Styles'

export type MenuItem = {
    title: string,
    href: string,
}

export const Menu: FC<{ menuItems:MenuItem[] }> = ({ menuItems}) => {
    return (
        <ul>

            {menuItems.map((item, index) => (
                <li key={index}>
                    <S.Link href={`#${item.href}`}>{item.title}</S.Link>
                </li>
            ))}

            <li>
                <LanguageSwitcher/>
            </li>
        </ul>
    );
};