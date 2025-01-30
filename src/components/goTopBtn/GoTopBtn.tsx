import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../icon/Icon';
import {animateScroll as scroll} from 'react-scroll';
import {theme} from '../../styles/Theme';

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn &&  <StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconId={'arrowGoTop'} width={'16'} height={'15'} viewBox={'0 0 16 15'}/>
            </StyledGoTopBtn>}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;
    color: ${theme.colors.fontText};
    transition: all 0.2s;
    
    &:hover {
        color: ${theme.colors.accent};
    }
`