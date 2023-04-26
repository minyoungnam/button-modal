import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import buttonStyles from '../styles/ButtonStyles'

const Modal = () => {
    const [isOpenA, setIsOpenA] = useState(false)
    const [isOpenB, setIsOpenB] = useState(false)

    const openModalHandlerA = () => {
        setIsOpenA(true)
    }
    const closeModalHandlerA = () => {
        setIsOpenA(false)
    }
    const openModalHandlerB = () => {
        setIsOpenB(true)
    }
    const closeModalHandlerB = () => {
        setIsOpenB(false)
    }
    // 모달 창 외부를 클릭했을 때 모달 창을 닫는 함수
    // 모달 창 외부를 클릭할 때 발생하는 클릭 이벤트(e)를 받아와서,
    // 이벤트가 발생한 요소(e.target)가 모달 창 외부(e.currentTarget)와
    // 같은경우(===), setIsOpen(false)를 호출하여 모달 창 닫음
    const closeModalWithOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
          setIsOpenA(false)
        }
    }

  return (
    <>
    <h1>Modal</h1>
    <ModalBox>
        <div>
        <PrimaryButton onClick={openModalHandlerB} small>open modal</PrimaryButton>
        {isOpenB && (
            <ModalBackground>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <div className='desc'>
                  닫기 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                </div>
                <TwoBtn>
                <ModalExitBtn onClick={closeModalHandlerB} smallR>닫기</ModalExitBtn>
                <ModalExitBtn small>확인</ModalExitBtn>
                </TwoBtn>
                </ModalView>
            </ModalBackground>
          )}
        </div>
        <div>
        <NagativeButton onClick={openModalHandlerA}>open modal</NagativeButton>
        {isOpenA && (
            <ModalBackground onClick={closeModalWithOutsideClick}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <ModalExitBtnTwo onClick={closeModalHandlerA}>X</ModalExitBtnTwo>
                <div className='desc'>
                  닫기 버튼 1개가 있고,<br /> 외부 영역을 누르면 모달이 닫혀요.
                </div>
              </ModalView>
            </ModalBackground>
          )}
        </div>
    </ModalBox>
    </>
  )
}

export default Modal

const ModalBox = styled.div`
    display: flex;
    gap: 20px;
`
const TwoBtn = styled.div`
    display: flex;
    gap: 10px;
    margin-top:35px;
    margin-left: 150px;
    text-align: center;
    line-height: 40px;
`

const ModalBackground = styled.div`
    // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
    z-index: 1; //위치지정 요소
    position: fixed;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: rgba(0,0,0,0.4);
    border-radius: 10px;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
`
const ModalExitBtn = styled.div`
    ${buttonStyles}

    ${props =>
        props.small && css`
        border: none;
        background-color: rgb(85, 239, 196);
        height: 40px;
        width: 100px;
        border: 3px solid rgb(85, 239, 196);
        color: rgb(0, 0, 0); 
    `}
    
    ${props =>
        props.smallR && css`
        border: none;
        background-color: rgb(250, 177, 160);
        height: 40px;
        width: 100px;
        border:3px solid rgb(250, 177, 160);
        color: rgb(214, 48, 49); 
    `}
`
const ModalExitBtnTwo = styled.div`
    margin-top: 10px;
    margin-left: 350px;
    width: 50px;
    height: 50px;
    border-radius: 50%; // 모서리 곡선값
    background-color: #c7c4c4;
    text-align: center; // 가로정렬
    line-height: 50px; // 세로정렬
`
const ModalView = styled.div.attrs(() => ({
    // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
    role: 'dialog',
  }))`
    // Modal창 CSS를 구현합니다.
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 450px;
    height: 250px;
    background-color: #ffffff;
      >div.desc {
        margin: 50px;
        font-size: 20px;
        color: var(--coz-purple-600);
      }
  `;

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
const NagativeButton = styled.button`
    ${buttonStyles}
    border:3px solid rgb(250, 177, 160);
    color: rgb(214, 48, 49);
`    