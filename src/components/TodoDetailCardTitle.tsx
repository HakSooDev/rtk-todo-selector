import { RootState, useAppSelector } from "@/slice";
import { createSelector } from "@reduxjs/toolkit";
import { memo } from "react";
import { CardTitle } from "./ui/card";

interface Props {
  todoId: string;
}

const selectTodoTitleByIdSelector = createSelector(
  (state: RootState) => state.todos,
  (_: RootState, selectedTodoId: string | null) => selectedTodoId,
  (todos, selectedTodoId) =>
    todos.find((todo) => todo.id === selectedTodoId)?.title
);

function TodoDetailCardTitle({ todoId }: Props) {
  const title = useAppSelector((state: RootState) =>
    selectTodoTitleByIdSelector(state, todoId)
  );

  return <CardTitle>{title}</CardTitle>;
}

export default memo(TodoDetailCardTitle);
