import { combineReducers } from 'redux'
import countriesReducer from './countries/countriesReducer'
import covidReducer from './covid/covidReducer'
import authReducer from './auth/authReducer'
import todoReducer from './todo/todoReducer'

const rootReducer = combineReducers({
  countries: countriesReducer,
  covidData: covidReducer,
  authData: authReducer,
  todoData: todoReducer,
})

export default rootReducer
