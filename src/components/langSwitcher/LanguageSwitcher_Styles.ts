import {theme} from '../../styles/Theme';
import styled, {css} from 'styled-components';

const LangSelectorButton = styled.button<{ isOpen: boolean }>`
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
            right: -5px;
            width: 10px;
            height: 10px;
            border-right: 3px solid ${theme.colors.fontText};
            border-bottom: 3px solid ${theme.colors.fontText};
        }

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            top: 40%;
            transform: rotate(225deg);

            &::after {
                border-right: 2px solid ${theme.colors.fontText};
                border-bottom: 2px solid ${theme.colors.fontText};
            }
        `}
    }

    &:hover {
        color: ${theme.colors.fontTitle};

        &::after {
            border-right-color: ${theme.colors.fontTitle};
            border-bottom-color: ${theme.colors.fontTitle};
        }
    }
`

const LangSelectorPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    border: 1px solid ${theme.colors.fontText};
    margin-top: 4px;
    display: none;

    @media ${theme.media.tablet} {
        margin-left: 2px;
        width: 60px;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
    `}
`

const LangList = styled.ul`
    display: flex;
    width: 100%;
    align-items: center !important;
    flex-direction: column;
    gap: 0.5rem !important;
    padding: 0.5rem;

    @media ${theme.media.tablet} {
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2.625rem;
    }
`

const LangItem = styled.li`
    transition: all 0.2s;

    &:hover {
        color: ${theme.colors.fontTitle};
        cursor: pointer;
    }
`

export const S = {
    LangSelectorButton,
    LangSelectorPopup,
    LangList,
    LangItem
}