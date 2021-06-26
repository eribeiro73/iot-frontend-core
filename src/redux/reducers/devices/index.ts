/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { DevicesTypescript } from '../../../typescript/Devices'
import * as types from '../../types'

export interface DeviceState {
  loading: boolean
  device: DevicesTypescript
  devices: DevicesTypescript[]
  error: string | null
}

const initialState: DeviceState = {
  loading: false,
  device: {
    _id: '',
    description: '',
    serialNumber: '',
    latitude: '',
    longitude: '',
    client_id: '',
    wifi_ssid_primary: '',
    wifi_username_primary: '',
    wifi_password_primary: '',
    wifi_ssid_secondary: '',
    wifi_username_secondary: '',
    wifi_password_secondary: ''
  },
  devices: [],
  error: null
}

const deviceReducer = (
  state = initialState,
  action: { type: string; payload: DevicesTypescript[] | DevicesTypescript }
) => {
  switch (action.type) {
    case types.ONE_DEVICE_REQUEST:
      console.log('Estou fazendo a requisição ONE_DEVICE_REQUEST')
      return { ...state, loading: true }

    case types.ONE_DEVICE_SUCCESS:
      console.log('Success requisição ONE_DEVICE_REQUEST')
      return { ...state, data: action.payload }

    case types.ONE_DEVICE_FILL:
      console.log('Success requisição ONE_DEVICE_REQUEST')
      return { ...state, data: action.payload }

    case types.ONE_DEVICE_FAILURE:
      console.log('Failure requisição ONE_DEVICE_REQUEST')
      return state

    case types.ALL_DEVICES_REQUEST:
      console.log('Estou fazendo a requisição')
      return { ...state, loading: true }

    case types.ALL_DEVICES_SUCCESS:
      console.log('pronta')
      return { ...state, devices: action.payload, loading: false }

    case types.ALL_DEVICES_FILL:
      console.log('Success requisição - to no fill')
      return { ...state, action }

    case types.ALL_DEVICES_FAILURE:
      console.log('Failure requisição')
      return state

    case types.ADD_DEVICE_REQUEST:
      console.log('device add...')
      return { ...state, loading: true }

    case types.ADD_DEVICE_SUCCESS:
      console.log('pronta', action.payload)
      return { ...state, loading: true }

    case types.ADD_DEVICE_FAILURE:
      console.log('Failure requisição')
      return state

    case types.UPD_DEVICE_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    case types.UPD_DEVICE_SUCCESS:
      console.log('Success requisição')
      return { ...state }

    case types.UPD_DEVICE_FAILURE:
      console.log('Failure requisição')
      return state

    case types.DEL_DEVICE_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    case types.DEL_DEVICE_SUCCESS:
      console.log('Success requisição')
      return { ...state }

    case types.DEL_DEVICE_FAILURE:
      console.log('Failure requisição')
      return state

    default:
      return { ...state }
  }
}
export default deviceReducer
