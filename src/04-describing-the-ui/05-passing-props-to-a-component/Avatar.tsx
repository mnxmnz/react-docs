import { Person } from './type';
import { getImageUrl } from './util';

interface AvatarProps {
  person: Person;
  size?: number;
}

export default function Avatar({ person, size = 50 }: AvatarProps) {
  return <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size} />;
}
