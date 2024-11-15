import React, {FC} from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Icon: FC<IconPropsType> = ({iconId, height, viewBox, width}) => {
    return (
        <svg width={width || '53'} height={height || '53'} viewBox={viewBox || '0 0 53 53'} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
        </svg>
    );
};