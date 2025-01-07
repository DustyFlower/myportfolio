import styled from 'styled-components';
import {theme} from '../styles/Theme';

export const IconLink = styled.a`
    color: ${theme.colors.fontText};
    transition: all 0.2s;

    &:hover {
    color: ${theme.colors.fontTitle};
    transform: scale(1.1);
}
`