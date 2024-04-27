import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockTodos from "./mockData";
import { Subtask, Todo } from "./types";

const initialState: Todo[] = mockTodos; // Using mock data as the initial state

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    addSubtask: (
      state,
      action: PayloadAction<{ todoId: string; subtask: Subtask }>,
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.todoId);
      if (todo) {
        todo.subtasks.push(action.payload.subtask);
      }
    },
    removeSubtask: (
      state,
      action: PayloadAction<{ todoId: string; subtaskId: string }>,
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.todoId);
      if (todo) {
        todo.subtasks = todo.subtasks.filter(
          (subtask) => subtask.id !== action.payload.subtaskId,
        );
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, addSubtask, removeSubtask } =
  todosSlice.actions;
const todosReducer = todosSlice.reducer;

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
