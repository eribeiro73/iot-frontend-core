import { createSelector } from 'reselect'
import { DevicesTypescript } from '../../../typescript/Devices'

const getDevices = (state: { devices: { devices: DevicesTypescript[] } }) =>
  state.devices.devices
const getLoading = (state: { devices: { loading: boolean } }) =>
  state.devices.loading

export const geDevicesSelector = createSelector(
  getDevices,
  (devices: DevicesTypescript[]) => devices
)

export const getLoadingDeviceSelector = createSelector(
  getLoading,
  (loading: boolean) => loading
)
