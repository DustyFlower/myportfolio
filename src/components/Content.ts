import styled from 'styled-components';
import {theme} from '../styles/Theme';

type ContentPropsType = {
    top?: string;
    bottom?: string;
    mobileTop?: string;
    mobileBottom?: string;
}

export const Content = styled.div<ContentPropsType>`
    padding-top: ${props => props.top || '0'};
    padding-right: 0;
    padding-bottom: ${props => props.bottom || '0'};
    padding-left: 0;
    
    @media ${theme.media.mobile} {
        padding-top: ${props => props.mobileTop || '0'};
        padding-bottom: ${props => props.mobileBottom || '0'};
    }
`