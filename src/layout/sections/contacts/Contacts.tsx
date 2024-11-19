import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../components/icon/Icon';

export const Contacts = () => {
    return (
        <StyledContacts>
            <StyledContactsText>
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
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
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 100vh;
    background-color: #fffae1;
    display: flex;
`

const StyledContactsText = styled.p`

`

const StyledContactsTable = styled.table`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    border: black solid 1px;
`