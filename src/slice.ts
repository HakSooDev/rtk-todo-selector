import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import mockTodos from "./mockData";
import { Subtask, Todo } from "./types";

const LOCAL_STORAGE_KEY = "todos";

const loadInitialState = () => {
  const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockTodos));
    return mockTodos;
  }
};

const initialState: Todo[] = loadInitialState(); // Using mock data as the initial state

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
      action: PayloadAction<{ todoId: string; subtask: Subtask }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.todoId);
      if (todo) {
        todo.subtasks.push(action.payload.subtask);
      }
    },
    removeSubtask: (
      state,
      action: PayloadAction<{ todoId: string; subtaskId: string }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.todoId);
      if (todo) {
        todo.subtasks = todo.subtasks.filter(
          (subtask) => subtask.id !== action.payload.subtaskId
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

store.subscribe(() => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(store.getState().todos)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
