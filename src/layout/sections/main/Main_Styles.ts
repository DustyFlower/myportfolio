import {theme} from '../../../styles/Theme';
import styled, {css} from 'styled-components';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import LogoOutline from '../../../assets/images/Logo.svg'
import Dots from '../../../assets/images/Dots.svg'
import Quotes from '../../../assets/images/quotes.svg'
import DotsMobile from '../../../assets/images/DotsMobile.svg'

const Main = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;

    ${Container} {
        position: relative;

        &::after {
            content: '';
            display: inline-block;
            width: 91px;
            height: 91px;
            border: 1px solid ${theme.colors.fontText};

            position: absolute;
            right: -170px;
            bottom: 50px;
        }
    }
}
`

const WrapperForTwoDesktopElements = styled(FlexWrapper)`
}

@media ${theme.media.tablet} {
    gap: .5rem;
`

const WrapperForTitleAndPhoto = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column;
        padding-bottom: 25px;
        align-items: center;
    }

    @media ${theme.media.mobile} {
        gap: .5rem;
    }
`

const Title = styled.h1`
    color: ${theme.colors.fontTitle};
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.6rem;
    margin: 5rem 0 2rem;

    @media ${theme.media.mobile} {
        margin-top: 0
    }
`
type ColoredSpanType = {
    color?: string;
}

const ColoredSpan = styled.span<ColoredSpanType>`
    font-weight: 600;
    color: ${props => props.color || 'rgba(255, 255, 255, 1)'}
`

const TitleDescription = styled.p`
    color: ${theme.colors.fontText};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.56rem;
    margin-bottom: 1.5rem;

    @media ${theme.media.mobile} {
        line-height: 1.3rem;
    }
`

const PhotoWrapper = styled.div`
    z-index: 0;
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 155px;
        height: 155px;
        background-image: url(${LogoOutline});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: -1;

        position: absolute;
        top: 90px;
        left: 0;

        @media ${theme.media.mobile} {
            width: 105px;
            height: 105px;

            top: 60px;
            left: 0;
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
        z-index: 1;

        position: absolute;
        right: 10px;
        bottom: 45px;

        @media ${theme.media.mobile} {
            width: 57px;
            height: 57px;
            background-image: url(${DotsMobile});

            right: 7px;
            bottom: 33px;
        }
    }
`

const TextWrapper = styled.div`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.fontText};
    max-width: 402px;
    min-height: 37px;
    padding: 0.5rem;

    @media screen and (min-width: 576px) {
        min-width: 402px;
    }

    @media ${theme.media.mobile} {
        margin-bottom: 15px;
    }
`

const TextUnderPhoto = styled.span`
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.3rem;
    padding-left: 1.5rem;

    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 1rem;
        height: 1rem;
        background-color: ${theme.colors.accent};
    }
`

type QuoteInMainPropsType = {
    quoteWrapperType: 'quote' | 'author'
}

const QuoteInMainWrapper = styled.div<QuoteInMainPropsType>`
    border: ${theme.colors.fontText} solid 1px;
    color: ${theme.colors.fontTitle};
    align-content: center;

    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 2.6rem;
        height: 1.8rem;
        background-image: url(${Quotes});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;

        position: absolute;
        top: -15px;
    }

    ${props => props.quoteWrapperType === 'quote' && css<QuoteInMainPropsType>`
        width: 712px;
        height: 95px;
        padding-left: 1.5rem;

        &::before {
            left: 10px;
        }
    `}
    ${props => props.quoteWrapperType === 'author' && css<QuoteInMainPropsType>`
        width: 170px;
        height: 63px;
        border-top: none;
        padding-left: 1rem;

        &::before {
            left: 105px;
        }
    `}
    &::before {
        content: '';
        display: inline-block;
        width: 2.6rem;
        height: 1.8rem;
        background-image: url(${Quotes});
        background-size: contain;
        background-repeat: no-repeat;
        z-index: 1;

        position: absolute;
        top: -15px;
    }
`

type TextOfQuotePropsType = {
    textType: 'quote' | 'author'
}

const TextOfQuote = styled.span<TextOfQuotePropsType>`
    line-height: 2rem;
    font-size: 1.5rem;
    text-align: start;
    
    ${props => props.textType === 'quote' && css<TextOfQuotePropsType>`
        font-weight: 500;
    `}

    ${props => props.textType === 'author' && css<TextOfQuotePropsType>`
        font-weight: 400;
    `}
`

export const S = {
    Main,
    WrapperForTwoDesktopElements,
    WrapperForTitleAndPhoto,
    Title,
    ColoredSpan,
    TitleDescription,
    PhotoWrapper,
    TextWrapper,
    TextUnderPhoto,
    QuoteInMainWrapper,
    TextOfQuote
}