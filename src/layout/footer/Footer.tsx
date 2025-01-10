import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Logo} from '../../components/logo/Logo';
import {Icon} from '../../components/icon/Icon';
import {Container} from '../../components/Container';
import {theme} from '../../styles/Theme';
import {Content} from '../../components/Content';
import {IconLink} from '../../components/IconLink';

export const Footer = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <StyledFooter>
            <Container>
                <Content top={'2rem'} bottom={'2rem'} mobileTop={'25px'} mobileBottom={'15px'}>
                    <FlexWrapper direction={'row'} justify={'space-between'}>
                        <FlexWrapper direction={'column'} align={'start'} gap={'1rem'}>
                            <LogoBox>
                                <Logo/><span>elias@elias-dev.ml</span>
                            </LogoBox>
                            <TextUnderLogo>Web and front-end developer</TextUnderLogo>
                        </FlexWrapper>

                        {width > breakpoint ?
                        <FlexWrapper direction={'column'} align={'start'} gap={'1.3rem'}>
                            <FooterMedia>Media</FooterMedia>
                            <FooterIcons>
                                <IconLink href={'#'}>
                                    <Icon iconId={'git'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href={'#'}>
                                    <Icon iconId={'figma'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                                <IconLink href={'#'}>
                                    <Icon iconId={'discord'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                                </IconLink>
                            </FooterIcons>
                        </FlexWrapper>
                            :
                            null}
                    </FlexWrapper>
                    <FlexWrapper direction={'row'} justify={'center'}>
                        <Copyright>© Copyright 2022. Made by Elias</Copyright>
                    </FlexWrapper>
                </Content>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    border-top: ${theme.colors.fontText} solid 1px;
    display: flex;
    flex-direction: column;
`

const LogoBox = styled.div`
    display: flex;
    gap: 1rem;
`

const TextUnderLogo = styled.span`
    color: ${theme.colors.fontTitle};
`

const FooterMedia = styled.h5`
    color: ${theme.colors.fontTitle};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
`

const FooterIcons = styled.div`
    display: flex;
    gap: .5rem;
`

const Copyright = styled.small`
    margin-top: 3rem;
    font-size: 1rem;
`