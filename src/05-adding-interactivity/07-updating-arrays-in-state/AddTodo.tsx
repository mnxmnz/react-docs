import { useState } from 'react';

interface AddTodoProps {
  onAddTodo: (title: string) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState('');

  return (
    <div>
      <input placeholder="Add todo" value={title} onChange={e => setTitle(e.target.value)} />
      <button
        onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </div>
  );
}
