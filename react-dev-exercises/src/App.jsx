import { useEffect, useState } from "react";

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (!inputText.trim()) return;
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                title: inputText.trim(),
                completed: false,
            },
        ]);
        setInputText("");
    };

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id, newText) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, title: newText } : todo
            )
        );
    };

    const handleToggle = (id, isCompleted) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: isCompleted } : todo
            )
        );
    };

    return (
        <>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </>
    );
}

function App() {
    return <TodoApp />;
}

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.title);

    const handleSaveBtn = () => {
        if (!newText.trim()) return;
        onEdit(todo.id, newText.trim());
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <input
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => onToggle(todo.id, e.target.checked)}
                    />
                    {todo.completed ? (
                        <del>{todo.title}</del>
                    ) : (
                        <span>{todo.title}</span>
                    )}
                </>
            )}
            <button
                onClick={isEditing ? handleSaveBtn : () => setIsEditing(true)}
            >
                {isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}
