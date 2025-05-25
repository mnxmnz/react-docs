# Escape Hatches

## 1. Ref로 값 참조하기

### 1-1. Ref의 기본 개념

#### Ref란?

- 컴포넌트가 값을 기억하면서도 렌더링을 유발하지 않도록 할 때 사용
- 단방향 데이터 흐름에서의 탈출구

### 1-2. Ref 사용 방법

#### 1. Ref 생성하기

```tsx
import { useRef } from 'react';

const ref = useRef(0);
```

#### 2. Ref 값 접근하기

- `ref.current` 프로퍼티를 통해 Ref 현재 값에 접근할 수 있음
- 값을 변경할 수 있음 (읽기/쓰기 가능)

### 1-3. Ref와 State의 차이점

#### Ref

- ref 를 변경해도 컴포넌트를 다시 렌더링하지 않음
- 렌더링 프로세스 외부에서 `ref.current` 값을 수정할 수 있음
- 렌더링 중에는 `ref.current` 를 읽거나 쓰면 안 됨

#### State

- state 를 변경하면 컴포넌트를 다시 렌더링함
- state 를 수정하기 위해서는 설정 함수를 리렌더링 대기열에 넣어야 함
- 렌더링 중에도 언제든지 state 를 읽을 수 있음

### 1-4. useRef의 내부 동작 방식

#### useRef 구현

```tsx
function useRef(initialValue) {
  const [ref] = useState({ current: initialValue });

  return ref;
}
```

#### 내부 동작 원리

- `useRef` 는 내부적으로 `useState` 를 사용하여 구현
- `{ current: initialValue }` 형태의 객체 생성
- `useState` 의 setter 함수는 사용하지 않음
- 컴포넌트를 리렌더링해도 동일한 객체 참조 유지

#### 특징

- 객체 자체는 변경 가능하지만 객체 참조는 불변
- React는 `ref.current` 의 변경을 추적하지 않음
- 렌더링 간에 일관된 객체 참조 보장

### 1-5. Ref 사용 시기

#### Ref를 사용해야 하는 경우

- Timeout ID 저장
- DOM 엘리먼트 저장 및 조작
- JSX 를 계산하는 데 필요하지 않은 다른 객체 저장

#### Ref 사용 원칙

- 외부 시스템이나 브라우저 API 로 작업할 때 유용
- 렌더링 중에 `ref.current` 를 읽거나 쓰지 않기
- 외부 시스템이나 브라우저 API와 작업할 때 유용

### 1-6. Ref 사용 예시

#### 스톱워치 예제

```tsx
function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }
}
```

### 1-7. 주의사항

#### 1. 렌더링 중 Ref 사용 금지

- 렌더링 중에 `ref.current` 를 읽거나 쓰면 안 됨
- 컴포넌트의 동작을 예측하기 어려워짐

#### 2. Ref의 적절한 사용

- 애플리케이션 로직과 데이터 흐름의 상당 부분이 Ref 에 의존하지 않도록 주의
- 필요한 경우에만 Ref 사용

## 2. Ref로 DOM 조작하기

### 2-1. Ref의 기본 개념

#### Ref란?

- React 가 관리하는 DOM 노드에 직접 접근하는 방법
- 포커스, 스크롤, 애니메이션 등 DOM 을 직접 조작할 때 사용

### 2-2. Ref 사용 방법

#### 1. Ref 생성하기

```tsx
import { useRef } from 'react';

const myRef = useRef(null);
```

#### 2. DOM 노드에 Ref 연결하기

```tsx
<div ref={myRef}>
```

#### 3. Ref 값 접근하기

- `myRef.current` 를 통해 DOM 노드에 접근
- DOM 노드가 생성된 후에만 `current` 속성에 값이 설정됨

### 2-3. Ref 사용 시기

#### Ref를 사용해야 하는 경우

- 포커스 관리
- 스크롤 위치 조정
- 애니메이션 트리거
- DOM 요소의 크기/위치 측정
- 서드파티 DOM 라이브러리 통합

#### Ref 사용 원칙

- DOM 조작이 불가피한 경우에만 Ref 사용
- 가능한 React 의 state 와 props 로 해결

### 2-4. Ref 사용 예시

#### 포커스 관리 예제

```tsx
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

### 2-5. Ref 콜백을 사용한 Ref 리스트 관리

#### Ref 콜백이란?

- ref 속성에 함수를 전달하는 방식
- DOM 노드가 마운트되거나 언마운트될 때 호출됨
- 동적으로 생성되는 여러 요소의 ref 를 관리할 때 유용

#### Ref 콜백 사용 방법

```tsx
function CatFriends() {
  const itemsRef = useRef(new Map());

  function scrollToId(itemId) {
    const node = itemsRef.current.get(itemId);

    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(1)}>Maru</button>
        <button onClick={() => scrollToId(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat, index) => (
            <li
              key={cat.id}
              ref={node => {
                if (node) {
                  itemsRef.current.set(cat.id, node);
                } else {
                  itemsRef.current.delete(cat.id);
                }
              }}
            >
              <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

#### 특징

- Map 객체를 사용하여 여러 ref 를 관리
- 요소가 제거될 때 자동으로 ref 정리
- 동적으로 생성되는 요소들의 ref 를 효율적으로 관리

#### 주의사항

- Map 객체를 사용할 때는 초기화를 useRef 내부에서 수행
- 불필요한 ref 는 정리하여 메모리 누수 방지
- ref 콜백은 렌더링마다 호출될 수 있으므로 성능 고려 필요

### 2-6. 명령형 처리방식으로 하위 API 노출하기

#### useImperativeHandle이란?

- 부모 컴포넌트에 노출할 메서드를 커스터마이즈할 수 있는 Hook
- `forwardRef` 와 함께 사용하여 컴포넌트의 ref 를 커스터마이즈
- 컴포넌트의 내부 구현을 캡슐화하면서 필요한 기능만 노출 가능

#### 사용 방법

```tsx
import { forwardRef, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    [],
  );

  return <input {...props} ref={inputRef} />;
});
```

#### 특징

- 부모 컴포넌트에서 필요한 메서드만 선택적으로 노출
- 컴포넌트의 내부 구현을 숨기면서 필요한 기능만 제공
- DOM 노드 전체를 노출하는 대신 특정 메서드만 노출 가능

#### 주의사항

- 필요한 메서드만 노출하여 컴포넌트의 캡슐화 유지
- `useImperativeHandle` 의 의존성 배열 적절히 관리
- 부모 컴포넌트에서 ref 를 통해 호출할 수 있는 메서드를 명확히 문서화

### 2-7. flushSync로 state 변경을 동기적으로 플러시하기

#### flushSync란?

- React 의 state 업데이트를 즉시 동기적으로 처리하도록 강제하는 함수
- DOM 업데이트를 즉시 반영해야 하는 특수한 경우에 사용
- 일반적인 React 의 배치(batch) 업데이트를 우회

#### 사용 방법

```tsx
import { flushSync } from 'react-dom';

function handleClick() {
  // 즉시 DOM 업데이트
  flushSync(() => {
    setCount(c => c + 1);
  });

  // DOM 업데이트 후 실행
  console.log(count);
}
```

#### 특징

- state 업데이트를 즉시 DOM 에 반영
- 배치 업데이트를 무시하고 동기적으로 처리
- 성능에 영향을 줄 수 있으므로 필요한 경우에만 사용

#### 주의사항

- 성능 최적화를 위해 React 는 여러 state 업데이트를 배치로 처리
- `flushSync` 는 이 배치 처리를 무시하고 즉시 DOM 을 업데이트
- 불필요한 사용은 성능 저하를 일으킬 수 있음
- DOM 측정이나 애니메이션과 같이 즉각적인 DOM 업데이트가 필요한 경우에만 사용

### 2-8. 주의사항

#### 1. Ref 사용 제한

- React가 관리하는 DOM 노드를 직접 수정하지 않기
- React의 선언적 프로그래밍 모델을 우선시
- 필요한 경우에만 Ref 사용

#### 2. Ref의 적절한 사용

- DOM 조작이 불가피한 경우에만 사용
- 가능한 React의 state와 props로 해결
- 서드파티 DOM 라이브러리와의 통합 시 활용
