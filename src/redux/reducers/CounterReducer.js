
import * as Types from "../types/Types";

const initiliazeState = {
  counter: 20,
  tasks: [],
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

    case Types.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
      break;

    case Types.ADD_TASK:
      return {
        ...state,
      };
      break;

    default:
      break;
  }
  return state;
}

export default CounterReducer;