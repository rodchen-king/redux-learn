import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduces from './reducers';
import App from "./components/App";

const { composeWithDevTools } = require('redux-devtools-extension');

const store = createStore(reduces, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
