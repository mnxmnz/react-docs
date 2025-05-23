import { useState } from 'react';

import Chat from './Chat';
import ContactList from './ContactList';

const CONTACTS = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

export default function Messenger() {
  const [to, setTo] = useState(CONTACTS[0]);

  return (
    <div>
      <ContactList contacts={CONTACTS} onSelect={contact => setTo(contact)} />
      <Chat key={to.id} contact={to} />
    </div>
  );
}
