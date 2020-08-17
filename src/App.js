import React from "react";
import Profile from "./images/pp.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <h1> My React App</h1>
        <h2>Author: Nicolas Moreno</h2>
        <img src={Profile} alt="profile" width={"200px"} className={"App-logo"}/>
      </body>
    </div>
  );
}

export default App;
