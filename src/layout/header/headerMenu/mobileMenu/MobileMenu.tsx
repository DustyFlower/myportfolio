import React, {FC} from 'react';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {Icon} from '../../../../components/icon/Icon';
import {Menu, MenuItem} from '../menu/Menu';
import {IconLink} from '../../../../components/IconLink';
import {S} from '../HeaderMenu_Styles'

export const MobileMenu: FC<{ menuItems: MenuItem[] }> = ({menuItems}) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    };
    const handleCloseMenu = () => {
        setMenuIsOpen(false);
    };

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen}>
                <S.MobileMenuLogo/>
                <Menu menuItems={menuItems} onNavClick={handleCloseMenu} onLangBtn={handleCloseMenu}/>
                <FlexWrapper gap={'8px'}>
                    <IconLink href={'https://github.com/DustyFlower/'}>
                        <Icon iconId={'git'} width={'64'} height={'64'} viewBox={'0 0 32 32'}/>
                    </IconLink>
                    <IconLink href={'https://t.me/dustyflower/'}>
                        <Icon iconId={'telegram'} width={'64'} height={'64'} viewBox={'0 0 32 32'}/>
                    </IconLink>
                    <IconLink href={'https://t.me/dustyflower/'}>
                        <Icon iconId={'linkedin'} width={'64'} height={'64'} viewBox={'0 0 32 32'}/>
                    </IconLink>
                </FlexWrapper>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}