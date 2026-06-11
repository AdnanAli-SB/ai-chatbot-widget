const TabHead = ({ title, onClose }) => {
  return (
    <div className="tab-head">
      <span className="tab-head-title">{title}</span>
      <button className="cancel-btn" onClick={onClose} title="Close">
        <img src={`${import.meta.env.BASE_URL}multiplication-sign.svg`} alt="close" />
      </button>
    </div>
  );
};

export default TabHead;
