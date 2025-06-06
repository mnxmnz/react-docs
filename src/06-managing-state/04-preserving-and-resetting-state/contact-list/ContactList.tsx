import { useState } from 'react';
import Contact from './Contact';

const CONTACTS = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' },
];

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...CONTACTS];

  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked);
          }}
        />
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
