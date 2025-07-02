/*
import { useState } from "react";

const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    function handleToggleMyList(artworkId, nextSeen) {
        setMyList((prevMyList) =>
            prevMyList.map((artwork) =>
                artwork.id === artworkId
                    ? { ...artwork, seen: nextSeen }
                    : artwork
            )
        );
    }

    function handleToggleYourList(artworkId, nextSeen) {
        setYourList(
            yourList.map((artwork) =>
                artwork.id === artworkId
                    ? { ...artwork, seen: nextSeen }
                    : artwork
            )
        );
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => {
                                onToggle(artwork.id, e.target.checked);
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}
*/

//////////////////////////////////////////////
/*
import { useImmer } from "use-immer";

const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
    const [myList, updateMyList] = useImmer(initialList);
    const [yourList, updateYourList] = useImmer(initialList);

    /*
    function handleToggleYourList(artworkId, nextSeen) {
        setYourList(
            yourList.map((artwork) =>
                artwork.id === artworkId
                    ? { ...artwork, seen: nextSeen }
                    : artwork
            )
        );
    } */

/*
    function handleToggleMyList(artworkId, nextSeen) {
        updateMyList((draft) => {
            const artwork = draft.find((a) => a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }

    function handleToggleYourList(artworkId, nextSeen) {
        updateYourList((draft) => {
            const artwork = draft.find((a) => a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => {
                                onToggle(artwork.id, e.target.checked);
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}
*/

/////////////////////////////////////////
/*
import { useState } from "react";

let nextId = 3;
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title) {
        setTodos([...todos, { id: nextId++, title, done: false }]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(
            todos.map((todo) => (todo.id === nextTodo.id ? nextTodo : todo))
        );
    }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("");
    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle("");
                    onAddTodo(title);
                }}
            >
                Add
            </button>
        </>
    );
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    );
} */

////////////////////////////////////////////////////
import { useImmer } from "use-immer";
import { useState } from "react";

let nextId = 3;
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
    const [todos, updateTodos] = useImmer(initialTodos);

    // function handleAddTodo(title) {
    //     setTodos([...todos, { id: nextId++, title, done: false }]);
    // }

    function handleAddTodo(title) {
        updateTodos((draft) => {
            draft.push({
                id: nextId++,
                title,
                done: false,
            });
        });
    }

    // function handleChangeTodo(nextTodo) {
    //     setTodos(
    //         todos.map((todo) => (todo.id === nextTodo.id ? nextTodo : todo))
    //     );
    // }

    function handleChangeTodo(nextTodo) {
        updateTodos((draft) => {
            const todo = draft.find((todo) => todo.id === nextTodo.id);
            todo.title = nextTodo.title;
            todo.done = nextTodo.done;
        });
    }

    // function handleDeleteTodo(todoId) {
    //     setTodos(todos.filter((todo) => todo.id !== todoId));
    // }

    function handleDeleteTodo(todoId) {
        updateTodos((draft) => {
            const index = draft.findIndex((todo) => todo.id === todoId);
            draft.splice(index, 1);
        });
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}

function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("");
    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle("");
                    onAddTodo(title);
                }}
            >
                Add
            </button>
        </>
    );
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    );
}
