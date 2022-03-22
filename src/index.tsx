import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./infra/lib/firebase";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
