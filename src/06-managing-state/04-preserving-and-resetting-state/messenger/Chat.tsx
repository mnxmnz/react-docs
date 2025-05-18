import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ChatProps {
  contact: Contact;
}

export default function Chat({ contact }: ChatProps) {
  const [text, setText] = useState('');

  return (
    <section className="chat">
      <textarea value={text} placeholder={'Chat to ' + contact.name} onChange={e => setText(e.target.value)} />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
