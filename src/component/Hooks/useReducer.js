import React, { useReducer } from "react";
import "./style.css";

//How useReducer works??

//first it take initial state then it give it to current state then 
//we cant dirtly update the state like we do in useState so when the even is 
//fired it calls dispatch then dispatch call reducer then it update the current state value 
// Initial state ----> currentStatte || Event occurs ----> disptach -----> reducer function ----> update state 

const reducer = (state, action)=> {
  if(action.type === "INCR"){
    state = ++state; 
  }
  if(state > 0 && action.type === "DECR"){
    state = --state; 
  }
  return state;
}

const UseReducer = () =>
{ 
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type: "INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => dispatch({type: "DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
}

export default UseReducer;
