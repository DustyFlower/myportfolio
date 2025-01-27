import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {Logo} from '../../components/logo/Logo';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {theme} from '../../styles/Theme';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu';

const items = [
    {
        title: 'home',
        href: 'home'
    },
    {
        title: 'works',
        href: 'works'
    },
    {
        title: 'about-me',
        href: 'about-me'
    },
    {
        title: 'contacts',
        href: 'contacts'
    }]

export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 777;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.background};
    padding: 2rem 0 0.5rem;
`