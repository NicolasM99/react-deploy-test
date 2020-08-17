import React from "react";
import ProfileImage from "./images/pp.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <h1> My React App</h1>
        <h2>Author: Nicolas Moreno</h2>
        <img src={ProfileImage} alt="profile-image" width={"200px"}/>
      </body>
    </div>
  );
}

export default App;
