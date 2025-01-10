import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';
import {Content} from '../../../components/Content';
import {theme} from '../../../styles/Theme';
import Dots from '../../../assets/images/Dots.svg'

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle widthOfLine={'8rem'} maxWidthOfLine={127}>contacts&nbsp;</SectionTitle>
                <Content top={'2.8rem'} bottom={'9rem'} mobileTop={'25px'} mobileBottom={'50px'}>
                    <FlexWrapper align={'space-between'} justify={'space-between'}>
                        <StyledContactsText>
                            I’m interested in freelance opportunities. However, if you have other request or question,
                            don’t
                            hesitate to contact me
                        </StyledContactsText>
                        <ContactsFrame>
                            <Text>Message me here</Text>
                            <Contact>
                                <Icon iconId={'discord'} height={'32'} width={'32'} viewBox={'0 0 32 32'}/> !Elias#3519
                            </Contact>
                            <Contact>
                                <Icon iconId={'email'} height={'32'} width={'32'} viewBox={'0 0 32 32'}/> elias@elias.me
                            </Contact>
                        </ContactsFrame>
                    </FlexWrapper>
                </Content>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    ${Content} {
        position: relative;
        
        &::before {
            content: '';
            display: inline-block;
            width: 103px;
            height: 103px;
            background-image: url(${Dots});
            background-size: contain;
            background-repeat: no-repeat;
            pointer-events: none;

            position: absolute;
            left: -230px;
            top: 45px;
        }
    }
    ${FlexWrapper} {
        @media ${theme.media.mobile} {
            flex-direction: column;
            gap: 1rem;
        }
    }
`

const StyledContactsText = styled.p`
    max-width: 500px;
    font-weight: 500;
    line-height: 1.3rem;
`

const ContactsFrame = styled.div`
    max-width: 204px;
    display: flex;
    flex-direction: column;
    border: ${theme.colors.fontText} solid 1px;
    padding: 1rem;
    gap: 1rem;
`

const Text = styled.span`
    color: ${theme.colors.fontTitle};
    font-weight: 600;
`

const Contact = styled.div`
    display: flex;
    align-items: center;
    line-height: 1.3rem;
    gap: 5px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: ${theme.colors.fontTitle};
        text-decoration: underline;
        font-weight: 600;
    }
`