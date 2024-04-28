import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { generateRandomId } from "@/lib/utils";
import {
  RootState,
  addSubtask,
  removeTodo,
  toggleTodo,
  useAppSelector,
} from "@/slice";
import { createSelector } from "@reduxjs/toolkit";
import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ItemAdder from "./ItemAdder";
import TodoDetailCardTitle from "./TodoDetailCardTitle";
import TodoDetailSubtask from "./TodoDetailSubtask";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const selectTodoById = createSelector(
  (state: RootState) => state.todos,
  (_: RootState, selectedTodoId: string | null) => selectedTodoId,
  (todos, selectedTodoId) => todos.find((todo) => todo.id === selectedTodoId)
);

function TodoDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const selectedTodoId = searchParams.get("selectedTodo");

  const selectedTodo = useAppSelector((state) =>
    selectTodoById(state, selectedTodoId)
  );

  const handleTodoRemoveButtonClick = () => {
    setSearchParams({});
    dispatch(removeTodo(selectedTodo!.id));
  };

  const handleTodoCompleteToggle = () => {
    dispatch(toggleTodo(selectedTodo!.id));
  };

  const handleSubtaskAddButtonClick = useCallback(
    (content: string) => {
      dispatch(
        addSubtask({
          todoId: selectedTodo!.id,
          subtask: { id: generateRandomId(), title: content },
        })
      );
    },
    [dispatch, selectedTodo?.id]
  );

  return (
    <div className="flex-1 overflow-auto">
      {selectedTodo && (
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <TodoDetailCardTitle todoId={selectedTodo.id} />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleTodoRemoveButtonClick}
              >
                <X size={24} />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={selectedTodo.completed}
                id={`todo-detail-${selectedTodo.id}`}
                onCheckedChange={handleTodoCompleteToggle}
              />
              <label
                htmlFor={`todo-detail-${selectedTodo.id}`}
                className="text-gray-500 dark:text-gray-400"
              >
                {selectedTodo.completed ? "Completed" : "Incomplete"}
              </label>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h2 className="text-lg font-medium">Subtasks</h2>
            <ul className="space-y-2">
              {selectedTodo.subtasks.map((subtask) => (
                <TodoDetailSubtask
                  key={subtask.id}
                  todoId={selectedTodo.id}
                  subTaskId={subtask.id}
                />
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <ItemAdder onClickAdd={handleSubtaskAddButtonClick} />
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export default memo(TodoDetail);
