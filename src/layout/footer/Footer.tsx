import React, {useEffect, useState} from 'react';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Logo} from '../../components/logo/Logo';
import {Icon} from '../../components/icon/Icon';
import {Container} from '../../components/Container';
import {Content} from '../../components/Content';
import {IconLink} from '../../components/IconLink';

import {S} from './Footer_Styles'

export const Footer = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Footer>
            <Container>
                <Content top={'2rem'} bottom={'2rem'} mobileTop={'25px'} mobileBottom={'15px'}>
                    <FlexWrapper direction={'row'} justify={'space-between'}>
                        <FlexWrapper direction={'column'} align={'start'} gap={'1rem'}>
                            <S.LogoBox>
                                <Logo/><span>lukashevanatalia1992@gmail.com</span>
                            </S.LogoBox>
                            <S.TextUnderLogo>Web and front-end developer</S.TextUnderLogo>
                        </FlexWrapper>

                        {width > breakpoint ?
                        <FlexWrapper direction={'column'} align={'start'} gap={'1.3rem'}>
                            <S.FooterMedia>Media</S.FooterMedia>
                            <S.FooterIcons>
                                <IconLink href={'https://github.com/DustyFlower'}>
                                    <Icon iconId={'git'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href={'https://x.com/dustyflower_'}>
                                    <Icon iconId={'twitter'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href={'https://discord.com/users/1001767918838743090/'}>
                                    <Icon iconId={'discord'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                            </S.FooterIcons>
                        </FlexWrapper>
                            :
                            null}
                    </FlexWrapper>
                    <FlexWrapper direction={'row'} justify={'center'}>
                        <S.Copyright>© Copyright 2025. Made by Natalia</S.Copyright>
                    </FlexWrapper>
                </Content>
            </Container>
        </S.Footer>
    );
};