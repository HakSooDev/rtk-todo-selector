import ItemAdder from "@/components/ItemAdder";
import { addTodo, useAppSelector } from "@/slice";
import { useDispatch } from "react-redux";
import TodoListItem from "./TodoListItem";
import { useCallback } from "react";
import { generateRandomId } from "@/lib/utils";

function TodoList() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubtaskAddButtonClick = useCallback(
    (content: string) => {
      dispatch(
        addTodo({
          id: generateRandomId(),
          title: content,
          completed: false,
          subtasks: [],
        })
      );
    },
    [dispatch]
  );

  return (
    <>
      <ul className="space-y-2 overflow-auto flex-1 mb-3">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todoId={todo.id} />
        ))}
      </ul>
      <ItemAdder onClickAdd={handleSubtaskAddButtonClick} />
    </>
  );
}

export default TodoList;
