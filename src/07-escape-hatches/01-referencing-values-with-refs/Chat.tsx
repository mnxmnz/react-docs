import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);

  const timeoutID = useRef<number | null>(null);

  function handleSend() {
    setIsSending(true);

    timeoutID.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);

    if (timeoutID.current !== null) {
      clearTimeout(timeoutID.current);
    }
  }

  return (
    <div>
      <input disabled={isSending} value={text} onChange={e => setText(e.target.value)} />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </div>
  );
}
