import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduces from './reducers';
import App from "./components/App";

const { composeWithDevTools } = require('redux-devtools-extension');
const composeEnhancers = composeWithDevTools({ trace: true })
const store = createStore(reduces, {name: 'rodchen'}, composeEnhancers());

console.log(store)


store.subscribe((asdf) => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
