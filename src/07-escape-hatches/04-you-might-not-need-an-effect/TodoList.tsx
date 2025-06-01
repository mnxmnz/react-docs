import { useState } from 'react';
import { initialTodos, createTodo, Todo } from './todos';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <div>
      <label>
        <input type="checkbox" checked={showActive} onChange={e => setShowActive(e.target.checked)} />
        Show only active todos
      </label>
      <NewTodo onAdd={(newTodo: Todo) => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </div>
  );
}

interface NewTodoProps {
  onAdd: (todo: Todo) => void;
}

function NewTodo({ onAdd }: NewTodoProps) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
