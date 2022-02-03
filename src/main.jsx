import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./global/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
