import { useState } from "react";
import Item from "./Item";

const Nav = ({ activeTab, setActiveTab }) => {
  const [Itemss, setItemss] = useState([
    { Item: "Home", Status: true },
    { Item: "News", Status: false },
    { Item: "Message", Status: false },
    { Item: "Help", Status: false },
    { Item: "Tickets", Status: false },
  ]);

  const navStatus = (currentStatus, itemName) => {
    setItemss((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        Status: item.Item === itemName,
      })),
    );

    setActiveTab(itemName);
  };

  return (
    <nav>
      {Itemss.map((x) => (
        <Item
          key={x.Item}
          navItem={x.Item}
          navItemStatus={x.Item === activeTab}
          setNavStatus={navStatus}
        />
      ))}
    </nav>
  );
};

export default Nav;
