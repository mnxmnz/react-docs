import { useState } from 'react';

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <div>
        <h1>Thanks for using our services!</h1>
        <button
          onClick={() => {
            setMessage('');
            setShowForm(true);
          }}
        >
          Open chat
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
      <button type="submit" disabled={message === ''}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message: string) {
  console.log('Sending message: ' + message);
}
