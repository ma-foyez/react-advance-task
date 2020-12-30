import { combineReducers } from "redux";

import CounterReducer from "./counter/CounterReducer";
import TaskReducer from "./tasks/TaskReducer";

// combine all of the reducers here
const rootReducer = combineReducers({
  CounterReducer: CounterReducer,
  TaskReducer: TaskReducer,
});

export default rootReducer;