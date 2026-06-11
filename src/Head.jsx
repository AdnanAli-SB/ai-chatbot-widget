const Head = (props) => {
  const test = () => {
    props.getToggle(!props.setToggle);
  };

  return (
    <div className="head-bar">
      <div className="head-avatar">
        <img src={`${import.meta.env.BASE_URL}chat-bot.png`} alt="" />
      </div>
      <div className="userInfo">
        <div className="userName">HUMAIN Assistant</div>
        <div className="chat-status">
          <div className="ai-status">
            <div className="online"></div>
            <div className="caption"> Online · here to help</div>
          </div>
        </div>
      </div>
      <button onClick={test} className="cancel-btn">
        <img src={`${import.meta.env.BASE_URL}multiplication-sign.svg`} alt="close" />
      </button>
    </div>
  );
};

export default Head;
