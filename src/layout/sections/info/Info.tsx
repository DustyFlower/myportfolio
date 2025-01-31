import React, {useEffect, useState} from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Photo} from '../../../components/photo/Photo';
import photo2 from '../../../assets/images/photo-2.png'
import {Button} from '../../../components/Button';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import {S} from './Info_Styles';
import {Fade} from 'react-awesome-reveal';

export const Info = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Info id={'about-me'}>
            <Container>
                <SectionTitle widthOfLine={'20.4rem'} maxWidthOfLine={326} dynamicValue={'35vw'}>about-me&nbsp;</SectionTitle>
                <Content top={'1.5rem'} bottom={'7rem'} mobileBottom={'50px'}>
                    <S.MainWrapper justify={'space-between'} gap={'1.5rem'}>
                            <FlexWrapper direction={'column'} align={'start'}>
                                <Fade cascade direction={'left'} damping={0.1}>
                                <S.TextInfo>
                                    <S.Paragraph>Hello, i’m Natalia!</S.Paragraph>
                                    <S.Paragraph>I’m a front-end developer based in Budva, Montenegro. I can develop responsive websites from
                                        scratch and raise them into modern user-friendly web experiences.</S.Paragraph>
                                    <S.Paragraph>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                                        been helping various clients to establish their presence online. I always strive to learn about the
                                        newest technologies and frameworks.</S.Paragraph>
                                </S.TextInfo>
                                <Button>Read more ➜</Button>
                                </Fade>
                            </FlexWrapper>
                        <S.PhotoWrapper>

                            {width > breakpoint ?
                                <Photo src={photo2} alt="photo2" width={'339px'} height={'507px'} scale={'100%'} left={'50%'}/>
                                :
                                <Photo src={photo2} alt="photo2" width={'250px'} height={'374px'} scale={'100%'} left={'50%'}/>}

                        </S.PhotoWrapper>
                    </S.MainWrapper>
                </Content>
            </Container>
        </S.Info>
    );
};

