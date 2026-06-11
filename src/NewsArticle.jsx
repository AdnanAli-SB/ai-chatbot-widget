const NewsArtical = ({ newsDetails, onSelect }) => {
  return (
    <div className="news-container">
      <div className="news-thumnail" onClick={() => onSelect(newsDetails)}>
        <div
          className="news-img"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}dga-2.jpg)` }}
        />
        <div className="newsCaption">
          <div className="newsChip">
            {newsDetails.category.map((chip) => (
              <div key={chip}>{chip}</div>
            ))}
          </div>
          <h5>{newsDetails.title}</h5>
        </div>
        <div className="news-body">
          <p className="news-paragraph">{newsDetails.brief}</p>
        </div>
      </div>
    </div>
  );
};
export default NewsArtical;
