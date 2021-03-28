import React, { ImgHTMLAttributes } from 'react'
import { Image } from './styles';

type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

export const Logo: React.FC<ImgProps> = ({ src }) => {
    return (
        <Image src={ src }></Image>
    );
}