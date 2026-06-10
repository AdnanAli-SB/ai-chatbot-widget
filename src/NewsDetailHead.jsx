const NewsDetailHead = ({ onBack, onClose, onExpand, isExpanded }) => {
  return (
    <div className="news-detail-head">
      <button className="detail-head-btn" onClick={onBack} title="Back">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="detail-head-actions">
        <button className="detail-head-btn" onClick={onExpand} title={isExpanded ? "Collapse" : "Expand"}>
          {isExpanded ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <button className="detail-head-btn" onClick={onClose} title="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsDetailHead;
