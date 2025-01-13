import styled, {css} from 'styled-components';
import {theme} from '../styles/Theme';

type SectionTitlePropsType = {
    maxWidthOfLine?: number;
    widthOfLine?: string;
    dynamicValue?: string;
    noWidth?: boolean;
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    color: ${theme.colors.fontTitle};
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
    text-align: start;
    
    position: relative;

    &::before {
        content: '#';
        color: ${theme.colors.accent};
    }

    &::after {
        content: '';
        display: inline-block;
        width: clamp(127px, ${props => props.dynamicValue}, ${props => props.widthOfLine});
        height: 1px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 50%;
        
        @media ${theme.media.mobile} {
            ${props => props.noWidth && css`
            width: 0;
            `}
        }
    }
`