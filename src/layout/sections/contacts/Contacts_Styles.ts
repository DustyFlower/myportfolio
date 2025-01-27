import {theme} from '../../../styles/Theme';
import styled from 'styled-components';
import {Content} from '../../../components/Content';
import {FlexWrapper} from '../../../components/FlexWrapper';
import Dots from '../../../assets/images/Dots.svg'

const Contacts = styled.section`
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
            gap: 2rem;
        }
    }
`

const ContactsText = styled.p`
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

const ContactLink = styled.a`
    display: flex;
    align-items: center;
    line-height: 1.3rem;
    gap: 10px;
    transition: all 0.2s;
    cursor: pointer;
    color: ${theme.colors.fontText};

    &:hover {
        color: ${theme.colors.fontTitle};
        text-decoration: underline;
        font-weight: 600;
    }
`

export const S = {
    Contacts,
    ContactsText,
    ContactsFrame,
    Text,
    ContactLink
}