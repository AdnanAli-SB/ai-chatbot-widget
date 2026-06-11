import { useState, useRef, useEffect } from "react";

const TIPS = [
  "How do I get started?",
  "What features are available?",
  "Show me a quick tip",
  "Talk to a human agent",
];

const MOCK_CONVERSATIONS = [
  {
    id: 1,
    preview: "Hey there 👋 I am your AI Assistant",
    time: new Date(Date.now() - 10 * 60 * 1000),
  },
  {
    id: 2,
    preview: "Hey there 👋 I am your AI Assistant",
    time: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  },
];

const relativeTime = (date) => {
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins} minute${mins !== 1 ? "s" : ""} ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs !== 1 ? "s" : ""} ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days} day${days !== 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  return `${months} month${months !== 1 ? "s" : ""} ago`;
};

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22 11 13 2 9l20-7z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BotAvatar = ({ size = 32 }) => (
  <div className="msg-bot-avatar" style={{ width: size, height: size }}>
    <img
      src={`${import.meta.env.BASE_URL}chat-bot.png`}
      alt="AI"
      style={{ width: "60%", height: "60%", objectFit: "contain" }}
    />
  </div>
);

const formatTime = (date) => {
  const now = new Date();
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return isToday
    ? `Today, ${time}`
    : `${date.toLocaleDateString([], { month: "short", day: "numeric" })}, ${time}`;
};

const MessagePage = ({ chatStarted, setChatStarted, pendingMessage, clearPendingMessage }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [tipsVisible, setTipsVisible] = useState(true);
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    let timer;
    if (chatStarted && messages.length === 0) {
      const initial = [
        {
          id: 1,
          from: "bot",
          text: "Hey! 👋 Welcome — I'm here to help. What can I do for you today?",
          showTips: true,
          timestamp: new Date(),
        },
      ];
      if (pendingMessage) {
        setTipsVisible(false);
        initial.push({ id: 2, from: "user", text: pendingMessage, timestamp: new Date() });
        clearPendingMessage();
        timer = setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { id: Date.now(), from: "bot", text: "Thanks for reaching out! Our team will get back to you shortly.", timestamp: new Date() },
          ]);
        }, 800);
      }
      setMessages(initial);
    }
    if (!chatStarted) {
      setMessages([]);
      setTipsVisible(true);
      setInput("");
    }
    return () => clearTimeout(timer);
  }, [chatStarted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTipsVisible(false);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: trimmed, timestamp: new Date() },
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "bot",
          text: "Thanks for reaching out! Our team will get back to you shortly.",
          timestamp: new Date(),
        },
      ]);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  if (!chatStarted) {
    return (
      <div className="msg-prechat">
        <div className="msg-convo-list">
          {MOCK_CONVERSATIONS.map((convo) => (
            <button
              key={convo.id}
              className="msg-convo-item"
              onClick={() => setChatStarted(true)}
            >
              <BotAvatar size={38} />
              <div className="msg-convo-info">
                <p className="msg-convo-preview">{convo.preview}</p>
                <span className="msg-convo-time">
                  {relativeTime(convo.time)}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="msg-prechat-footer">
          <button
            className="msg-start-btn"
            onClick={() => setChatStarted(true)}
          >
            Send Message
            <img src="./bubble-chat.png" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="msg-chat">
      <div className="msg-chat-intro">
        <BotAvatar size={44} />
        <div className="msg-chat-intro-info">
          <span className="msg-chat-intro-name">AI Assistant</span>
          <span className="msg-chat-intro-status">
            <span className="msg-chat-intro-dot" />
            Online
          </span>
        </div>
      </div>
      <div className="msg-chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`msg-row msg-row--${msg.from}`}>
            <div className="msg-bubble-wrap">
              <div className={`msg-bubble msg-bubble--${msg.from}`}>
                {msg.text}
              </div>
              {msg.timestamp && (
                <span className="msg-time">{formatTime(msg.timestamp)}</span>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      {tipsVisible && (
        <div className="msg-tips">
          {TIPS.map((tip) => (
            <button
              key={tip}
              className="msg-tip-btn"
              onClick={() => sendMessage(tip)}
            >
              {tip}
            </button>
          ))}
        </div>
      )}
      <div className="msg-chat-input-area">
        <textarea
          ref={textareaRef}
          className="msg-textarea"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        <button
          className="msg-send-btn"
          onClick={() => sendMessage(input)}
          disabled={!input.trim()}
          aria-label="Send"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default MessagePage;
