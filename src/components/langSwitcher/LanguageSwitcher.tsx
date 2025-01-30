import React, {FC, useEffect, useRef} from 'react';
import {S} from './LanguageSwitcher_Styles'

type LangPropsType = {
    onLangBtn?: () => void;
}

export const LanguageSwitcher: FC<LangPropsType> = ({onLangBtn}) => {

    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            const isButtonClick = (event.target as HTMLElement).closest('button');
            const isInsideWrapper = wrapperRef.current && wrapperRef.current.contains(event.target as Node);

            if (!isInsideWrapper || (isInsideWrapper && !isButtonClick)) {
                setMenuIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onLangSelectorBtnClick = () => {setMenuIsOpen(!menuIsOpen)};

    const handleLanguageSelect = (event: React.MouseEvent) => {
        if (onLangBtn) {
            onLangBtn();
        }
        setMenuIsOpen(false);
    };

    return (
        <div ref={wrapperRef} className="language-switcher">
            <S.LangSelectorButton isOpen={menuIsOpen} onClick={onLangSelectorBtnClick}>EN</S.LangSelectorButton>
            <S.LangSelectorPopup isOpen={menuIsOpen}>
                <S.LangList>
                    <S.LangItem><S.InnerLangSelectorButton onClick={handleLanguageSelect}>RU</S.InnerLangSelectorButton></S.LangItem>
                    <S.LangItem ><S.InnerLangSelectorButton onClick={handleLanguageSelect}>EN</S.InnerLangSelectorButton></S.LangItem>
                </S.LangList>
            </S.LangSelectorPopup>
        </div>
    );
};