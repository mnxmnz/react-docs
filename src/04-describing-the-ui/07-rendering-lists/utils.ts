import { Person } from './data';

export function getImageUrl(person: Person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}
