import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<App /> , root)
}
ReactDOM.render(< App />, root);
registerServiceWorker();