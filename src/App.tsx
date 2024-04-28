import Header from "@/components/Navbar";
import TodoDetail from "@/components/TodoDetail";
import TodoList from "@/components/TodoList";

function App() {
  return (
    <div className="flex h-screen w-full">
      <section className="flex w-1/3 flex-col border-r bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-950">
        <Header />
        <TodoList />
      </section>
      <section className="flex w-2/3 flex-col p-4">
        <TodoDetail />
      </section>
    </div>
  );
}

export default App;
