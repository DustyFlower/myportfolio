import React, {useEffect, useState} from 'react';
import photo1 from '../../../assets/images/photo-1.png';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Photo} from '../../../components/photo/Photo';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';
import {ModalForm} from '../../../components/modalForm/ModalForm';
import {S} from './Main_Styles'

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
        <S.Main id={'home'}>
            <Container>
                <S.WrapperForTwoDesktopElements direction={'column'} gap={'7rem'}>
                    <S.WrapperForTitleAndPhoto align={'flex-start'} justify={'space-between'} gap={'2rem'}>
                        <FlexWrapper direction={'column'} align={'start'} justify={'space-around'}>
                            <S.Title>
                                Natalia is a <S.ColoredSpan color={`${theme.colors.accent}`}>front-end
                                developer</S.ColoredSpan>
                            </S.Title>
                            <S.TitleDescription>She crafts responsive websites where technologies meet
                                creativity</S.TitleDescription>
                            <Button>Contact me!!</Button>

                            <ModalForm isOpen={false}/>

                        </FlexWrapper>
                        <FlexWrapper direction={'column'} align={'center'}>
                            <S.PhotoWrapper>

                                {width > breakpoint ?
                                    <Photo src={photo1} alt="photo1" width={'457px'} height={'386px'} scale={'140%'}
                                           left={'44.5%'} top={'-60px'}/>
                                    :
                                    <Photo src={photo1} alt="photo1" width={'316px'} height={'260px'} scale={'140%'}
                                           top={'-50px'}/>}

                            </S.PhotoWrapper>
                            <S.TextWrapper>
                                <S.TextUnderPhoto>Currently working
                                    on <S.ColoredSpan>Portfolio</S.ColoredSpan>
                                </S.TextUnderPhoto>
                            </S.TextWrapper>
                        </FlexWrapper>
                    </S.WrapperForTitleAndPhoto>

                    {width > breakpointForQuote ? <FlexWrapper direction={'column'} align={'center'}>
                            <FlexWrapper direction={'column'} align={'end'}>
                                <S.QuoteInMain textType={'quote'}>
                                    With great power comes great electricity bill
                                </S.QuoteInMain>
                                <S.QuoteInMain textType={'author'}>
                                    - Dr. Who
                                </S.QuoteInMain>
                            </FlexWrapper>
                        </FlexWrapper>
                        : null}

                </S.WrapperForTwoDesktopElements>
            </Container>
        </S.Main>
    );
};