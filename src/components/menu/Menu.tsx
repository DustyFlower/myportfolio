import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <Link href="">home</Link>
                </li>
                <li>
                    <Link href="">works</Link>
                </li>
                <li>
                    <Link href="">about-me</Link>
                </li>
                <li>
                    <Link href="">contacts</Link>
                </li>
                <li>
                    <button>EN</button>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 2rem;

        li {
            button {
                cursor: pointer;
                color: ${theme.colors.fontText};
                font-weight: 600;
                font-size: 1rem;
                font-family: 'Fira Code', monospace;
                line-height: 1.3rem;
                position: relative;
                padding-right: 1rem;
                transition: all 0.2s;

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
                }

                &:hover {
                    color: ${theme.colors.fontTitle};

                    &::after {
                        border-right: 2px solid ${theme.colors.fontTitle};
                        border-bottom: 2px solid ${theme.colors.fontTitle};
                    }
                }
            }
        }
    }
`
const Link = styled.a`
    font-weight: 400;
    color: ${theme.colors.fontText};
    font-size: 1rem;
    line-height: 1.3rem;
    transition: all 0.2s;
    
    &::before {
        content: '#';
        color: ${theme.colors.accent};
    }
    
    &:hover {
        color: ${theme.colors.fontTitle};
        font-weight: 500;
    }
`