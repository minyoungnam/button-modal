import React, { useState } from 'react'
import styled from 'styled-components'
import buttonStyles from '../styles/ButtonStyles'
import { css } from 'styled-components'

function Input() {
      const [general, setGeneral] = useState({
          name: '',
          price: '',
      })

      const onSubmitHandler = (e) => {
         e.preventDefault()
         const alertMessage = general.name === '' || general.price === ''
            ? '이름과 가격 모두 입력해주세요.'
            : `name : '${general.name}', price: '${general.price.replace(/,/g, '')}'`
         alert(alertMessage)
        }
  return (
    <>
    <h1>Input</h1>
    <form onSubmit={onSubmitHandler}>
        <Box>
            <div>
                <label>이름 </label>
                <InputBox type='text' value={general.name}
                onChange={(e) => setGeneral({...general, name: e.target.value})}/>
            </div>
            <div>
                <label>가격 </label>
                <InputBox type='text' value={general.price}
                onChange={(e) => setGeneral({...general,
                // replace(/\D/g, '')는 숫자 이외의 문자를 제거
                // replace(/\B(?=(\d{3})+(?!\d))/g, ',')는 숫자 3자리마다 쉼표(,)를 추가     
                price: e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')})}/>
            </div>
            <PrimaryButton small>저장</PrimaryButton>
        </Box>
    </form>
    </>
  )
}

export default Input

const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const InputBox = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`

const PrimaryButton = styled.button`
    ${buttonStyles}
    border: 3px solid rgb(85, 239, 196);
    color: rgb(0, 0, 0);

    ${props =>
        props.small && css`
        border: none;
        background-color: rgb(85, 239, 196);
        height: 40px;
        width: 100px; 
    `}    
`