import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../api'
import {
  DashboardTemperatureTypescript,
  TemperatureTypescript
} from '../../../typescript/Temperatures'
import * as TemperaturesActions from '../../actions/temperatures'
import * as types from '../../types'

const oneTemperatureRequisicao = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

let allTemperaturesApi: DashboardTemperatureTypescript[]
const allTemperaturesRequisicao = async () => {
  await api({
    method: 'post',
    data: {
      query: `
      query {
        dashboardTemperatures(limit: ${60}) {
          device {
            _id
            description
            serialNumber
            client_id
          }
          temperatures {
            _id
            deviceId
            timeStamp
            temperatureOne
            temperatureTwo
            inputOne
            inputTwo
          }
          records
          openings
          minimumOne
          averageOne
          maximumOne
          minimumTwo
          averageTwo
          maximumTwo
        }
      }
        `
    }
  }).then(({ data }) => {
    allTemperaturesApi = data.data.dashboardTemperatures
    return true
  })
}

// let addDevicesApi: DevicesTypescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addTemperatureRequisicao = async (action: any) => {
  const temperature: TemperatureTypescript = action.payload
  await api({
    method: 'post',
    data: {
      query: `
        mutation addTemperature {
          createTemperatures(
            deviceId: "${temperature.deviceId}"
            inputOne: "${temperature.inputOne}"
            inputTwo: "${temperature.inputTwo}"
            temperatureOne: "${temperature.temperatureOne}"
            temperatureTwo: "${temperature.temperatureTwo}"
            timeStamp: "${temperature.timeStamp}"
            )
            {
            _id
            deviceId
            timeStamp
            temperatureOne
            temperatureTwo
            inputOne
            inputTwo
          }
        }
      `
    }
  }).then(({ data }) => {
    console.log(data)
    // addDevicesApi = data.data.createDevices
    return true
  })
}

function* oneTemperature() {
  try {
    yield call(oneTemperatureRequisicao)
    yield put(TemperaturesActions.oneTemperatureSuccess())
  } catch {
    yield put(TemperaturesActions.oneTemperatureFailure())
  }
}
function* allTemperatures() {
  try {
    yield call(allTemperaturesRequisicao)
    yield put(TemperaturesActions.allTemperaturesSuccess(allTemperaturesApi))
  } catch {
    yield put(TemperaturesActions.allTemperaturesFailure())
  }
}
export default all([
  takeLatest(types.ONE_TEMPERATURE_REQUEST, oneTemperature),
  takeLatest(types.ALL_TEMPERATURES_REQUEST, allTemperatures),
  takeLatest(types.ADD_TEMPERATURE_REQUEST, addTemperatureRequisicao)
])
