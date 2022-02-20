import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import StoreApp from "./Store/StoreApp";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <StoreApp/> */}
  </React.StrictMode>,
  document.getElementById("root")
);

