import { createContext, useContext, useMemo } from 'react';

type ComplexObject = {
  kind: string;
};

// Context 를 생성할 때는 타입에 `null` 을 명시적으로 포함
// Context 가 Provider 없이 사용될 수 있는 상황 고려
const Context = createContext<ComplexObject | null>(null);

// Context 를 사용하는 커스텀 Hook 생성
// 런타임에 Context 의 존재 여부를 검사하고 Provider 가 없는 경우 에러 throw
const useGetComplexObject = () => {
  const object = useContext(Context);

  if (!object) {
    throw new Error('useGetComplexObject must be used within a Provider');
  }

  return object;
};

export default function MyApp() {
  const object = useMemo(() => ({ kind: 'complex' }), []);

  return (
    <Context.Provider value={object}>
      <MyComponent />
    </Context.Provider>
  );
}

function MyComponent() {
  const object = useGetComplexObject();

  return (
    <div>
      <p>Current object: {object.kind}</p>
    </div>
  );
}
