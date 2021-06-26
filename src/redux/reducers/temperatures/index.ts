/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TemperatureTypescript } from '../../../typescript/Temperatures'
import * as types from '../../types'

export interface TemperatureState {
  loading: boolean
  temperature: TemperatureTypescript
  temperatures: TemperatureTypescript[]
  error: string | null
}

const initialState: TemperatureState = {
  loading: false,
  temperature: {
    _id: '',
    deviceId: '',
    timeStamp: '',
    temperatureOne: 0,
    temperatureTwo: 0,
    inputOne: false,
    inputTwo: false
  },
  temperatures: [],
  error: null
}

const temperatureReducer = (
  state = initialState,
  action: {
    type: string
    payload: TemperatureTypescript[] | TemperatureTypescript
  }
) => {
  switch (action.type) {
    case types.ONE_TEMPERATURE_REQUEST:
      console.log('Estou fazendo a requisição ONE_TEMPERATURE_REQUEST')
      return { ...state, loading: true }

    case types.ONE_TEMPERATURE_SUCCESS:
      console.log('Success requisição ONE_TEMPERATURE_REQUEST')
      return { ...state, data: action.payload }

    case types.ONE_TEMPERATURE_FILL:
      console.log('Success requisição ONE_TEMPERATURE_REQUEST')
      return { ...state, data: action.payload }

    case types.ONE_TEMPERATURE_FAILURE:
      console.log('Failure requisição ONE_TEMPERATURE_REQUEST')
      return state

    case types.ALL_TEMPERATURES_REQUEST:
      console.log('Estou fazendo a requisição')
      return { ...state, loading: true }

    case types.ALL_TEMPERATURES_SUCCESS:
      console.log('pronta')
      return { ...state, temperatures: action.payload, loading: false }

    case types.ALL_TEMPERATURES_FILL:
      console.log('Success requisição - to no fill')
      return { ...state, action }

    case types.ALL_TEMPERATURES_FAILURE:
      console.log('Failure requisição')
      return state

    case types.ADD_TEMPERATURE_REQUEST:
      console.log('temperature add...')
      return { ...state, loading: true }

    case types.ADD_TEMPERATURE_SUCCESS:
      console.log('pronta', action.payload)
      return { ...state, loading: true }

    case types.ADD_TEMPERATURE_FAILURE:
      console.log('Failure requisição')
      return state

    case types.UPD_TEMPERATURE_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    case types.UPD_TEMPERATURE_SUCCESS:
      console.log('Success requisição')
      return { ...state }

    case types.UPD_TEMPERATURE_FAILURE:
      console.log('Failure requisição')
      return state

    case types.DEL_TEMPERATURE_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    case types.DEL_TEMPERATURE_SUCCESS:
      console.log('Success requisição')
      return { ...state }

    case types.DEL_TEMPERATURE_FAILURE:
      console.log('Failure requisição')
      return state

    default:
      return { ...state }
  }
}
export default temperatureReducer
