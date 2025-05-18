import { useState } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ContactProps {
  contact: Contact;
}

export default function Contact({ contact }: ContactProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}
