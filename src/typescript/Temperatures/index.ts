import { DevicesTypescript } from '../Devices'

export type TemperatureTypescript = {
  _id?: string
  deviceId?: string
  timeStamp?: string
  temperatureOne?: number
  temperatureTwo?: number
  inputOne?: boolean
  inputTwo?: boolean
}

export type DashboardTemperatureTypescript = {
  device: DevicesTypescript
  temperatures?: TemperatureTypescript[]
  records?: number
  openings?: number
  minimumOne?: number
  averageOne?: number
  maximumOne?: number
  minimumTwo?: number
  averageTwo?: number
  maximumTwo?: number
}
