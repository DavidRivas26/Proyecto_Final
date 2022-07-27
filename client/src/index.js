import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/ReduxStore"

ReactDOM.render(
  <provider store = {store}>
  <App/>
  </provider>,
  document.getElementById("root")
);
