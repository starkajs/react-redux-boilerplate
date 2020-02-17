import { CREATE_PROJECT } from "./actionTypes";

export const createProject = () => async dispatch => {
  dispatch({
    type: CREATE_PROJECT,
    payload: parseInt(Math.random() * 100, 10)
  });
};
