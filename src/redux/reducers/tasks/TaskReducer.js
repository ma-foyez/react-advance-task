
import * as Types from "../../types/Types";

const initiliazeState = {
  tasks: [],
};

function TaskReducer(state = initiliazeState, action) {
  switch (action.type) {
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

export default TaskReducer;