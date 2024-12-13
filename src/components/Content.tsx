import styled from 'styled-components';

type ContentPropsType = {
    top?: string;
    bottom?: string;
}

export const Content = styled.div<ContentPropsType>`
    padding-top: ${props => props.top || '0'};
    padding-right: 0;
    padding-bottom: ${props => props.bottom || '0'};
    padding-left: 0;
/*    border: 1px solid gold;*/
`