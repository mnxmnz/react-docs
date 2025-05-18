import { type Action } from './messengerReducer';

interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ChatProps {
  contact: Contact;
  message: string;
  dispatch: (action: Action) => void;
}

export default function Chat({ contact, message, dispatch }: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: 'sent_message',
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
