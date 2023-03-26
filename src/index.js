import React from "react";
import ReactDOM from "react-dom";
const num = 2;
const fname = "Vishal";
const lname = "Kumar";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1> Hey {fname + " " + lname}</h1>
    <h2> My favourite food</h2>
    <ul>
      <li>mos</li>
      <li>Dosa</li>
      <li>BabyCorn Chilly</li>
    </ul>
    <p> My lucky number is {num} </p>
    {/* created a copy write  */}
    <p>
      Created by {fname} {lname}
    </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
