// Get CreateStore() from 'redux'
import { createStore } from "redux";

// Initiliaze a store object
const initiliazeState = {
  counter: 0,
  value: 1,
  taskForm: {
    Title: '',
    Priority: ''
  },
  taskList: []
};

// Do jobs on changes any action
function CounterReducer(state = initiliazeState, action) {
  switch (action.type) {
    case "GET_COUNTER":
      return {
        ...state,
      };
      break;

    case "UPDATE_COUNTER":
      return {
        ...state,
        counter: 1,
      };
      break;

    case "UPDATE_VALUE":
      return {
        ...state,
        value: 10,
      };
      break;

    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;

    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;

    case "PASS_DYNAMIC_DATA":
      console.log("enter in dynamic data");
      console.log("action", action);
      console.log("payload", action.payload);

      return {
        ...state,
        counter: state.counter + action.payload,
      };
      break;

    case "ADD_TASK":
      console.log("payload", action.payload);

      return {
        ...state,
        taskForm: action.payload,
      };
      break;

    case "ADD_NEW_TASK_TO_TASKLIST":
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
      break;

    default:
      break;
  }
  return state;
}

// Set a Store
let store = createStore(CounterReducer);

// Listen that anything changes in the store
store.subscribe(() => console.log(store.getState()));

// Get data
store.dispatch({ type: "GET_COUNTER" });

// Update data in the store / global store
store.dispatch({ type: "UPDATE_COUNTER" });
store.dispatch({ type: "UPDATE_VALUE" });


store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "INCREMENT_COUNTER" });

store.dispatch({ type: "DECREMENT_COUNTER" });
store.dispatch({ type: "DECREMENT_COUNTER" });
store.dispatch({ type: "DECREMENT_COUNTER" });
store.dispatch({ type: "DECREMENT_COUNTER" });


// Pass Dynamic Data to reducer
store.dispatch({ type: "PASS_DYNAMIC_DATA", payload: 30 });

const taskData = {
    Title: 'Dynamic Title From Frontend',
    Priority: 'Very High'
}
store.dispatch({ type: "ADD_TASK", payload: taskData });

store.dispatch({ type: "ADD_NEW_TASK_TO_TASKLIST", payload: taskData });
store.dispatch({
  type: "ADD_NEW_TASK_TO_TASKLIST",
  payload: {
    Title: "Dynamic 2",
    Priority: "Very High 2",
  },
});