import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import "./static/stylesheet/index.css";
import "./static/stylesheet/App.scss";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
