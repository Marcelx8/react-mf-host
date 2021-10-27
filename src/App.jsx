import React from "react";
import ReactDOM from "react-dom";

// import Header from 'header/Header';
import DogWidget from 'header/DogWidget';
import "./index.css";

const App = () => (
  <div>
    <div className="container">Host</div>
    <DogWidget />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
