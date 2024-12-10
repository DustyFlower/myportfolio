import React from 'react';
import styled from 'styled-components';
import {Menu} from '../../components/menu/Menu';
import {Logo} from '../../components/logo/Logo';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {theme} from '../../styles/Theme';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.background};
    padding: 2rem 0 0.5rem;
`