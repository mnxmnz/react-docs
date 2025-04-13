import { people } from './data';
import { getImageUrl } from './utils';

export default function List() {
  const listItems = people.map(person => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <section>
      <h2>Scientists</h2>
      <ul>{listItems}</ul>
    </section>
  );
}
