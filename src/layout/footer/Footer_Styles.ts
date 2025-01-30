import styled from 'styled-components';
import {theme} from '../../styles/Theme';

const Footer = styled.footer`
    border-top: ${theme.colors.fontText} solid 1px;
    display: flex;
    flex-direction: column;
`

const LogoBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

const TextUnderLogo = styled.span`
    color: ${theme.colors.fontTitle};
`

const FooterMedia = styled.h5`
    color: ${theme.colors.fontTitle};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2rem;
`

const FooterIcons = styled.div`
    display: flex;
    gap: .5rem;
`

const Copyright = styled.small`
    margin-top: 3rem;
    font-size: 1rem;
`

export const S = {
    Footer,
    LogoBox,
    TextUnderLogo,
    FooterMedia,
    FooterIcons,
    Copyright
}