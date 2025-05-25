import { useRef, useImperativeHandle } from 'react';

interface MyInputHandle {
  focus: () => void;
}

interface MyInputProps {
  ref: React.RefObject<MyInputHandle | null>;
}

function MyInput({ ref }: MyInputProps) {
  const realInputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      if (realInputRef.current) {
        realInputRef.current.focus();
      }
    },
  }));

  return <input ref={realInputRef} />;
}

export default function Form() {
  const inputRef = useRef<MyInputHandle>(null);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
