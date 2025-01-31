import React from 'react';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import {S} from './Contacts_Styles';
import {Fade} from 'react-awesome-reveal';

export const Contacts = () => {
    return (
        <S.Contacts id={'contacts'}>
            <Container>
                <SectionTitle widthOfLine={'8rem'} maxWidthOfLine={127} dynamicValue={'40vw'}>contacts&nbsp;</SectionTitle>
                <Content top={'2.8rem'} bottom={'9rem'} mobileTop={'25px'} mobileBottom={'50px'}>
                    <FlexWrapper align={'space-between'} justify={'space-between'}>
                        <S.ContactsText>
                            I’m interested in freelance opportunities. However, if you have other request or question,
                            don’t
                            hesitate to contact me
                        </S.ContactsText>
                        <Fade direction={'up'} duration={1000} delay={0}>
                            <S.ContactsFrame>
                                <S.Text>Message me here</S.Text>
                                <S.ContactLink href='https://discord.com/users/1001767918838743090/'>
                                    <Icon iconId={'discord'} height={'32'} width={'32'} viewBox={'0 0 32 32'}/> DustyFlower
                                </S.ContactLink>
                                <S.ContactLink href='mailto:lukashevanatalia1992@gmail.com'>
                                    <Icon iconId={'email'} height={'32'} width={'32'} viewBox={'0 0 32 32'}/> Send me a letter
                                </S.ContactLink>
                            </S.ContactsFrame>
                        </Fade>
                    </FlexWrapper>
                </Content>
            </Container>
        </S.Contacts>
    );
};
