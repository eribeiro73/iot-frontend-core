/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all } from 'redux-saga/effects'

import customers from './customers'
import devices from './devices'
import temperatures from './temperatures'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): Generator<any> {
  return yield all([customers, devices, temperatures])
}
