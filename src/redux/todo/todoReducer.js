import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  INSERT_TODO_REQUEST,
  INSERT_TODO_SUCCESS,
  INSERT_TODO_FAILURE,
} from "./todoTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case INSERT_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case INSERT_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };

    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
