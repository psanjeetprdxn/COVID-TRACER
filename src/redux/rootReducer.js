import { combineReducers } from 'redux'
import countriesReducer from './countries/countriesReducer'
import covidReducer from './covid/covidReducer'
import authReducer from './auth/authReducer'

const rootReducer = combineReducers({
  countries: countriesReducer,
  covidData: covidReducer,
  authData: authReducer,
})

export default rootReducer
