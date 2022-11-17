import React from "react";

const MenuList = ({ menu }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menu.map((currentElement) => {
          // This is know are destructring in react isme aab bar bar currentElement use karne ke need nhi hai
          const { id, name, category, image, description } = currentElement;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category} </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                    <div>
                      <img src={image} alt="" />
                    </div>
                    <div>
                      <span className="card-tag sustle">Order Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuList;
