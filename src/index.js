import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
/* import { StateProvider } from "./components/StateProvider";
import reducer from "./components/Reducer";
import { initialState } from "./components/Reducer"; */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
