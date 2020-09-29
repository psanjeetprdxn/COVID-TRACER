import axios from 'axios'
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISTRATION_REQUEST,
  FETCH_REGISTRATION_FAILURE,
  FETCH_REGISTRATION_SUCCESS,
  LOGOUT,
} from './authTypes'

const authKey = 'AIzaSyBHhiW8222QfHv4QTC7Wu-QpNeh1_enwPw';

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST
  }
}

export const fetchLoginSuccess = (data) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: data
  }
}

export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error
  }
}

export const fetchRegistrationRequest = () => {
  return {
    type: FETCH_REGISTRATION_REQUEST
  }
}

export const fetchRegistrationSuccess = (data) => {
  return {
    type: FETCH_REGISTRATION_SUCCESS,
    payload: data
  }
}

export const fetchRegistrationFailure = (error) => {
  return {
    type: FETCH_REGISTRATION_FAILURE,
    payload: error
  }
}

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: LOGOUT
  }
}

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const login = (creds) => {
  return (dispatch) => {
    dispatch(fetchLoginRequest())
    axios({
      method: 'post',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authKey}`,
      data: creds
    })
    .then(response => {
      // const users = response.data
      // console.log(response);
      let user = {
        token: response.data.idToken,
        userId: response.data.localId,
      }
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(fetchLoginSuccess(response.data))
    })
    .catch(error => {
      // console.log(error);
      dispatch(fetchLoginFailure(error))
    })
  }
}

export const registration = (creds) => {
  return (dispatch) => {
    dispatch(fetchRegistrationRequest());
    axios({
      method: 'post',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${authKey}`,
      data: creds
    })
    .then(response => {
      // console.log(response)
      let user = {
        token: response.data.idToken,
        userId: response.data.localId,
      }
      localStorage.setItem('user', JSON.stringify(user))
      dispatch(fetchRegistrationSuccess(response.data))
    })
    .catch(error => {
      // console.log(error);
      dispatch(fetchRegistrationFailure(error.msg))
    })
  }
}


