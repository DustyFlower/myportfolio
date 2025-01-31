import React, {ElementRef, FC, useEffect, useRef, useState} from 'react';
import {Button} from '../Button';
import {S} from './ModalForm_Styles'
import {FlexWrapper} from '../FlexWrapper';
import emailjs from '@emailjs/browser';

export const ModalForm: FC<{ isOpen: boolean; onClose: () => void }> = ({isOpen, onClose}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isSuccess, setIsSuccess] = useState(false);
    const breakpoint = 576;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_vq91ltr', 'template_0yllue7', form.current, {
                publicKey: 'BnCownPj43WtcVtr4',
            })
            .then(
                () => {
                    setIsSuccess(true);
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const handleClose = () => {
        onClose();
        setTimeout(()=>{
            setIsSuccess(false);
            if (form.current) form.current.reset();
        }, 300)
    };

    return (
        <S.ModalFormOverlay isOpen={isOpen} onClick={handleOverlayClick}>
            <S.ModalFormWrapper>

                {isSuccess ? (
                    <S.SuccessMessage>
                        <S.MainSuccessMessage>Your request has been sent successfully.</S.MainSuccessMessage>
                        <p>I will contact you as soon as possible.</p>
                        <p>Thank you for your attention!</p>
                        <Button type={'button'} onClick={handleClose}>Close</Button>
                    </S.SuccessMessage>
                ) : (
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.NameEmailWrapper>
                            <S.Field required placeholder={'Name'} type={'text'} name={'user_name'}/>
                            <S.Field required placeholder={'Email'} type={'email'} name={'email'}/>
                        </S.NameEmailWrapper>
                        <S.Field required placeholder={'Title'} type={'text'} name={'subject'}/>
                        <S.Field required placeholder={'Message'} as={'textarea'} name={'message'}/>

                        {width < breakpoint ?
                            <FlexWrapper gap={'1rem'}>
                                <Button type={'submit'}>Send</Button>
                                <Button type={'button'} onClick={handleClose}>Close</Button>
                            </FlexWrapper>
                            : <Button type={'submit'}>Send</Button>}

                    </S.Form>
                )}

            </S.ModalFormWrapper>
        </S.ModalFormOverlay>
    );
};