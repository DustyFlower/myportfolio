import React, {FC, useEffect, useRef} from 'react';
import {S} from './LanguageSwitcher_Styles'

export const LanguageSwitcher: FC = () => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setMenuIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onLangSelectorBtnClick = () => {setMenuIsOpen(!menuIsOpen)};

    return (
        <div ref={wrapperRef}>
            <S.LangSelectorButton isOpen={menuIsOpen} onClick={onLangSelectorBtnClick}>EN</S.LangSelectorButton>
            <S.LangSelectorPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <S.LangList>
                    <S.LangItem>RU</S.LangItem>
                    <S.LangItem>EN</S.LangItem>
                </S.LangList>
            </S.LangSelectorPopup>
        </div>
    );
};

