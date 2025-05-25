import { useState, useRef } from 'react';

export default function Message() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
