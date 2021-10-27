import React from "react";
import ReactDOM from "react-dom";

import HeaderWidget from 'header/Header'
import DogWidget from 'header/DogWidget';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <HeaderWidget />
    <br />
    <div className="container">
      <DogWidget />
      <br />
      <h2>HOST</h2>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
