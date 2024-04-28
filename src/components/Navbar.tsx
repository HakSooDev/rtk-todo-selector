import { CheckCircleIcon } from "lucide-react";

function Header() {
  return (
    <header className="flex gap-2 items-center mb-3">
      <CheckCircleIcon className="h-6 w-6 text-blue-500" />
      <h1 className="text-lg font-medium ">Todo App</h1>
    </header>
  );
}

export default Header;
