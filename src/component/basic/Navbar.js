import React from 'react'

// Taking pramenters or params 
const Navbar = ({filteritem, menuList}) => {
  return (
  <>
    <nav className="navbar">
    <div className="btn-group">
      {/* By using map the whole array runs in loop or run one by one to the last same as for loop */}
     {menuList.map((currentElement) => {
        return(
         <button
        className="btn-group__item"
        onClick={() => filteritem(currentElement)}
        >
        {currentElement}
      </button>
        )
     })}
    </div>
  </nav>
  </>
  )
}

export default Navbar
