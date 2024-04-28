import { ChevronRightIcon } from "lucide-react";
import { memo } from "react";
import { useSearchParams } from "react-router-dom";
import TodoItemTitle from "./\bTodoItemTitle";

interface Props {
  todoId: string;
}

function TodoListItem({ todoId }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTodoClick = (todoId: string) => {
    const selectedTodoId = searchParams.get("selectedTodo");

    if (selectedTodoId === todoId) {
      setSearchParams({});
      return;
    }

    setSearchParams({ selectedTodo: todoId });
  };

  return (
    <li
      className="rounded-md bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 flex items-center gap-3 cursor-pointer"
      onClick={() => handleTodoClick(todoId)}
    >
      <TodoItemTitle todoId={todoId} />
      <MemoizedChevronRightIcon className="h-6 w-6 text-gray-500  dark:text-gray-400 ml-auto mr-0" />
    </li>
  );
}

const MemoizedChevronRightIcon = memo(ChevronRightIcon);

export default memo(TodoListItem);
