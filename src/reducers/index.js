import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

const initialState = {
  fetching: false,
  number: 23,
  numberTrivia: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null, number: action.number };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, numberTrivia: action.numberTrivia };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
}
