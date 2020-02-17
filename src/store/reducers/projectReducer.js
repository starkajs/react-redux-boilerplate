import { CREATE_PROJECT } from "../actions/actionTypes";

const INITIAL_STATE = {
  projects: [1, 2, 3, 4]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      const projects = [...state.projects, action.payload];
      return { ...state, projects };
    default:
      return { ...state };
  }
};
