import React, {FC} from 'react';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';

export const Menu:FC<{ menuItems: Array<string> }> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>

            {props.menuItems.map((item, index) => (
                <li>
                    <Link key={index} href="">{item}</Link>
                </li>
            ))}

            <li>
                <LangSwitcherButton>EN</LangSwitcherButton>
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

const LangSwitcherButton = styled.button`
cursor: pointer;
                color: ${theme.colors.fontText};
                font-weight: 600;
                font-size: 1rem;
                font-family: 'Fira Code', monospace;
                line-height: 1.3rem;
                position: relative;
                padding-right: 1rem;
                transition: all 0.2s;

    @media ${theme.media.tablet} {
        font-weight: 600;
        font-size: 2rem;
        line-height: 2.625rem;
    }

                &::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 22%;
                    width: 7px;
                    height: 7px;
                    border-right: 2px solid ${theme.colors.fontText};
                    border-bottom: 2px solid ${theme.colors.fontText};
                    transform: rotate(45deg);

                    @media ${theme.media.tablet} {
                        top: 35%;
                    }
                }

                &:hover {
                    color: ${theme.colors.fontTitle};

                    &::after {
                        border-right: 2px solid ${theme.colors.fontTitle};
                        border-bottom: 2px solid ${theme.colors.fontTitle};
                    }
                }
`