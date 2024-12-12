import styled from 'styled-components';
import {theme} from '../styles/Theme';

type ButtonPropsType = {
    height?: string;
    width?: string;
}

export const Button = styled.button<ButtonPropsType>`
    height: ${props => props.height || '37px'};
    width: ${props => props.width || '148px'};
    
    cursor: pointer; 
    color: ${theme.colors.fontTitle};
/*    padding: 1rem 2rem;*/
    font-family:'Fira Code', monospace;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.3rem;
    border: 1px solid ${theme.colors.accent};
    transition: all 0.2s;
    
    &:hover {
        background-color: rgba(199, 120, 221, 0.2);
    }
`