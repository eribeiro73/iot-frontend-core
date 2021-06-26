import {
  DashboardTemperatureTypescript,
  TemperatureTypescript
} from '../../../typescript/Temperatures'
import * as types from '../../types'

const temperature = {}

export function oneTemperatureRequest(): {
  type: string
  payload: TemperatureTypescript
} {
  return {
    type: types.ONE_TEMPERATURE_REQUEST,
    payload: temperature
  }
}
export function oneTemperatureSuccess(): { type: string } {
  return {
    type: types.ONE_TEMPERATURE_SUCCESS
  }
}
export function oneTemperatureFailure(): { type: string } {
  return {
    type: types.ONE_TEMPERATURE_FAILURE
  }
}

export function allTemperaturesRequest(): {
  type: string
  payload: TemperatureTypescript
} {
  return {
    type: types.ALL_TEMPERATURES_REQUEST,
    payload: temperature
  }
}
export function allTemperaturesSuccess(
  data: DashboardTemperatureTypescript[]
): {
  type: string
  payload: DashboardTemperatureTypescript[]
} {
  return {
    type: types.ALL_TEMPERATURES_SUCCESS,
    payload: data
  }
}
export function allTemperaturesFill(data: {
  allTemperatures: TemperatureTypescript[]
}): {
  type: string
  data: TemperatureTypescript[]
} {
  return {
    type: types.ALL_TEMPERATURES_FILL,
    data: data.allTemperatures
  }
}
export function allTemperaturesFailure(): { type: string } {
  return {
    type: types.ALL_TEMPERATURES_FAILURE
  }
}

export function addTemperatureRequest(data: TemperatureTypescript): {
  type: string
  payload: TemperatureTypescript
} {
  return {
    type: types.ADD_TEMPERATURE_REQUEST,
    payload: data
  }
}
export function addTemperatureSuccess(): {
  type: string
} {
  return {
    type: types.ALL_TEMPERATURES_SUCCESS
  }
}
export function addTemperaturesFailure(): { type: string } {
  return {
    type: types.ALL_TEMPERATURES_FAILURE
  }
}
