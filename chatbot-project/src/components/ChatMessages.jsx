import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

export default function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useAutoScroll([chatMessages]);

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.length === 0 && (
                <div className="welcome-msg">
                    Welcome to the chatbot project! Send a message using the
                    textbox below
                </div>
            )}
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        sentTime={chatMessage.sentTime}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

//////////////////////////////////
function useAutoScroll(dependencies) {
    const containerRef = useRef(null);

    useEffect(() => {
        const containerEl = containerRef.current;

        if (containerEl) {
            containerEl.scrollTop = containerEl.scrollHeight;
        }
    }, dependencies);

    return containerRef;
}

<p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, suscipit
    natus. Consequuntur fugiat aliquid temporibus ipsa reprehenderit repudiandae
    corporis nulla modi est minima ea, ipsam saepe et harum quidem amet.
</p>;
