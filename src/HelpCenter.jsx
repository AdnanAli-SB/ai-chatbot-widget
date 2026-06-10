import { useState } from "react";
import HelpData from "./HelpData";

const CategoryIcon = ({ id }) => {
  const icons = {
    cat_001: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cat_002: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="3"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="16"
          y="3"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="2"
          y="15"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="16"
          y="15"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 6h8M6 8v8M18 8v8M8 18h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    cat_003: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2 Q18 6 18 12 Q18 18 12 22 Q6 18 6 12 Q6 6 12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M6 12h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 2v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    cat_004: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    cat_005: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cat_006: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };
  return icons[id] || icons.cat_001;
};

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


const HelpCenter = ({ setSelectedHelpArticle, selectedCategory, setSelectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const allArticles = HelpData.flatMap((cat) =>
    cat.articles.map((a) => ({ ...a, category: cat })),
  );

  const filteredArticles =
    searchQuery.trim().length > 1
      ? allArticles.filter(
          (a) =>
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.brief.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : [];

  if (selectedCategory) {
    return (
      <div className="help-articles-view">
        <div className="help-articles-header">
          <div className="help-articles-icon">
            <CategoryIcon id={selectedCategory.id} />
          </div>
          <div>
            <p className="help-articles-title">{selectedCategory.title}</p>
            <p className="help-articles-sub">{selectedCategory.description}</p>
          </div>
        </div>
        <div className="help-article-list">
          {selectedCategory.articles.map((article) => (
            <button
              key={article.id}
              className="help-article-row"
              onClick={() =>
                setSelectedHelpArticle({ article, category: selectedCategory })
              }
            >
              <div className="help-article-row-text">
                <p className="help-article-row-title">{article.title}</p>
                <p className="help-article-row-brief">{article.brief}</p>
              </div>
              <ChevronRight />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="help-home">
      <div className="help-search-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="#9ca3af" strokeWidth="2" />
          <path
            d="M21 21l-4.35-4.35"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          className="help-search-input"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            className="help-search-clear"
            onClick={() => setSearchQuery("")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="#9ca3af"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>

      {searchQuery.trim().length > 1 ? (
        <div className="help-search-results">
          <p className="help-results-label">
            {filteredArticles.length} result
            {filteredArticles.length !== 1 ? "s" : ""}
          </p>
          {filteredArticles.length === 0 ? (
            <p className="help-empty">No articles match your search.</p>
          ) : (
            filteredArticles.map((item) => (
              <button
                key={item.id}
                className="help-article-row"
                onClick={() => {
                  setSelectedCategory(item.category);
                  setSelectedHelpArticle({
                    article: item,
                    category: item.category,
                  });
                }}
              >
                <div className="help-article-row-text">
                  <p className="help-article-row-category">
                    {item.category.title}
                  </p>
                  <p className="help-article-row-title">{item.title}</p>
                </div>
                <ChevronRight />
              </button>
            ))
          )}
        </div>
      ) : (
        <>
          <div className="help-categories">
            {HelpData.map((cat) => (
              <button
                key={cat.id}
                className="help-category-card"
                onClick={() => setSelectedCategory(cat)}
              >
                <div className="help-cat-icon">
                  <CategoryIcon id={cat.id} />
                </div>
                <div className="help-cat-text">
                  <p className="help-cat-title">{cat.title}</p>
                  <p className="help-cat-desc">{cat.description}</p>
                </div>
                <div className="help-cat-meta">
                  <span className="help-cat-count">{cat.articles.length}</span>
                  <ChevronRight />
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HelpCenter;
