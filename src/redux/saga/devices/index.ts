import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../api'
import { DevicesTypescript } from '../../../typescript/Devices'
import * as DevicesActions from '../../actions/devices'
import * as types from '../../types'

const oneDeviceRequisicao = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

let allDevicesApi: DevicesTypescript[]
//first: 100 offset: 0
const allDevicesRequisicao = async () => {
  await api({
    method: 'post',
    data: {
      query: `
        query findAllDevices {
          allDevices {
            _id
            description
            serialNumber
            latitude
            longitude
            client_id
            wifi_ssid_primary
            wifi_username_primary
            wifi_password_primary
            wifi_ssid_secondary
            wifi_username_secondary
            wifi_password_secondary
          }
        }
      `
    }
  }).then(({ data }) => {
    console.log('passei no saga')
    allDevicesApi = data.data.allDevices
    return true
  })
}

// let addDevicesApi: DevicesTypescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addDeviceRequisicao = async (action: any) => {
  const device: DevicesTypescript = action.payload
  await api({
    method: 'post',
    data: {
      query: `
        mutation addDevice {
          createDevices(
            description: "${device.description}"
            serialNumber: "${device.serialNumber}"
            latitude: "${device.latitude}"
            longitude: "${device.longitude}"
            client_id: "${device.client_id}"
            wifi_ssid_primary: "${device.wifi_ssid_primary}"
            wifi_username_primary: "${device.wifi_username_primary}"
            wifi_password_primary: "${device.wifi_password_primary}"
            wifi_ssid_secondary: "${device.wifi_ssid_secondary}"
            wifi_username_secondary: "${device.wifi_username_secondary}"
            wifi_password_secondary: "${device.wifi_username_secondary}"
          ) {
            _id
            description
            serialNumber
            latitude
            longitude
            client_id
            wifi_ssid_primary
            wifi_username_primary
            wifi_password_primary
            wifi_ssid_secondary
            wifi_username_secondary
            wifi_password_secondary
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

function* oneDevice() {
  try {
    yield call(oneDeviceRequisicao)
    yield put(DevicesActions.oneDeviceSuccess())
  } catch {
    yield put(DevicesActions.oneDeviceFailure())
  }
}
function* allDevices() {
  try {
    yield call(allDevicesRequisicao)
    yield put(DevicesActions.allDevicesSuccess(allDevicesApi))
  } catch {
    yield put(DevicesActions.allDevicesFailure())
  }
}
export default all([
  takeLatest(types.ONE_DEVICE_REQUEST, oneDevice),
  takeLatest(types.ALL_DEVICES_REQUEST, allDevices),
  takeLatest(types.ADD_DEVICE_REQUEST, addDeviceRequisicao)
])
