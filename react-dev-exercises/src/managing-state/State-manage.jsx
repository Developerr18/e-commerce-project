import { useState } from "react";
/*
export default function Form() {
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    if (status === "success") {
        return <h1>That's right!</h1>;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitForm(answer);
            setStatus("success");
        } catch (err) {
            setStatus("typing");
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable
                water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === "submitting"}
                />
                <br />
                <button
                    disabled={answer.length === 0 || status === "submitting"}
                >
                    Submit
                </button>
                {error !== null && (
                    <p style={{ color: "red" }}>{error.message}</p>
                )}
            </form>
        </>
    );
}

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== "lima";
            if (shouldError) {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            } else {
                resolve();
            }
        }, 1500);
    });
}
*/

/////////////////////////////////////////
/*
export default function EditProfile() {
    const [firstName, setFirstName] = useState("Jane");
    const [lastName, setLastName] = useState("Jacobs");
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First name:
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <br />
            <label>
                Last name:
                {isEditing ? (
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                ) : (
                    <b>{lastName}</b>
                )}
            </label>
            <br />
            <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
            <p>
                <i>
                    Hello, {firstName} {lastName} !
                </i>
            </p>
        </form>
    );
}
*/

////////////////////////////////////////////////
/*
const initialItems = [
    { title: "biscuit", id: 0 },
    { title: "beer", id: 1 },
    { title: "protein bar", id: 2 },
];

export default function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find((item) => item.id === selectedId);

    const handleChangeItem = (id, newTitle) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, title: newTitle } : item
            )
        );
    };

    return (
        <>
            <h2>What's your travel snack?</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input
                            value={item.title}
                            onChange={(e) =>
                                handleChangeItem(item.id, e.target.value)
                            }
                        />
                        <button onClick={() => setSelectedId(item.id)}>
                            Choose
                        </button>
                    </li>
                ))}
            </ul>
            <p>You picked {selectedItem.title}</p>
        </>
    );
}
*/

/////////////////////////////////////////////
/*
let nextId = 3;
const initialItems = [
    { id: 0, title: "Warm socks", packed: true },
    { id: 1, title: "Travel journal", packed: false },
    { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
    const [items, setItems] = useState(initialItems);

    const packed = items.filter((item) => item.packed).length;

    function handleAddItem(title) {
        setItems([
            ...items,
            {
                id: nextId++,
                title: title,
                packed: false,
            },
        ]);
    }

    function handleChangeItem(nextItem) {
        setItems(
            items.map((item) => {
                if (item.id === nextItem.id) {
                    return nextItem;
                } else {
                    return item;
                }
            })
        );
    }

    function handleDeleteItem(itemId) {
        setItems(items.filter((item) => item.id !== itemId));
    }

    return (
        <>
            <AddItem onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
            <hr />
            <b>
                {packed} out of {items.length} packed!
            </b>
        </>
    );
}

function AddItem({ onAddItem }) {
    const [newItem, setNewItem] = useState("");

    return (
        <>
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={() => onAddItem(newItem)}>Add</button>
        </>
    );
}

function PackingList({ items, onChangeItem, onDeleteItem }) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.packed}
                        onChange={(e) =>
                            onChangeItem({ ...item, packed: e.target.checked })
                        }
                    />
                    {item.title}
                    <button onClick={() => onDeleteItem(item.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
*/

////////////////////////////////////////////////////
/*
export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedLetterId, setHighlightedLetterId] = useState(null);

    function handleHover(letterId) {
        setHighlightedLetterId(letterId);
    }

    function handleStar(starredId) {
        setLetters(
            letters.map((letter) => {
                if (letter.id === starredId) {
                    return {
                        ...letter,
                        isStarred: !letter.isStarred,
                    };
                } else {
                    return letter;
                }
            })
        );
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map((letter) => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={letter.id === highlightedLetterId}
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}

function Letter({ letter, isHighlighted, onHover, onToggleStar }) {
    return (
        <li
            style={{
                backgroundColor: isHighlighted ? "red" : "transparent",
                color: isHighlighted ? "white" : "black",
                padding: "5px",
            }}
            onFocus={() => {
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <button
                onClick={() => {
                    onToggleStar(letter.id);
                }}
            >
                {letter.isStarred ? "Unstar" : "Star"}
            </button>
            {letter.subject}
        </li>
    );
}

const initialLetters = [
    {
        id: 0,
        subject: "Ready for adventure?",
        isStarred: true,
    },
    {
        id: 1,
        subject: "Time to check in!",
        isStarred: false,
    },
    {
        id: 2,
        subject: "Festival Begins in Just SEVEN Days!",
        isStarred: false,
    },
];
*/

/////////////////////////////////////////////////////
/*
export default function App() {
    const [listItems, setListItems] = useState(letters);

    const selectedItemsCount = listItems.filter(
        (item) => item.isStarred
    ).length;

    const handleChangeItem = (changedItem) => {
        setListItems(
            listItems.map((item) =>
                item.id === changedItem.id
                    ? { ...item, isStarred: changedItem.isStarred }
                    : item
            )
        );
    };

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {listItems.map((item) => (
                    <li key={item.id}>
                        <Item item={item} onChange={handleChangeItem} />
                    </li>
                ))}
            </ul>
            <hr />
            <h3>You selected {selectedItemsCount} letters</h3>
        </>
    );
}

function Item({ item, onChange }) {
    return (
        <>
            <input
                type="checkbox"
                checked={item.isStarred}
                onChange={(e) =>
                    onChange({ ...item, isStarred: e.target.checked })
                }
            />
            {item.subject}
        </>
    );
}

const letters = [
    {
        id: 0,
        subject: "Ready for adventure?",
        isStarred: true,
    },
    {
        id: 1,
        subject: "Time to check in!",
        isStarred: false,
    },
    {
        id: 2,
        subject: "Festival Begins in Just SEVEN Days!",
        isStarred: false,
    },
];
*/

//////////////////////////////////////////////////

export default function MailClient() {
    const [selectedIds, setSelectedIds] = useState([]);

    const selectedCount = selectedIds.length;

    function handleToggle(toggledId) {
        if (selectedIds.includes(toggledId)) {
            setSelectedIds(selectedIds.filter((id) => id !== toggledId));
        } else {
            setSelectedIds([...selectedIds, toggledId]);
        }
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map((letter) => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // TODO: allow multiple selection
                            selectedIds.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>You selected {selectedCount} letters</b>
                </p>
            </ul>
        </>
    );
}

function Letter({ letter, onToggle, isSelected }) {
    return (
        <li className={isSelected ? "selected" : ""}>
            <label>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    );
}

const letters = [
    {
        id: 0,
        subject: "Ready for adventure?",
        isStarred: true,
    },
    {
        id: 1,
        subject: "Time to check in!",
        isStarred: false,
    },
    {
        id: 2,
        subject: "Festival Begins in Just SEVEN Days!",
        isStarred: false,
    },
];
