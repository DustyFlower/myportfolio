import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {theme} from '../../../../styles/Theme';
import {LanguageSwitcher} from '../../../../components/langSwitcher/LanguageSwitcher';

export const Menu: FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>

            {props.menuItems.map((item, index) => (
                <li>
                    <Link key={index} href="">{item}</Link>
                </li>
            ))}

            <li>
                <LanguageSwitcher/>
            </li>
        </ul>
    );
};

const Link = styled.a`
    font-weight: 400;
    color: ${theme.colors.fontText};
    font-size: 1rem;
    line-height: 1.3rem;
    transition: all 0.2s;

    @media ${theme.media.tablet} {
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.625rem;
    }

    &::before {
        content: '#';
        color: ${theme.colors.accent};
    }

    &:hover {
        color: ${theme.colors.fontTitle};
        font-weight: 500;
    }
`