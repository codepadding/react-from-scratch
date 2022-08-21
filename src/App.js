import React from "react";
import "App.css";
import logo from "./logo.svg";

//Import Components
import Nav from "./Nav";

const App = () => (
  <div>
    <Nav />
    <h1 className="wow">Hello React!!!!!</h1>
    <img src={logo} alt="" />
  </div>
);

export default App;
