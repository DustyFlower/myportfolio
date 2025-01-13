import React, {useEffect, useState} from 'react';
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
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <StyledInfo>
            <Container>
                <SectionTitle widthOfLine={'20.4rem'} maxWidthOfLine={326} dynamicValue={'35vw'}>about-me&nbsp;</SectionTitle>
                <Content top={'1.5rem'} bottom={'7rem'} mobileBottom={'50px'}>
                    <MainWrapper justify={'space-between'} gap={'1.5rem'}>
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

                            {width > breakpoint ?
                                <Photo src={photo2} alt="photo2" width={'339px'} height={'507px'} scale={'100%'} left={'50%'}/>
                                :
                                <Photo src={photo2} alt="photo2" width={'250px'} height={'374px'} scale={'100%'} left={'50%'}/>}

                        </PhotoWrapper>
                    </MainWrapper>
                </Content>
            </Container>
        </StyledInfo>
    );
};

const StyledInfo = styled.section`
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