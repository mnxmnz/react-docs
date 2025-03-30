import { useState, useCallback } from 'react';

export default function Form() {
  const [value, setValue] = useState('Change me');

  // TypeScript strict mode 에서는 useCallback 을 사용할 때 콜백 함수의 매개변수 타입을 명시적으로 지정해야 함
  // React.ChangeEventHandler<HTMLInputElement> 는 input 요소의 onChange 이벤트 핸들러에 대한 타입 제공
  // 이벤트 객체의 타입을 자동으로 추론하고 함수의 반환 타입도 void 로 지정
  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    event => {
      setValue(event.currentTarget.value);
    },
    [setValue],
  );

  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}
