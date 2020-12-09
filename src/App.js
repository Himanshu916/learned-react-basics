import React, { useState } from "react";
import "./styles.css";

//  var userName = prompt("enter your username");
var shoppingList = ["eggs", "whey", "paneer", "milk"];
export default function App() {
  var [userInput, setUserInput] = useState("");
  function inputChangeHandler(e) {
    // console.log(e.target);
    // console.log(e.target.value);
    setUserInput(e.target.value);
  }

  function clickhandler(item) {
    var meaning = item;
    setUserInput(meaning);
  }

  function getColor(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "grey";
  }

  function getItem() {
    return shoppingList.map((item, index) => {
      return (
        <li
          key={item}
          onClick={() => clickhandler(item)}
          style={{ backgroundColor: getColor(index) }}
        >
          {item}
        </li>
      );
    });
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Inside Outt! </h1>
      <input onChange={inputChangeHandler}></input>

      <div>Welcome {userInput}</div>
      <ul>{getItem()}</ul>
    </div>
  );
}
