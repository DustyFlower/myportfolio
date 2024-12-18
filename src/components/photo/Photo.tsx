import styled from 'styled-components';

import React, {FC} from 'react';

type PhotoPropsType = {
src: string;
alt: string;
width?: string;
height?: string;
scale?: string;
left?: string;
}

export const Photo:FC<PhotoPropsType> = ({src, alt, height, width, scale, left}) => {
    return (
        <PhotoWrapper $width={width} $height={height}>
            <PhotoImg src={src} alt={alt} scale={scale} left={left} />
        </PhotoWrapper>
    );
};

type PhotoWrapperPropsType = {
    $width?: string;
    $height?: string;
}

const PhotoWrapper = styled.div<PhotoWrapperPropsType>`
    width: ${props => props.$width || '457px'};
    height: ${props => props.$height || '386px'};
    overflow: hidden;
    position: relative;
`
type PhotoImgPropsType = {
    scale?: string;
    left?: string;
}

const PhotoImg = styled.img<PhotoImgPropsType>`
    width: ${props => props.scale || '100%'};
    object-fit: cover;
    position: absolute;
    top: 0;
    left: ${props => props.left || '45%'};
    transform: translateX(-50%);
`