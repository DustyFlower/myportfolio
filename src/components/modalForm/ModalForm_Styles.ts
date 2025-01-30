import styled, {css} from 'styled-components';
import {theme} from '../../styles/Theme';
import {Button} from '../Button';
import {font} from '../../styles/Common';

const ModalFormOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    justify-content: center;
    align-items: center;
    display: flex;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s ease-in-out;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        opacity: 1;
        visibility: visible;
        pointer-events: all;
    `}
`

const ModalFormWrapper = styled.div`
    max-width: 569px;
    width: 90%;
    max-height: 342px;
    height: 90%;
    background-color: ${theme.colors.background};
    padding: 2rem;
    transition: transform 0.3s ease-in-out;

    @media ${theme.media.mobile} {
        width: 100%;
        max-height: 100dvh;
        height: 100%;
    }
`

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea {
        resize: none;
        flex: 1;
        transition: border-color 0.2s ease, outline 0.2s ease;
    }

    ${Button} {
        max-width: 71px;
        max-height: 37px;
    }
`

const Field = styled.input`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.fontText};
    padding: .5rem;
    color: ${theme.colors.fontText};
    ${font({family: 'Fira Code', weight: 400, Fmin: 16, Fmax: 16, color: 'rgb(171,178,191)'})};
    transition: border-color 0.2s ease, outline 0.2s ease;

    &::placeholder {
        color: ${theme.colors.fontText};
        opacity: 1;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.accent};
    }
`

const NameEmailWrapper = styled.div`
    display: flex;
    gap: .5rem;
    width: 100%;

    ${Field} {
        flex: 1;
        min-width: 0;
    }
`

export const S = {
    ModalFormOverlay,
    ModalFormWrapper,
    Form,
    Field,
    NameEmailWrapper
}