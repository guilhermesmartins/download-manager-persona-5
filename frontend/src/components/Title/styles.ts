import styled, { StyledComponentProps, css } from 'styled-components';

interface LetterProps {
    value: boolean;
}

export const Title = styled.h2`
    font-family: 'sans-serif';
    font-size: 60px;
    font-weight: 600;
    display: inline-block;
`;

export const Letter = styled.div<LetterProps>`
    background-color: black;
    color: 'white';
    display: inline-block;
    line-height: 50px;
    transform: rotate(-5deg);
    
    ${props => props.value && css`
        color: #D10005;
        transform: rotate(5deg);
    `}
`;