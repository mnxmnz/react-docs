import { Person } from './type';

export function getImageUrl(person: Person, size = 's') {
  return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}
