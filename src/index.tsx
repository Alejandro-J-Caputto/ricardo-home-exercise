import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./sass/main.scss";
import RicardoApp from "./RicardoApp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RicardoApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
