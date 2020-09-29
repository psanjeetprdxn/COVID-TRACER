import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_SUCCESS,
  FETCH_REGISTRATION_REQUEST,
  FETCH_REGISTRATION_FAILURE,
  FETCH_REGISTRATION_SUCCESS,
  LOGOUT,
} from './authTypes'

const initialState = {
  loading: false,
  token: localStorage.getItem('user') == null ? null : JSON.parse(localStorage.getItem('user')).token,
  userId: localStorage.getItem('user') == null ? null : JSON.parse(localStorage.getItem('user')).userId,
  error: '',
  isLoggedIn: (localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).token) ? true : false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LOGIN_REQUEST: return {
      ...state,
      loading: true
    }

    case FETCH_LOGIN_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
      isLoggedIn: false,
    }

    case FETCH_LOGIN_SUCCESS: return {
      ...state,
      loading: false,
      token: action.payload.idToken,
      userId: action.payload.localId,
      error: '',
      isLoggedIn: true,
    }

    case FETCH_REGISTRATION_REQUEST: return {
      ...state,
      loading: true
    }

    case FETCH_REGISTRATION_FAILURE: return {
      ...state,
      loading: false,
      error: action.payload,
      isLoggedIn: false,
    }

    case FETCH_REGISTRATION_SUCCESS: return {
      ...state,
      loading: false,
      token: action.payload.idToken,
      userId: action.payload.localId,
      error: '',
      isLoggedIn: true,
    }

    case LOGOUT: return {
      ...state,
      token: null,
      userId: null,
      isLoggedIn: false,
    }

    default: return state
  }
}

export default reducer
