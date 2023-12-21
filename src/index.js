import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { AppProvider } from "./Projects/WhoPaysBill_1/Context/Context";
// import { store } from "./Projects/ReducerMovie/Redux/Store";
// import {Provider } from "react-redux";
import App2 from "./App2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <AppProvider>
  // <Provider store={store} >
    <App2/>
  // </Provider>
  // </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
