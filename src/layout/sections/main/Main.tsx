import React from 'react';
import styled, {css} from 'styled-components';
import photo from '../../../assets/images/photo-1.png';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from '../../../components/icon/Icon';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <MainTextWrapper>
                    <h1>
                        Natalia is a front-end developer
                    </h1>
                    <span>She crafts responsive websites where technologies meet creativity</span>
                    <button>Contact me!!</button>
                </MainTextWrapper>
                <PhotoWrapper>
                    <Icon iconId={'logo-outline'} width={'155'} height={'155'}></Icon>
                    <Icon iconId={'dots'} width={'84'} height={'84'}></Icon>
                    <Photo src={photo} alt="photo"/>
                    <TextUnderPhoto>Currently working on Portfolio</TextUnderPhoto>
                </PhotoWrapper>
            </FlexWrapper>
            <QuoteWrapper>
<Icon iconId={'quote'}/>
                <QuoteInMain textType={'quote'}>
                    With great power comes great electricity bill
                </QuoteInMain>
                <QuoteInMain textType={'author'}>
                    - Dr. Who
                </QuoteInMain>
<Icon iconId={'quote'}/>
            </QuoteWrapper>
        </StyledMain>
    );
};

const QuoteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

type QuoteInMainPropsType = {
    textType: 'quote' | 'author'
}

const QuoteInMain = styled.div<QuoteInMainPropsType>`
    border: black solid 1px;
    align-items: end;
    
    ${props => props.textType === 'quote' && css<QuoteInMainPropsType>`
    font-weight: bold;
    `}
    
    ${props => props.textType === 'author' && css<QuoteInMainPropsType>`
    font-weight: normal;
    `}
    
`
const TextUnderPhoto = styled.span`
    border: black solid 1px;
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fff5e7;
`

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
`

const MainTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const PhotoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`