# button-modal
### Modal

- 모달 2개를 구현합니다.
    - `취소`, `확인`이 있고, overlay를 클릭했을 때 모달이 닫히지 않는 형태
    - `닫기` 버튼만 있고, overlay를 클릭했을 때 모달이 닫히는 형태
    - 모달을 `on` 시키는 버튼의 형태는 각각 달라야 합니다. (위에서 만든 버튼을 재사용하는 것도 좋아요.)

### Button

- 총 6개 형태의 버튼을 구현합니다. (예시 페이지에서 확인)
    - `styled-components` 를 이용하여 구현하며, props를 적절하게 잘 활용하여 구현하세요.
    - 버튼 label에 선택적으로 아이콘을 넣을 수 있도록 구현하세요.

### Input

- 총 2개의 input을 구현합니다.
    - 일반형식의 input
    - 숫자를 넣었을 때, 3자리 수마다 `콤마 ,`가 찍히는 input
    - form을 구현하고 각 input에 값을 입력하고 `저장` 버튼을 눌렀을 때 `{name: '아무 텍스트', price: "콤마가 없는 금액"}` 을 `alert`에 표시해보세요.
### Select

- select를 구현합니다.
    - select를 클릭했을 때, option 들이 나오고 해당 option을 클릭하면 select의 값이 변경됩니다.
    - select를 클릭했을 때 부모 요소에 의해서 가려지지 않도록 구현합니다. 부모 요소에 `overflow: hidden`을 적용하면 자식 컴포넌트가 부모 컴포넌트를 넘어갔을 때 가려지게 됩니다. 부모 컴포넌트에 `hidden` 속성이 있다고 하더라도 select는 가려지지 않아야 합니다.

https://user-images.githubusercontent.com/128782170/234809645-a9843a80-158c-4954-8a81-99401d1e8456.mp4

## components

### Button.jsx
- 버튼6개를 구현 (ButtonStyles.js에서 가져와서 응용)
### Input.jsx
- 삼항연산자 사용하여 빈칸 일때는 true : 입력alert, false : name, price alert뜨도록 설정
### Modal.jsx
- stopPropagation() 메서드를 호출하면 버튼 클릭 시 버튼 이외의 부분에서 발생하는 클릭 이벤트가 동시에 발생하지 않도록 하는 것
- z-index사용하여 모달창 띄움
### Selects.jsx
- Select라이브러리 사용...

## styles

### ButtonStyles.js
- 기본형식의 버튼 1개를 만들어 버튼을 응용해서 사용
