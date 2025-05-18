import { useState } from 'react';

export default function Form() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      <Input />
      <button onClick={() => setShowHint(!showHint)}>{showHint ? 'Hide hint' : 'Show hint'}</button>
      {showHint ? <p>Hint: Your favorite city?</p> : null}
    </div>
  );
}

function Input() {
  const [text, setText] = useState('');

  return <textarea value={text} onChange={e => setText(e.target.value)} />;
}
