import { PlusIcon } from "lucide-react";
import { memo, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props {
  onClickAdd: (content: string) => void;
}

function ItemAdder({ onClickAdd }: Props) {
  const [error, setError] = useState<string>("");
  const input = useRef<HTMLInputElement>(null);

  const handleAddItem = () => {
    if (!input.current!.value) {
      setError("Please enter content");
      return;
    }

    onClickAdd(input.current!.value);
    setError("");
    input.current!.value = "";
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 ">
        <Input
          className="h-12 w-full px-4"
          id="new-todo"
          placeholder="Enter new item"
          ref={input}
          onChange={(e) => {
            input.current!.value = e.target.value;
          }}
        />
        <Button className="px-6 py-3" size="lg" onClick={handleAddItem}>
          <PlusIcon className="h-6 w-6 mr-2" />
          New Item
        </Button>
      </div>
      <p className="text-red-500 text-sm mt-1 ml-1 h-4">{error}</p>
    </div>
  );
}

export default memo(ItemAdder);
