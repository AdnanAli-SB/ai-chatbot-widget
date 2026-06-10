import HelpData from "./HelpData";

const featuredArticles = HelpData.map((cat) => ({
  ...cat.articles[0],
  category: cat,
}));

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 18l6-6-6-6"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArticlesSection = ({ onOpenHelp, onArticleClick }) => (
  <>
    <div className="articles-bar">
      <p className="articles-bar-title">Articles</p>
      <button
        className="articles-search-btn"
        onClick={onOpenHelp}
        aria-label="Search articles"
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
    <div className="articles-rows">
      {featuredArticles.map((item) => (
        <button
          key={item.id}
          className="home-article-row"
          onClick={() => onArticleClick(item, item.category)}
        >
          <div className="home-article-content">
            <p className="home-article-title">{item.title}</p>
          </div>
          <ChevronRight />
        </button>
      ))}
    </div>
  </>
);

export default ArticlesSection;
