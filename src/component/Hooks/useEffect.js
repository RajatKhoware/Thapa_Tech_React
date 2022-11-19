import React, { useEffect, useState } from "react";
import "./style.css";

//UseEffect is use after the rendering of page to show small data or when anything is change in website it runs again !!
const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

// In this function we are displaying updated value on top like whatsapp 
  useEffect(() => {
    document.title = `(${myNum}) Chats`;
  });

  // UseEffect(() => {},[]);
  //jab use aaye website pe to ek he bar dikhe baki kuch na ho baad me !!
  //In this case useEffect is used with array depandency it means it only runs one time when website get loaded !!

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className ="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
