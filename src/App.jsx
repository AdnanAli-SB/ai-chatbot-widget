import "./App.css";
import { useState } from "react";
import Head from "./Head";
import Body from "./Body";
import Nav from "./Nav";
import NewsDetailHead from "./NewsDetailHead";
import TabHead from "./TabHead";

const TAB_HEAD_TABS = ["News", "Help", "Tickets", "Message"];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedHelpArticle, setSelectedHelpArticle] = useState(null);
  const [selectedHelpCategory, setSelectedHelpCategory] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");

  const handleSendFromHome = (text) => {
    setActiveTab("Message");
    setIsChatOpen(true);
    setPendingMessage(text);
  };

  const handleBack = () => {
    if (selectedArticle) {
      setSelectedArticle(null);
      setIsExpanded(false);
    } else if (selectedHelpArticle) {
      setSelectedHelpArticle(null);
      setIsExpanded(false);
    } else if (selectedHelpCategory) {
      setSelectedHelpCategory(null);
      setIsExpanded(false);
    }
  };

  const widgetClass = [
    "chatbotAgent",
    isOpen ? "active" : "",
    isExpanded ? "expanded" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const isDetailOpen = !!(selectedArticle || selectedHelpArticle || selectedHelpCategory);

  const renderHeader = () => {
    if (isDetailOpen) {
      return (
        <NewsDetailHead
          onBack={handleBack}
          onClose={() => setIsOpen(false)}
          onExpand={() => setIsExpanded((prev) => !prev)}
          isExpanded={isExpanded}
        />
      );
    }
    if (activeTab === "Message" && isChatOpen) {
      return (
        <NewsDetailHead
          onBack={() => { setIsChatOpen(false); setIsExpanded(false); }}
          onClose={() => setIsOpen(false)}
          onExpand={() => setIsExpanded((prev) => !prev)}
          isExpanded={isExpanded}
        />
      );
    }
    if (TAB_HEAD_TABS.includes(activeTab)) {
      return <TabHead title={activeTab} onClose={() => setIsOpen(false)} />;
    }
    return <Head setToggle={isOpen} getToggle={(x) => setIsOpen(x)} />;
  };

  return (
    <div className="chatbot">
      <div className={widgetClass}>
        <div className="chatbot-inner">
          {renderHeader()}
          <Body
            activeTab={activeTab}
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
            selectedHelpArticle={selectedHelpArticle}
            setSelectedHelpArticle={setSelectedHelpArticle}
            selectedHelpCategory={selectedHelpCategory}
            setSelectedHelpCategory={setSelectedHelpCategory}
            setActiveTab={setActiveTab}
            isChatOpen={isChatOpen}
            setIsChatOpen={setIsChatOpen}
            onSendFromHome={handleSendFromHome}
            pendingMessage={pendingMessage}
            clearPendingMessage={() => setPendingMessage("")}
          />
          <div className={`nav-wrapper${isDetailOpen ? " nav-hidden" : ""}`}>
            <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
      <button className="bot-button" onClick={() => setIsOpen(!isOpen)}>
        <img src="/chat-bot.png" alt=";" />
      </button>
    </div>
  );
}

export default App;
