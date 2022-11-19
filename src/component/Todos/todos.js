import React, { useEffect, useState } from "react";
import "./style.css";

//Creating the LocalStorage
const getLocalData = () => {
  const list = localStorage.getItem("Todoslist");
  if (list) {
    // string to array JSON.parse
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todos = () => {
  //Getting the Inputdata from input field
  const [inputData, setInputData] = useState("");

  //Showing and getting the items from input field
  const [items, setItems] = useState(getLocalData());

  // InputData(value || input ) --> setInputData (onChange || input) ---> we want to store data someWhere in array formate and want our previous items dont get deleted
  // Created one more Hook to store it 2nd hook in this setItems Storing the data all data of list Like this --->
  // Storing the data without lossing pervious one ---> setItems([...items, myNewInputData]);

  //We need an statevariable to store the edited value in it and show it
  const [isEditedItem, setIsEditedItem] = useState("");

  //For changing the button when we tap on edit button input has to show edit button if not is has to show plus button
  const [toggleButton, setToggleButton] = useState(false);

  //Adding the items in the list
  const addItem = () => {
    if (!inputData) {
      alert("Fill data first");
    } else if (inputData && toggleButton) {
      setItems(
        items.map((currentElement) => {
          if (currentElement.id === isEditedItem) {
            return { ...currentElement, name: inputData };
          }
          return currentElement;
        })
      );
      //
      setIsEditedItem([]);
      setInputData("");
      setToggleButton(false);
      //
    } else {
      //Making the unique identity of each item
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      // In this line we are storing the new also without losing the previous data
      setItems([...items, myNewInputData]);
      //Clearing the data present in 1st state!
      setInputData("");
    }
  };

  //Deleteing the item
  const deleteItem = (index) => {
    const updateList = items.filter((currentElement) => {
      // in the below line the condition are going to false to it will filter this item
      return currentElement.id !== index;
    });
    setItems(updateList);
  };

  //Clear all the items in list with one click
  const removeAll = () => {
    //Latest list of items = setItems now making it empty
    setItems([]);
  };

  //Creating the LocalStorage
  //Whenever our items got an update this useEffects runs with the sync of updates
  useEffect(() => {
    localStorage.setItem("Todoslist", JSON.stringify(items));
  }, [items]);

  //How to Edit List items;
  const editItem = (index) => {
    const todo_edit = items.find((currentElement) => {
      return currentElement.id === index;
    });
    //Storing the matched id in setIsEditedItem
    setIsEditedItem(index);
    // Setting the input data if we click on edot button our data was showen in the place if this "📝 Add Item"
    setInputData(todo_edit.name);
    // If we tap on edit button setToggle has to become true
    setToggleButton(true);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          {/* Input field */}
          <div className="addItems">
            <input
              type="text"
              placeholder="📝 Add Item"
              className="form-control"
              //Getting the data from input field
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          {/* Showing our items  */}
          <div className="showItems">
            {items.map((currentElement) => {
              return (
                <div className="eachItem" key={currentElement.id}>
                  <h3>{currentElement.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(currentElement.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(currentElement.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Check-List and Remove All Button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check-List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
