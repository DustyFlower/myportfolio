import React, {FC} from 'react';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {Icon} from '../../../../components/icon/Icon';
import {Menu, MenuItem} from '../menu/Menu';
import {IconLink} from '../../../../components/IconLink';
import {S} from '../Header_Styles'

export const MobileMenu: FC<{ menuItems: MenuItem[] }> = ({ menuItems}) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)};

    return (
        <S.MobileMenu>
                <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                    <span></span>
                </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                    <S.MobileMenuLogo/>
                <Menu menuItems={menuItems}/>
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
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}