import React, { useState } from "react";
import MenuList from "./MenuList";
import "./style.css";
import Menu from "./menuApi";
import Navbar from "./Navbar";

//In this part we have created a unquie list
//spread Opreator
const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return currentElement.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filteritem = (category) => {
    if (category == "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filteritem={filteritem} menuList={menuList} />
      <MenuList menu={menuData} />
    </>
  );
};

export default Resturant;
