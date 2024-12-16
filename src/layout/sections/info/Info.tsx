import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Photo} from '../../../components/photo/Photo';
import photo2 from '../../../assets/images/photo-2.png'
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import {theme} from '../../../styles/Theme';
import Dots from '../../../assets/images/Dots.svg'
import thinDots from '../../../assets/images/thinDots.svg'

export const Info = () => {
    return (
        <StyledInfo>
            <Container>
                <SectionTitle widthOfLine={'20.4rem'}>about-me&nbsp;</SectionTitle>
                <Content top={'1.5rem'} bottom={'7rem'}>
                    <FlexWrapper justify={'space-between'}>
                        <FlexWrapper direction={'column'} align={'start'}>
                            <TextInfo>
                                <Paragraph>Hello, i’m Elias!</Paragraph>
                                <Paragraph>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                                    scratch and raise them into modern user-friendly web experiences.</Paragraph>
                                <Paragraph>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                                    been helping various clients to establish their presence online. I always strive to learn about the
                                    newest technologies and frameworks.</Paragraph>
                            </TextInfo>
                            <Button>Read more ➜</Button>
                        </FlexWrapper>
                        <PhotoWrapper>
                            <Photo src={photo2} alt="photo2" width={'339px'} height={'507px'} scale={'100%'} left={'50%'}/>
                        </PhotoWrapper>
                    </FlexWrapper>
                </Content>
            </Container>
        </StyledInfo>
    );
};

const StyledInfo = styled.section`
    ${Content} {
    position: relative;
    
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

const TextInfo = styled.article`
    width: 32.2rem;
    white-space: pre-wrap;
    margin-bottom: 27px;
`

const Paragraph = styled.p`
    line-height: 2rem;
    
    & + & {
        margin-top: 1.5rem;
    }
`

const PhotoWrapper = styled.div`
    border-bottom: 1px solid ${theme.colors.accent};
    position: relative;
    transform: translateY(-60px);

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
    }
`