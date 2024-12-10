import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Container} from '../../../components/Container';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>#contacts</SectionTitle>
                <FlexWrapper align={'space-between'} justify={'space-between'}>
                    <StyledContactsText>
                        <Icon iconId={'extra-dots'}/>
                        I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me
                    </StyledContactsText>
                    <StyledContactsTable>
                        <tr>
                            <td>
                                Message me here
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Icon iconId={'discord'}/> !Elias#3519
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Icon iconId={'email'}/> elias@elias.me
                            </td>
                        </tr>
                    </StyledContactsTable>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: #fffae1;
`

const StyledContactsText = styled.p`
    max-width: 40%;
`

const StyledContactsTable = styled.table`
    display: flex;
    flex-direction: column;
    border: black solid 1px;
`