import { combineReducers } from "redux";
import projectReducer from "./projectReducer";

import { DESTROY_SESSION } from "../actions/actionTypes";

const appReducer = combineReducers({
  projects: projectReducer
});

const rootReducer = (state, action) => {
  if (action.type === DESTROY_SESSION) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
