import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
import dayjs from "dayjs";

function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function sendMessage() {
        if (isLoading || inputText === "") {
            return;
        }

        setIsLoading(true);

        const currentTime = dayjs().format("h:mma");

        // add user message
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                sentTime: currentTime,
                id: crypto.randomUUID(),
            },
        ];

        setInputText("");

        // show loading spinner while waiting res to come
        setChatMessages([
            ...newChatMessages,
            {
                message: (
                    <img
                        src="loading-spinner.gif"
                        className="loading-spinner"
                    />
                ),
                sender: "robot",
                id: crypto.randomUUID(),
            },
        ]);

        // waiting for the response
        const response = await Chatbot.getResponseAsync(inputText);

        const responseTime = dayjs().format("h:mma");

        // add the response
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                sentTime: responseTime,
                id: crypto.randomUUID(),
            },
        ]);

        setIsLoading(false);
    }

    function handleClearMsgBtn() {
        setChatMessages([]);
        localStorage.setItem("messages", JSON.stringify(chatMessages));
    }

    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                value={inputText}
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        sendMessage();
                    } else if (e.key === "Escape") {
                        setInputText("");
                    }
                }}
            />
            <button className="send-button" onClick={sendMessage}>
                Send
            </button>
            <button className="clear-btn" onClick={handleClearMsgBtn}>
                Clear
            </button>
        </div>
    );
}

export default ChatInput;
