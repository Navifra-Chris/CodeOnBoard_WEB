// @flow

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './apps/store/reducers/rootReducer'
import App from "./apps/App.react";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
  <Provider store={createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>
  , rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}
