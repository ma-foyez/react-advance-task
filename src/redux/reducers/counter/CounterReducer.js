
import * as Types from "../../types/Types";

const initiliazeState = {
  counter: 0
};

function CounterReducer(state = initiliazeState, action) {
  switch (action.type) {
    case Types.GET_COUNTER:
      return {
        ...state,
      };
      break;

    case Types.INC:
      let updatedIncrementValue =
        typeof action.payload === "undefined" ? 1 : action.payload;
      updatedIncrementValue = parseInt(updatedIncrementValue);

      return {
        ...state,
        counter: state.counter + updatedIncrementValue,
      };
      break;

    case Types.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;

    case Types.UPDATE:
      return {
        ...state,
        counter: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}

export default CounterReducer;