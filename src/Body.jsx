import Forminput from "./Forminput";
import News from "./News";
import Events from "./Events";
import ArticlesSection from "./ArticlesSection";
import HelpCenter from "./HelpCenter";
import HelpArticleDetail from "./HelpArticleDetail";
import MessagePage from "./MessagePage";

const Body = ({
  activeTab,
  selectedArticle,
  setSelectedArticle,
  selectedHelpArticle,
  setSelectedHelpArticle,
  selectedHelpCategory,
  setSelectedHelpCategory,
  setActiveTab,
  isChatOpen,
  setIsChatOpen,
  onSendFromHome,
  pendingMessage,
  clearPendingMessage,
}) => {
  if (selectedHelpArticle) {
    return (
      <div className="body">
        <HelpArticleDetail
          article={selectedHelpArticle.article}
          category={selectedHelpArticle.category}
        />
      </div>
    );
  }

  return (
    <div className="body">
      {activeTab === "Home" && (
        <>
          {!selectedArticle && (
            <>
              <div className="header">
                <h1 className="header-title">
                  Hey there! 👋🏼 <br />
                  How can we help?
                </h1>
                <Forminput onSend={onSendFromHome} />
              </div>
              <Events />
              <ArticlesSection
                onOpenHelp={() => setActiveTab("Help")}
                onArticleClick={(article, category) =>
                  setSelectedHelpArticle({ article, category })
                }
              />
              <p className="section-label">Latest News</p>
            </>
          )}
          <News
            selectedArticle={selectedArticle}
            setSelectedArticle={setSelectedArticle}
          />
        </>
      )}

      {activeTab === "News" && (
        <News
          selectedArticle={selectedArticle}
          setSelectedArticle={setSelectedArticle}
          showAll
        />
      )}

      {activeTab === "Help" && (
        <HelpCenter
          setSelectedHelpArticle={setSelectedHelpArticle}
          selectedCategory={selectedHelpCategory}
          setSelectedCategory={setSelectedHelpCategory}
        />
      )}

      {activeTab === "Tickets" && (
        <div style={{ padding: "24px", color: "#6b7280", fontSize: "14px" }}>
          No tickets yet.
        </div>
      )}

      {activeTab === "Message" && (
        <MessagePage
          chatStarted={isChatOpen}
          setChatStarted={setIsChatOpen}
          pendingMessage={pendingMessage}
          clearPendingMessage={clearPendingMessage}
        />
      )}
    </div>
  );
};

export default Body;
