import React, {FC, useEffect, useState} from 'react';
import {Button} from '../Button';
import {S} from './ModalForm_Styles'
import {FlexWrapper} from '../FlexWrapper';

export const ModalForm: FC<{ isOpen: boolean; onClose: () => void }> = ({isOpen, onClose}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.ModalFormOverlay isOpen={isOpen} onClick={handleOverlayClick}>
            <S.ModalFormWrapper>
                <S.Form>
                    <S.NameEmailWrapper>
                        <S.Field placeholder={'Name'}/>
                        <S.Field placeholder={'Email'}/>
                    </S.NameEmailWrapper>
                    <S.Field placeholder={'Title'}/>
                    <S.Field placeholder={'Message'} as={'textarea'}/>


                    {width < breakpoint ?
                        <FlexWrapper gap={'1rem'}>
                            <Button type={'submit'}>Send</Button>
                            <Button type={'button'} onClick={onClose}>Close</Button>
                        </FlexWrapper>

                        : <Button type={'submit'}>Send</Button>}

                </S.Form>
            </S.ModalFormWrapper>
        </S.ModalFormOverlay>
    );
};

