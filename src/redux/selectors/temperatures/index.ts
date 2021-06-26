import { createSelector } from 'reselect'
import { DashboardTemperatureTypescript } from '../../../typescript/Temperatures'

const getTemperatures = (state: {
  temperatures: { temperatures: DashboardTemperatureTypescript[] }
}) => state.temperatures.temperatures

const getLoading = (state: { temperatures: { loading: boolean } }) =>
  state.temperatures.loading

export const getTemperaturesSelector = createSelector(
  getTemperatures,
  getLoading,
  (temperatures: DashboardTemperatureTypescript[]) => temperatures
)

export const getLoadingTemperatureSelector = createSelector(
  getLoading,
  (loading: boolean) => loading
)
