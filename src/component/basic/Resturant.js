import React from "react";
import "./style.css";

const Resturant = () => {
    // we can also style anything using functionns also 
    // const myStyle = {color : "grey"};
    
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle"
            // calling the function to use style like this 
            //  style = {myStyle}
             > Breakfast1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturant;
