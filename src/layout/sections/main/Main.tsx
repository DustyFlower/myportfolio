import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import photo1 from '../../../assets/images/photo-1.png';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Photo} from '../../../components/photo/Photo';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';
import LogoOutline from '../../../assets/images/Logo.svg'
import Dots from '../../../assets/images/Dots.svg'
import Quotes from '../../../assets/images/quotes.svg'
import DotsMobile from '../../../assets/images/DotsMobile.svg'
import {ModalForm} from '../../../components/modalForm/ModalForm';

export const Main = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;
    const breakpointForQuote = 730;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);


    return (
        <StyledMain>
            <Container>
                <WrapperForTwoDesktopElements direction={'column'} gap={'7rem'}>
                    <WrapperForTitleAndPhoto align={'flex-start'} justify={'space-between'} gap={'2rem'}>
                        <FlexWrapper direction={'column'} align={'start'} justify={'space-around'}>
                            <StyledTitle>
                                Natalia is a <ColoredSpan color={`${theme.colors.accent}`}>front-end
                                developer</ColoredSpan>
                            </StyledTitle>
                            <TitleDescription>She crafts responsive websites where technologies meet
                                creativity</TitleDescription>
                            <Button>Contact me!!</Button>

                            <ModalForm isOpen={false}/>

                        </FlexWrapper>
                        <FlexWrapper direction={'column'} align={'center'}>
                            <StyledPhotoWrapper>

                                {width > breakpoint ?
                                    <Photo src={photo1} alt="photo1" width={'457px'} height={'386px'} scale={'140%'}
                                           left={'44.5%'} top={'-60px'}/>
                                    :
                                    <Photo src={photo1} alt="photo1" width={'316px'} height={'260px'} scale={'140%'}
                                           top={'-50px'}/>}

                            </StyledPhotoWrapper>
                            <TextWrapper>
                                <TextUnderPhoto>Currently working
                                    on <ColoredSpan>Portfolio</ColoredSpan>
                                </TextUnderPhoto>
                            </TextWrapper>
                        </FlexWrapper>
                    </WrapperForTitleAndPhoto>

                    {width > breakpointForQuote ? <FlexWrapper direction={'column'} align={'center'}>
                            <FlexWrapper direction={'column'} align={'end'}>
                                <QuoteInMain textType={'quote'}>
                                    With great power comes great electricity bill
                                </QuoteInMain>
                                <QuoteInMain textType={'author'}>
                                    - Dr. Who
                                </QuoteInMain>
                            </FlexWrapper>
                        </FlexWrapper>
                        : null}

                </WrapperForTwoDesktopElements>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
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

const StyledTitle = styled.h1`
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

const StyledPhotoWrapper = styled.div`
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
    textType: 'quote' | 'author'
}

const QuoteInMain = styled.div<QuoteInMainPropsType>`
    border: ${theme.colors.fontText} solid 1px;
    color: ${theme.colors.fontTitle};
    line-height: 2rem;
    font-size: 1.5rem;
    text-align: center;
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

    ${props => props.textType === 'quote' && css<QuoteInMainPropsType>`
        width: 712px;
        height: 95px;
        font-weight: 500;

        &::before {
            left: 10px;
        }
    `}
    ${props => props.textType === 'author' && css<QuoteInMainPropsType>`
        width: 162px;
        height: 63px;
        font-weight: 400;
        border-top: none;

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