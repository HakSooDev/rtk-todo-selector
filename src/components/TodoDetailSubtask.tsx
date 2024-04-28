import { RootState, removeSubtask, useAppSelector } from "@/slice";
import { createSelector } from "@reduxjs/toolkit";
import { Dot, X } from "lucide-react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";

interface Props {
  todoId: string;
  subTaskId: string;
}

const SubtaskByTodoIdSubtaskIdFunc = (
  state: RootState,
  todoId: string,
  subtaskId: string
) =>
  state.todos
    .find((todo) => todo.id === todoId)
    ?.subtasks.find((subtask) => subtask.id === subtaskId);

const selectSubtaskByTodoIdSubtaskId = createSelector(
  [
    (state: RootState) => state,
    (_: RootState, todoId: string) => todoId,
    (_: RootState, __: string, subtaskId: string) => subtaskId,
  ],
  (state, todoId, subtaskId) =>
    SubtaskByTodoIdSubtaskIdFunc(state, todoId, subtaskId)
);

function TodoDetailSubtask({ todoId, subTaskId }: Props) {
  const dispatch = useDispatch();
  const subtask = useAppSelector((state: RootState) =>
    selectSubtaskByTodoIdSubtaskId(state, todoId, subTaskId)
  )!;

  const handleRemoveSubtask = () => {
    dispatch(removeSubtask({ todoId, subtaskId: subtask.id }));
  };

  return (
    <li
      key={subtask.id}
      className="flex items-center justify-between rounded-md bg-gray-100 p-3 shadow-sm transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="flex">
        <Dot size={24} />
        <span>{subtask.title}</span>
      </div>
      <Button variant="ghost" size="icon" onClick={handleRemoveSubtask}>
        <X size={18} />
      </Button>
    </li>
  );
}

export default memo(TodoDetailSubtask);
