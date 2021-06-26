import { combineReducers } from 'redux'
import changeState from './app'
import customerReducer from './customers'
import deviceReducer from './devices'
import temperatureReducer from './temperatures'

export type AppState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  customers: customerReducer,
  devices: deviceReducer,
  temperatures: temperatureReducer,
  app: changeState,
})

export default rootReducer
