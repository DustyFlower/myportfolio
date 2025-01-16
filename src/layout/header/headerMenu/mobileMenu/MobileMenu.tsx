import styled, {css} from 'styled-components';
import React, {FC} from 'react';
import {theme} from '../../../../styles/Theme';
import {Logo} from '../../../../components/logo/Logo';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {Icon} from '../../../../components/icon/Icon';
import {Menu} from '../menu/Menu';
import {IconLink} from '../../../../components/IconLink';

export const MobileMenu: FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
                <BurgerButton isOpen={false}>
                    <span></span>
                </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                    <MobileMenuLogo/>
                <Menu menuItems={props.menuItems}/>
                <FlexWrapper gap={'8px'}>
                    <IconLink href={'#'}>
                        <Icon iconId={'git'} width={'64'} height={'64'} viewBox={'0 0 32 32'}/>
                    </IconLink>
                    <IconLink href={'#'}>
                        <Icon iconId={'telegram'} width={'64'} height={'64'} viewBox={'0 0 32 32'}/>
                    </IconLink>
                    <IconLink href={'#'}>
                        <Icon iconId={'linkedin'} width={'64'} height={'64'} viewBox={'0 0 32 32'}/>
                    </IconLink>
                </FlexWrapper>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
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