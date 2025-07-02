import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value,
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value,
            },
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value,
            },
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value,
            },
        });
    }

    return (
        <>
            <label>
                Name:
                <input value={person.name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <br />
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <br />
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <br />
            <p>
                <i>{person.artwork.title}</i>
                {" by "}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </>
    );
}

/////////////////////////////////////////////
import { useImmer } from "use-immer";

export default function Form() {
    const [person, updatePerson] = useImmer({
        name: "Niki de Saint Phalle",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });

    function handleNameChange(e) {
        updatePerson((draft) => {
            draft.name = e.target.value;
        });
    }

    function handleTitleChange(e) {
        updatePerson((draft) => {
            draft.artwork.title = e.target.value;
        });
    }

    function handleCityChange(e) {
        updatePerson((draft) => {
            draft.artwork.city = e.target.value;
        });
    }

    function handleImageChange(e) {
        updatePerson((draft) => {
            draft.artwork.image = e.target.value;
        });
    }

    return (
        <>
            <label>
                Name:
                <input value={person.name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <br />
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <br />
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <br />
            <p>
                <i>{person.artwork.title}</i>
                {" by "}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </>
    );
}

////////////////////////////////////////////////
import { useState } from "react";

const initialPosition = {
    x: 0,
    y: 0,
};

export default function Canvas() {
    const [shape, setShape] = useState({
        color: "orange",
        position: initialPosition,
    });

    // function handleMove(dx, dy) {
    //     shape.position.x += dx;
    //     shape.position.y += dy;
    // }

    function handleMove(dx, dy) {
        setShape({
            ...shape,
            position: {
                x: shape.position.x + dx,
                y: shape.position.y + dy,
            },
        });
    }

    function handleColorChange(e) {
        setShape({
            ...shape,
            color: e.target.value,
        });
    }

    return (
        <>
            <select value={shape.color} onChange={handleColorChange}>
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

function Box({ children, color, position, onMove }) {
    const [lastCoordinates, setLastCoordinates] = useState(null);

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: "grab",
                backgroundColor: color,
                position: "absolute",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            }}
        >
            {children}
        </div>
    );
}

function Background({ position }) {
    return (
        <div
            style={{
                position: "absolute",
                transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
                width: 250,
                height: 250,
                backgroundColor: "rgba(200, 200, 0, 0.2)",
            }}
        />
    );
}

///////////////////////////////////////////////
import { useState } from "react";
import { useImmer } from "use-immer";

const initialPosition = {
    x: 0,
    y: 0,
};

export default function Canvas() {
    const [shape, updateShape] = useImmer({
        color: "orange",
        position: initialPosition,
    });

    // function handleMove(dx, dy) {
    //     shape.position.x += dx;
    //     shape.position.y += dy;
    // }

    // function handleMove(dx, dy) {
    //     setShape({
    //         ...shape,
    //         position: {
    //             x: shape.position.x + dx,
    //             y: shape.position.y + dy,
    //         },
    //     });
    // }

    function handleMove(dx, dy) {
        updateShape((draft) => {
            (draft.position.x += dx), (draft.position.y += dy);
        });
    }

    // function handleColorChange(e) {
    //     setShape({
    //         ...shape,
    //         color: e.target.value,
    //     });
    // }

    function handleColorChange(e) {
        updateShape((draft) => {
            draft.color = e.target.value;
        });
    }

    return (
        <>
            <select value={shape.color} onChange={handleColorChange}>
                <option value="orange">orange</option>
                <option value="lightpink">lightpink</option>
                <option value="aliceblue">aliceblue</option>
            </select>
            <Background position={initialPosition} />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    );
}

function Box({ children, color, position, onMove }) {
    const [lastCoordinates, setLastCoordinates] = useState(null);

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });
    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp() {
        setLastCoordinates(null);
    }

    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: 100,
                height: 100,
                cursor: "grab",
                backgroundColor: color,
                position: "absolute",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
            }}
        >
            {children}
        </div>
    );
}

function Background({ position }) {
    return (
        <div
            style={{
                position: "absolute",
                transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
                width: 250,
                height: 250,
                backgroundColor: "rgba(200, 200, 0, 0.2)",
            }}
        />
    );
}
