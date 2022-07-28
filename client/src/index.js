import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import store from "./store/ReduxStore"

ReactDOM.render(
  <provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </provider>,
  document.getElementById("root")
);
