import { useState } from "react";
import NewsArtical from "./NewsArticle";
import NewsData from "./NewsData.js";

const categories = ["All", ...new Set(NewsData.flatMap((n) => n.category))];

const News = ({ selectedArticle, setSelectedArticle, showAll = false }) => {
  const [newsDetails] = useState(NewsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

if (selectedArticle) {
    const related = newsDetails.filter(
      (n) =>
        n.id !== selectedArticle.id &&
        n.category.some((c) => selectedArticle.category.includes(c))
    );

    return (
      <div className="news-detail" key={selectedArticle.id}>
        <div
          className="news-detail-img"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}dga-2.jpg)` }}
        />
        <div className="news-detail-body">
          <div className="newsChip">
            {selectedArticle.category.map((chip) => (
              <div key={chip}>{chip}</div>
            ))}
          </div>
          <h3 className="news-detail-title">{selectedArticle.title}</h3>
          <p className="news-detail-meta">
            {selectedArticle.date} · {selectedArticle.readTime}
          </p>
          <p className="news-detail-content">{selectedArticle.content}</p>
        </div>

        {related.length > 0 && (
          <div className="related-news">
            <div className="related-title-row">
              <hr className="related-divider-line" />
              <span className="related-title">Related articles</span>
              <hr className="related-divider-line" />
            </div>
            <div className="articles-rows">
              {related.map((article) => (
                <button
                  key={article.id}
                  className="home-article-row"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="home-article-content">
                    <p className="home-article-title">{article.title}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const displayList = showAll
    ? newsDetails.filter((n) => {
        const matchesSearch =
          searchQuery === "" ||
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.brief.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat =
          activeCategory === "All" || n.category.includes(activeCategory);
        return matchesSearch && matchesCat;
      })
    : newsDetails.slice(0, 4);

  return (
    <>
      {showAll && (
        <div className="news-filter-area">
          <div className="news-search-wrap">
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
              className="news-search-input"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="news-search-clear"
                onClick={() => setSearchQuery("")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
          <div className="news-category-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cat-chip${activeCategory === cat ? " cat-chip--active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="news-list">
        {displayList.map((x) => (
          <NewsArtical key={x.id} newsDetails={x} onSelect={setSelectedArticle} />
        ))}
        {showAll && displayList.length === 0 && (
          <p className="news-empty">No articles match your search.</p>
        )}
      </div>
    </>
  );
};

export default News;
