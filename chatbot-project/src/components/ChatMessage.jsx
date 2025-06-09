import robotProfileImage from "../assets/robot.png";
import userProfileImage from "../assets/user.png";
import "./ChatMessage.css";

function ChatMessage({ message, sender, sentTime }) {
    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;

    return (
        <div className={sender === "user" ? "chat-msg-user" : "chat-msg-robot"}>
            {sender === "robot" && (
                <img src={robotProfileImage} className="chat-msg-profile" />
            )}
            <div className="chat-msg">
                <div className="chat-msg-text">{message}</div>
                <div className="chat-msg-time">{sentTime}</div>
            </div>

            {sender === "user" && (
                <img src={userProfileImage} className="chat-msg-profile" />
            )}
        </div>
    );
}

export default ChatMessage;
