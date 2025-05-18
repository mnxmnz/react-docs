import { type Action } from './messengerReducer';

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
  selectedId: number;
  dispatch: (action: Action) => void;
}

export default function ContactList({ contacts, selectedId, dispatch }: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
