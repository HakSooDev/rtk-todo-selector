import { RootState, useAppSelector } from "@/slice";
import { createSelector } from "@reduxjs/toolkit";
import { memo } from "react";

interface Props {
  todoId: string;
}

const selectTodoByIdSelector = createSelector(
  (state: RootState) => state.todos,
  (_: RootState, todoId: string | null) => todoId,
  (todos, todoId) => todos.find((todo) => todo.id === todoId)
);

const selectTodoTitleSelector = createSelector(
  selectTodoByIdSelector,
  (todo) => todo?.title
);

const selectTodoCompletionSelector = createSelector(
  selectTodoByIdSelector,
  (todo) => todo?.completed
);

const selectTodoTitleAndCompletionById = createSelector(
  selectTodoTitleSelector,
  selectTodoCompletionSelector,
  (title, completed) => ({ title, completed })
);

function TodoItemTitle({ todoId }: Props) {
  const titleAndCompletion = useAppSelector((state: RootState) =>
    selectTodoTitleAndCompletionById(state, todoId)
  );

  return (
    <span
      className={`text-lg ${titleAndCompletion?.completed && "line-through"}`}
    >
      {titleAndCompletion?.title}
    </span>
  );
}

export default memo(TodoItemTitle);
