import axios from "axios";
import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  INSERT_TODO_REQUEST,
  INSERT_TODO_SUCCESS,
  INSERT_TODO_FAILURE,
} from "./todoTypes";

export const insertTodoRequest = () => {
  return {
    type: INSERT_TODO_REQUEST,
  };
};

export const insertTodoSuccess = (data) => {
  return {
    type: INSERT_TODO_SUCCESS,
    payload: data,
  };
};

export const insertTodoFailure = (error) => {
  return {
    type: INSERT_TODO_FAILURE,
    payload: error,
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    dispatch(insertTodoRequest())
    axios.post('https://covid-tracker-ae9cd.firebaseio.com/todos.json', todo)
    .then(response => {
      dispatch(insertTodoSuccess())
      dispatch(fetchTodo(todo.userId))
    })
    .catch(error => {
      dispatch(insertTodoFailure(error.message))
    })
  }
}

export const fetchTodoRequest = () => {
  return {
    type: FETCH_TODO_REQUEST,
  };
};

export const fetchTodoSuccess = (data) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: data,
  };
};

export const fetchTodoFailure = (error) => {
  return {
    type: FETCH_TODO_FAILURE,
    payload: error,
  };
};

export const fetchTodo = (userId) => {
  return (dispatch) => {
    dispatch(fetchTodoRequest())
    axios.get(`https://covid-tracker-ae9cd.firebaseio.com/todos.json?orderBy="userId"&equalTo="${userId}"`)
    .then(response => {
      dispatch(fetchTodoSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchTodoFailure(error.message))
    })
  }
}

export const deleteTodo = (id, userId) => {
  return (dispatch) => {
    axios.delete(`https://covid-tracker-ae9cd.firebaseio.com/todos/${id}.json`)
    .then(response => {
      dispatch(fetchTodo(userId))
    })
  }
}

