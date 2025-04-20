# Adding Interactivity

## 1. 이벤트에 응답하기

```tsx
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => alert('You clicked on the toolbar!')}>
      <button onClick={() => alert('Playing!')}>Play Movie</button>
      <button onClick={() => alert('Uploading!')}>Upload Image</button>
    </div>
  );
}
```

- `onScroll` 이벤트는 스크롤이 발생한 요소에서만 실행되고 다른 요소로 전파되지 않는다.
- `onScroll` 이벤트를 제외한 다른 모든 이벤트(ex.`onClick`, `onMouseOver` 등)는 자식 요소에서 부모 요소로 전파된다.

```tsx
<div
  onClickCapture={() => {
    /* this runs first */
  }}
>
  <button onClick={e => e.stopPropagation()} />
  <button onClick={e => e.stopPropagation()} />
</div>
```

- 이벤트명 마지막에 `Capture` 를 추가하면 전파 로직과 관계없이 모든 이벤트를 기록할 수 있다.

## 2. State: 컴포넌트의 기억 저장소

### 2-1. useState 동작 방식

- `useState` 는 어떤 `state` 변수를 참조하는지에 대한 식별자를 별도로 받지 않는다.
- 훅은 항상 최상위 수준에서만 호출되어야 하며 이 규칙을 따르면 항상 같은 순서로 호출된다.
- 호출 순서에 의존하므로 위의 규칙으로 실행 순서 보장이 필요하다.

### 2-2. useState 내부 구현

- 컴포넌트마다 `state` 값을 저장하는 배열을 가지고 있다.
- 컴포넌트가 렌더링 될 때마다 `useState` 호출 순서를 추적하는 카운터를 0으로 초기화한다.
- 컴포넌트에서 `useState` 를 호출하면 다음과 같이 동작한다.
  - 현재 인덱스 위치의 `state` 값을 가져온다.
  - 다음 `useState` 호출을 위해 인덱스를 1 증가시킨다.
  - 여러 개의 `useState` 를 사용해도 각각의 `state` 가 올바른 순서로 매칭된다.

### 2-3. useState 구현 예시

```js
let componentHooks = [];
let currentHookIndex = 0;

function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // 첫 번째 렌더링이 아닌 경우
    currentHookIndex++;
    return pair;
  }

  // 첫 번째 렌더링인 경우
  pair = [initialState, setState];

  function setState(nextState) {
    pair[0] = nextState;
    updateDOM();
  }

  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}
```
