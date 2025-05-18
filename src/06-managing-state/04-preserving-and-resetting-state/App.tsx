import ScoreBoard from './ScoreBoard';
import Messenger from './messenger/Messenger';
import Form from './Form';
import Input from './Input';
import ContactManager from './contact-manager/ContactManager';
import Gallery from './Gallery';
import ContactList from './contact-list/ContactList';

export default function App() {
  return (
    <div>
      <ScoreBoard />
      <Messenger />
      <Form />
      <Input />
      <ContactManager />
      <Gallery />
      <ContactList />
    </div>
  );
}
