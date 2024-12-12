import React from 'react';
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

export const Main = () => {
    return (
        <StyledMain>
        <Container>
            <FlexWrapper direction={'column'} gap={'7rem'}>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'1rem'}>
                    <FlexWrapper direction={'column'} align={'start'} justify={'space-around'}>
                        <StyledTitle>
                            Natalia is a <ColoredSpan color={`${theme.colors.accent}`}>front-end developer</ColoredSpan>
                        </StyledTitle>
                        <TitleDescription>She crafts responsive websites where technologies meet creativity</TitleDescription>
                        <Button>Contact me!!</Button>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} align={'center'}>
<StyledPhotoWrapper>
    <Photo src={photo1} alt="photo1" width={'457px'} height={'386px'}/>
</StyledPhotoWrapper>
                        <TextWrapper>
                            <TextUnderPhoto>Currently working on <ColoredSpan>Portfolio</ColoredSpan></TextUnderPhoto>
                        </TextWrapper>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper direction={'column'} align={'center'}>
                    <FlexWrapper direction={'column'} align={'end'}>
                        <QuoteInMain textType={'quote'}>
                            With great power comes great electricity bill
                        </QuoteInMain>
                        <QuoteInMain textType={'author'}>
                            - Dr. Who
                        </QuoteInMain>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const StyledTitle = styled.h1`
    color: ${theme.colors.fontTitle};
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.6rem;
    margin: 3rem 0 2rem
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
        top: 130px;
        left: 10px;
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
        right: 45px;
        bottom: 32px;
    }
`

const TextWrapper = styled.div`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.fontText};
    width: 402px;
    height: 37px; 
    padding: 0.5rem;
    position: relative;
    
    &::after {
        content: '';
        display: inline-block;
        width: 91px;
        height: 91px;
        border: 1px solid ${theme.colors.fontText};
        
        position: absolute;
        right: -210px;
        bottom: -230px;
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
        content:'';
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
        content:'';
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