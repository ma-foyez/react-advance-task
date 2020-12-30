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
  tasks : []
};

function CounterReducer(state = initiliazeState, action) {
  switch (action.type) {
    case "GET_COUNTER":
      return {
        ...state,
      };
      break;

    case "INC":
      let updatedIncrementValue =
        typeof action.payload === "undefined" ? 1 : action.payload;
      updatedIncrementValue = parseInt(updatedIncrementValue);

      return {
        ...state,
        counter: state.counter + updatedIncrementValue,
      };
      break;

    // case "INC_SPECIFIC":
    //   return {
    //     ...state,
    //     counter: state.counter + parseInt(action.payload),
    //   };
    //   break;

    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;

    case "UPDATE":
      return {
        ...state,
        counter: action.payload,
      };
      break;

    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
      break;

    case "ADD_TASK":
      return {
        ...state,
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
