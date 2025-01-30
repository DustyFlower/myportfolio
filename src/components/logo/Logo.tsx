import React, {FC} from 'react';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import {animateScroll as scroll} from 'react-scroll';

export const Logo:FC<{className?: string}> = ({className}) => {
    return (
        <StyledLogo className={className} onClick={() => {scroll.scrollToTop()}}><Icon iconId={'logo-white'} height={'16'} width={'16'} viewBox={'0 0 53 53'}/><span>Natalia</span></StyledLogo>
    );
};

const StyledLogo = styled.a`
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${theme.colors.fontTitle};
    cursor: pointer;

    svg {
        filter: drop-shadow(0 0 0 #fff);
        transition: filter 0.3s ease;
    }

    span {
        text-shadow: none;
        transition: text-shadow 0.3s ease;
    }

    &:hover {
        svg {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
        }

        span {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
    }
    }
`