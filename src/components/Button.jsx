import React from 'react'
import styled from 'styled-components'
import buttonStyles from '../styles/ButtonStyles'
import { css } from 'styled-components'

const Button = () => {
    const makeButton = () => {
        alert('버튼을 만들어보세요')
    }

    const iconButton = () => {
        alert('어렵나요?')
    }

  return (
    <div>
        <h1>Button</h1>
        <ButtonBox>
        <PrimaryButton onClick={makeButton}>Large Primary Button</PrimaryButton>
        <PrimaryButton medium>Medium</PrimaryButton>
        <PrimaryButton small>Small</PrimaryButton>
        </ButtonBox>
        <ButtonBox>
        <NagativeButton onClick={iconButton}>Large Negative Button</NagativeButton>
        <NagativeButton medium>Medium</NagativeButton>
        <NagativeButton small>Small</NagativeButton>
        </ButtonBox>
    </div>
  )
}

export default Button

const ButtonBox = styled.div`
    display: flex;
    gap: 20px;
    padding-bottom: 10px;
`    

const PrimaryButton = styled.button`
    ${buttonStyles}
    border: 3px solid rgb(85, 239, 196);
    color: rgb(0, 0, 0);

    ${props =>
        props.medium && css`
        border: none;
        background-color: rgb(85, 239, 196);
        height: 45px;
        width: 130px; 
        `}

    ${props =>
        props.small && css`
        border: none;
        background-color: rgb(85, 239, 196);
        height: 40px;
        width: 100px; 
    `}
    &:hover {
    opacity: 0.6;
    };    
`
const NagativeButton = styled.button`
    ${buttonStyles}
    border:3px solid rgb(250, 177, 160);
    color: rgb(214, 48, 49);

    ${props =>
        props.medium && css`
        border: none;
        background-color: rgb(250, 177, 160);
        height: 45px;
        width: 130px; 
        `}

    ${props =>
        props.small && css`
        border: none;
        background-color: rgb(250, 177, 160);
        height: 40px;
        width: 100px; 
    `}
    &:hover {
    opacity: 0.6;
    };
`