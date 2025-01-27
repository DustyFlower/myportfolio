import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Logo} from '../../../components/logo/Logo';

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 2rem;
    }
`

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

const MobileMenu = styled.nav`
`

const MobileMenuLogo = styled(Logo)`
    display: flex;
    width: 100%;

    position: fixed;
    top: 23px;
    left: 16px;
    z-index: 5;
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
    background-color: ${theme.colors.background};
    pointer-events: all;
    display: none;
    
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 95px 16px 36px;

    ul {
        display: flex;
        gap: 32px;
        flex-direction: column;
        align-items: flex-start;
    }
    
    ${FlexWrapper} {
        align-self: center;
    }
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -110px;
    right: -110px;
    width: 200px;
    height: 200px;
    z-index: 6;

    span {
        display: block;
        width: 15px;
        height: 2px;
        background-color: ${theme.colors.fontTitle};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            width: 24px;
            transform: rotate(45deg) translateY(-10px);
        `}
        &::before {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.fontTitle};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-90deg) translateY(0px);
            `}
        }
    }
}
`

export const S = {
    DesktopMenu,
    Link,
    MobileMenu,
    MobileMenuLogo,
    MobileMenuPopup,
    BurgerButton
}