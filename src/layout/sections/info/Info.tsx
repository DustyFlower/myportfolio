import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Photo} from '../../../components/photo/Photo';
import photo2 from '../../../assets/images/photo-2.png'
import {Icon} from '../../../components/icon/Icon';
import {Button} from '../../../components/Button';

export const Info = () => {
    return (
        <StyledInfo>
            <SectionTitle>#about-me</SectionTitle>
            <FlexWrapper align={'center'}>
                <FlexWrapper direction={'column'} align={'start'}>
                    <TextInfo>
                        {`Hello, i’m Elias!

                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                            scratch and raise them into modern user-friendly web experiences.

                            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                            been helping various clients to establish their presence online. I always strive to learn about the
                            newest technologies and frameworks.`}
                    </TextInfo>
                    <Button>Read more ➜</Button>
                </FlexWrapper>
                <FlexWrapper>
                    <Icon iconId={'dots'}/>
                    <Icon iconId={'extra-dots'}/>
                    <Icon iconId={'extra-dots'}/>
                    <Photo src={photo2} alt="photo2"/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledInfo>
    );
};

const StyledInfo = styled.section`
    min-height: 100vh;
    background-color: #aeb9ff;
`

const TextInfo = styled.p`
    white-space: pre-wrap;
`