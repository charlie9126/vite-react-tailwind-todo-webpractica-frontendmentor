import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    { id: 1, title: "Complete online JavaScript course", completed: true },
    { id: 2, title: "Jog around the park 3x", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Read for 1 hour", completed: false },
    { id: 5, title: "Pick up groceries", completed: false },
    { id: 6, title: "Complete Todo App on Frontend Mentor", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");
    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-desktop-light.jpg')] bg-contain bg-no-repeat">
                <Header />

                <main className="container mx-auto mt-8 px-4">
                    <TodoCreate createTodo={createTodo} />

                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />

                    <TodoComputed
                        computedItemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />

                    <TodoFilter changeFilter={changeFilter} filter={filter} />
                </main>

                <footer className="mt-8 text-center">
                    Drag and drop to reorder list
                </footer>
            </div>
        </>
    );
};
export default App;
