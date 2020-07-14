// index.js - data layer control (redux)
// app.js - react router layer

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import React from "react";

import ReactDOM from "react-dom";

import App from "./components/App";

import reducers from "./reducers";

// This is where we pass in reducers
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
