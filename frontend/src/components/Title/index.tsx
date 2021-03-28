import React from 'react'
import { Title, Letter } from './styles';

export const ListDownloadsTitle: React.FC = ({ children }) => {
    let elements: string[] | null = null;

    if(children)
        elements = (children as string).split('');

    return (
        <Title>
        {
            elements ? elements.map(el => {
                return (
                    <Letter key={el} value={ Math.random() < 0.5 }>{el}</Letter>
                )
            }) : null
        }
        </Title>
    );
}