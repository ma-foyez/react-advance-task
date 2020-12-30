import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/custom-style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initiliazeState = {
  counter: 20,
};

function CounterReducer(state = initiliazeState, action) {
  switch (action.type) {
    case "GET_COUNTER":
      return {
        ...state,
      };
      break;

    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;

    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;

    default:
      break;
  }
  return state;
}

let store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
