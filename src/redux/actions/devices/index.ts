import { DevicesTypescript } from '../../../typescript/Devices'
import * as types from '../../types'

const device = {}

export function oneDeviceRequest(): {
  type: string
  payload: DevicesTypescript
} {
  return {
    type: types.ONE_DEVICE_REQUEST,
    payload: device
  }
}
export function oneDeviceSuccess(): { type: string } {
  return {
    type: types.ONE_DEVICE_SUCCESS
  }
}
export function oneDeviceFailure(): { type: string } {
  return {
    type: types.ONE_DEVICE_FAILURE
  }
}

export function allDevicesRequest(): {
  type: string
  payload: DevicesTypescript
} {
  return {
    type: types.ALL_DEVICES_REQUEST,
    payload: device
  }
}
export function allDevicesSuccess(data: DevicesTypescript[]): {
  type: string
  payload: DevicesTypescript[]
} {
  return {
    type: types.ALL_DEVICES_SUCCESS,
    payload: data
  }
}
export function allDevicesFill(data: { allDevices: DevicesTypescript[] }): {
  type: string
  data: DevicesTypescript[]
} {
  return {
    type: types.ALL_DEVICES_FILL,
    data: data.allDevices
  }
}
export function allDevicesFailure(): { type: string } {
  return {
    type: types.ALL_DEVICES_FAILURE
  }
}

export function addDeviceRequest(data: DevicesTypescript): {
  type: string
  payload: DevicesTypescript
} {
  return {
    type: types.ADD_DEVICE_REQUEST,
    payload: data
  }
}
export function addDeviceSuccess(): {
  type: string
} {
  return {
    type: types.ALL_DEVICES_SUCCESS
  }
}
export function addDevicesFailure(): { type: string } {
  return {
    type: types.ALL_DEVICES_FAILURE
  }
}
