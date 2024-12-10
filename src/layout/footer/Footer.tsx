import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Logo} from '../../components/logo/Logo';
import {Icon} from '../../components/icon/Icon';
import {Container} from '../../components/Container';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'row'} justify={'space-between'}>
                    <FlexWrapper direction={'column'} align={'start'} justify={'space-around'}>
                        <Logo/>
                        <TextUnderLogo>Web designer and front-end developer</TextUnderLogo>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} align={'start'} justify={'space-around'}>
                        <FooterMedia>Media</FooterMedia>
                        <FooterIcons>
                            <Icon iconId={'git'} width={'32'} height={'32'}/>
                            <Icon iconId={'figma'} width={'32'} height={'32'}/>
                            <Icon iconId={'discord'} width={'32'} height={'32'}/>
                        </FooterIcons>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper direction={'row'} justify={'center'}>
                    <Copyright>© Copyright 2022. Made by Elias</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    border-top: black solid 1px;
    background-color: #ffd8a5;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
`

const TextUnderLogo = styled.span`

`

const FooterMedia = styled.h5`

`

const FooterIcons = styled.div`

`

const Copyright = styled.small`
    margin-top: 20px;
`