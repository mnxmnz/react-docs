let nextId = 0;

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function createTodo(text: string, completed: boolean = false): Todo {
  return {
    id: nextId++,
    text,
    completed,
  };
}

export const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
