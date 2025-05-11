import { useState } from 'react';
import { foods, filterItems } from './data';

interface Item {
  id: number;
  name: string;
  description: string;
}

export default function FilterableList() {
  const [query, setQuery] = useState('');

  const filteredItems = filterItems(foods, query);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={filteredItems} />
    </>
  );
}

interface SearchBarProps {
  query: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ query, handleChange }: SearchBarProps) {
  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }: { items: Item[] }) {
  return (
    <table>
      {items.map(food => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}
