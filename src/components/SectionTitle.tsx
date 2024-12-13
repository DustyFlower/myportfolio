import styled from 'styled-components';
import {theme} from '../styles/Theme';

type SectionTitlePropsType = {
    widthOfLine: string
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
        width: ${props => props.widthOfLine || '127px'};
        height: 1px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        top: 50%;
    }
`