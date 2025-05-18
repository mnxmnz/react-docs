interface Task {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };

export default function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      if (!action.task) {
        throw Error('Task is required for "changed" action');
      }
      return tasks.map(t => {
        if (t.id === action.task!.id) {
          return action.task!;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action type');
    }
  }
}
