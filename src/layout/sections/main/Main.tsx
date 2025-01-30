import React, {useEffect, useState} from 'react';
import photo1 from '../../../assets/images/photo-1.png';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Photo} from '../../../components/photo/Photo';
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {theme} from '../../../styles/Theme';
import {ModalForm} from '../../../components/modalForm/ModalForm';
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [modalOpen, setModalOpen] = useState(false);
    const [showAuthor, setShowAuthor] = useState(false);
    const breakpoint = 576;
    const breakpointForQuote = 730;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const onContactButtonClick = () => {
        setModalOpen(!modalOpen)
    };

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
                            <Button onClick={onContactButtonClick}>Contact me!!</Button>

                            <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)}/>

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
                                <S.QuoteInMainWrapper quoteWrapperType={'quote'}>
                                    <S.TextOfQuote textType={'quote'}>
                                        <Typewriter
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString('With great power comes great electricity bill')
                                                    .callFunction(() => {
                                                        const cursor = document.querySelector('.Typewriter__cursor') as HTMLElement;
                                                        if (cursor) {
                                                            cursor.style.display = 'none';
                                                        }
                                                    })
                                                    .pauseFor(10)
                                                    .callFunction(() => {
                                                        setShowAuthor(true);
                                                    })
                                                    .start();
                                            }}
                                            options={{
                                                autoStart: true,
                                                loop: false,
                                                delay: 25,
                                            }}
                                        />
                                    </S.TextOfQuote>
                                </S.QuoteInMainWrapper>
                                <S.QuoteInMainWrapper quoteWrapperType={'author'}>
                                    {/* - Dr. Who*/}
                                    {showAuthor && (
                                        <S.TextOfQuote textType={'author'}>
                                            <Typewriter
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .typeString('- Dr. Who')
                                                        .pauseFor(1000)
                                                        .start();
                                                }}
                                                options={{
                                                    autoStart: true,
                                                    loop: false,
                                                    delay: 25
                                                }}
                                            />
                                        </S.TextOfQuote>
                                    )}
                                </S.QuoteInMainWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                        : null}

                </S.WrapperForTwoDesktopElements>
            </Container>
        </S.Main>
    );
};