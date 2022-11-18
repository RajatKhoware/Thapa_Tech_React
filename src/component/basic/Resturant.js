import React, { useState } from "react";
import MenuList from "./MenuList";
import "./style.css";
import Menu from "./menuApi";
import Navbar from "./Navbar";

//In this part we have created a unquie list
//spread Opreator
// Ye fuction ka kam hai ke api se sara data ek array me lena or fhir usse use karna
const uniqueList = [
  ...new Set(
    Menu.map((currentElement) => {
      return currentElement.category;
    })
  ),
  // Giving the all list from list
  "All",
];

const Resturant = () => {
  // Using Hooks for getting the data from api
  //const [stateVariable, updatedData] = useState(intialData);
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

  const filteritem = (category) => {
    // If we tap on all in nav bar this if condition works to gives data of all
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
   
    // In this function hum filter kar rahe hai values for matlb jab hum nav bar ke kise bhi item pe tap kare to uske he category aaye bss 
  const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
    {/* Using components like this with params */}
      <Navbar filteritem={filteritem} menuList={menuList} />
      <MenuList menu={menuData} />
    </>
  );
};

export default Resturant;
