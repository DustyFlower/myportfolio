import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {theme} from '../../styles/Theme';
import {Button} from '../Button';
import {font} from '../../styles/Common';

export const ModalForm: FC<{ isOpen: boolean }> = ({isOpen}) => {
    return (
        <ModalFormOverlay isOpen={isOpen}>
            <ModalFormWrapper>
                <StyledForm>
                    <NameEmailWrapper>
                        <Field placeholder={'Name'}/>
                        <Field placeholder={'Email'}/>
                    </NameEmailWrapper>
                    <Field placeholder={'Title'}/>
                    <Field placeholder={'Message'} as={'textarea'}/>
                    <Button type={'submit'}>Send</Button>
                </StyledForm>
            </ModalFormWrapper>
        </ModalFormOverlay>
    );
};

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
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
    `}
`

const ModalFormWrapper = styled.div`
    max-width: 569px;
    width: 90%;
    max-height: 342px;
    height: 90%;
    background-color: ${theme.colors.background};
    padding: 2rem;

    @media ${theme.media.mobile} {
        width: 100%;
        max-height: 100dvh;
        height: 100%;
    }
`

const StyledForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    textarea {
        resize: none;
        flex: 1;
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