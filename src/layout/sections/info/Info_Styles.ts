import Dots from '../../../assets/images/Dots.svg';
import thinDots from '../../../assets/images/thinDots.svg';
import styled from 'styled-components';
import {Content} from '../../../components/Content';
import {theme} from '../../../styles/Theme';
import {FlexWrapper} from '../../../components/FlexWrapper';

const Info = styled.section`
    ${Content} {
    position: relative;

        @media ${theme.media.tablet} {
            padding-top: 0;
        }
        
    &::before {
        content: '';
        display: inline-block;
        width: 155px;
        height: 155px;
        border: 1px solid ${theme.colors.fontText};

        position: absolute;
        top: 95px;
        left: -250px;

        pointer-events: none
    }
    
    &::after {
        content: '';
        display: inline-block;
        width: 103px;
        height: 103px;
        background-image: url(${Dots});
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        right: -210px;
        top: 265px;
    }
    }
`

const MainWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const TextInfo = styled.article`
    max-width: 32.2rem;
    white-space: pre-wrap;
    margin-bottom: 27px;
`

const Paragraph = styled.p`
    line-height: 1.625rem; 
    
    & + & {
        margin-top: 1.5rem;
    }
    
    @media ${theme.media.mobile} {
        line-height: 1.3rem;
    }
`

const PhotoWrapper = styled.div`
    border-bottom: 1px solid ${theme.colors.accent};
    position: relative;
    transform: translateY(-60px);
    width: fit-content;
    
    @media ${theme.media.tablet} {
        transform: translateY(0);
    }

    &::before {
        content: '';
        display: inline-block;
        width: 104px;
        height: 56px;
        background-image: url(${thinDots});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;

        position: absolute;
        right: 15px;
        bottom: 170px;
        
        @media ${theme.media.mobile} {
            width: 74px;
            bottom: 110px;
            right: 10px
        }
    }
    
    &::after {
        content: '';
        display: inline-block;
        width: 84px;
        height: 84px;
        background-image: url(${Dots});
        background-size: contain;
        background-repeat: no-repeat;

        position: absolute;
        left: -5px;
        top: 60px;

        @media ${theme.media.mobile} {
            width: 57px;
            height: 57px;
            
            top: 50px;
            left: 0;
        }
    }
`

export const S = {
    Info,
    MainWrapper,
    TextInfo,
    Paragraph,
    PhotoWrapper
}