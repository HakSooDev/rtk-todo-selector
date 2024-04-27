export interface Subtask {
  id: string;
  title: string;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  subtasks: Subtask[];
}
