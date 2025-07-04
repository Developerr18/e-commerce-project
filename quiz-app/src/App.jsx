import { useState } from "react";
import "./App.css";

export default function App() {
    const [selectedId, setSelectedId] = useState(1);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    const currentQuestion = quizData.find((q) => q.id === selectedId);

    const handleOptionClick = (option) => {
        if (showAnswer) return;

        setSelectedOption(option);
        setShowAnswer(true);

        if (option === currentQuestion.answer) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNextBtn = () => {
        setSelectedId((prevId) => prevId + 1);
        setSelectedOption(null);
        setShowAnswer(false);
    };

    return (
        <>
            {quizData.length >= selectedId ? (
                <>
                    <div>{`Question ${selectedId} out of ${quizData.length}`}</div>
                    <h4>Score : {score}</h4>
                    <h3>Question : {currentQuestion.question}</h3>
                    <ol style={{ listStyle: "none", padding: 0 }}>
                        {currentQuestion.options.map((option, index) => {
                            let borderColor = "gray";

                            if (showAnswer) {
                                if (option === currentQuestion.answer) {
                                    borderColor = "green";
                                } else if (option === selectedOption) {
                                    borderColor = "red";
                                }
                            } else if (option === selectedOption) {
                                borderColor = "blue";
                            }

                            return (
                                <li key={index} style={{ marginBottom: "8px" }}>
                                    <button
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                        style={{
                                            padding: "8px 16px",
                                            border: `7px solid ${borderColor}`,
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            background: "white",
                                            width: "100%",
                                            textAlign: "left",
                                        }}
                                    >
                                        {option}
                                    </button>
                                </li>
                            );
                        })}
                    </ol>
                    <button onClick={handleNextBtn}>Next</button>
                </>
            ) : (
                <h2>
                    Final Score : {score} / {quizData.length}
                </h2>
            )}
        </>
    );
}

const quizData = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "Lisbon"],
        answer: "Paris",
    },
    {
        id: 2,
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
    },
    {
        id: 3,
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Control Style Sheet",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        id: 4,
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        answer: "<ul>",
    },
    {
        id: 5,
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "None of the above"],
        answer: "1995",
    },
];
