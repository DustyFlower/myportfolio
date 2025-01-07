import React, {FC} from 'react';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';

export const Logo:FC<{className?: string}> = ({className}) => {
    return (
        <StyledLogo className={className} href='#'><Icon iconId={'logo-white'} height={'16'} width={'16'} viewBox={'0 0 53 53'}/>Natalia</StyledLogo>
    );
};

const StyledLogo = styled.a`
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${theme.colors.fontTitle};
    cursor: pointer;
`