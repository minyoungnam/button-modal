import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { useState } from 'react'


const Selects = () => {
  const options = [
    { value: 'react', label: '리액트' },
    { value: 'java', label: '자바' },
    { value: 'spring', label: '스프링' },
    { value: 'react-native', label: '리액트네이티브' },
  ]
  const [selectOption, setSelectOption] = useState(options[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectOption(selectedOption);
  };

  return (
    <FullBox>
      <h1>Select</h1>
      <SelectWrapper>
        <Select 
        options={options} 
        value={selectOption} 
        onChange={handleSelectChange} 
        defaultValue={options[0]} 
        styles={{
          control: (provided) => ({
            ...provided,
            width: 300,
          })
        }}/>
      </SelectWrapper>
    </FullBox>
  )
}

export default Selects

const FullBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`
const SelectWrapper = styled.div`
  //항상 고정된 위치에 배치
  //ixed 속성값의 배치 기준이 자신이나 부모 요소가 아닌 뷰포트(viewport), 즉 브라우저 전체화면
  position: fixed; 
  //position 속성을 지정하고 z-index 속성(하나의 정수 값을 가진다)을 지정
  z-index: 999;
`;