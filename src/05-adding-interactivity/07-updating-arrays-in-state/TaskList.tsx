import { useState } from 'react';

interface TaskListProps {
  todos: { id: number; title: string; done: boolean }[];
  onChangeTodo: (todo: { id: number; title: string; done: boolean }) => void;
  onDeleteTodo: (id: number) => void;
}

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }: TaskListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

interface TaskProps {
  todo: { id: number; title: string; done: boolean };
  onChange: (todo: { id: number; title: string; done: boolean }) => void;
  onDelete: (id: number) => void;
}

function Task({ todo, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={e => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
