import { useState } from "react";
const Item = (props) => {
  const [itemsStatus, setItemsStatus] = useState(props.navItemStatus);

  const toggleStatus = () => {
    setItemsStatus(!itemsStatus);
    props.setNavStatus(itemsStatus, props.navItem);
  };
  return (
    <>
      {props.navItemStatus ? (
        <button className="nav-container" onClick={toggleStatus}>
          <img className="my-svg-icon" src={`${import.meta.env.BASE_URL}${props.navItem}-active.svg`} />
          <div className="nav-item active">{props.navItem}</div>
        </button>
      ) : (
        <button className="nav-container" onClick={toggleStatus}>
          <img className="my-svg-icon" src={`${import.meta.env.BASE_URL}${props.navItem}.svg`} />
          <div className="nav-item">{props.navItem}</div>
        </button>
      )}
    </>
  );
};

export default Item;
