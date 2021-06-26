import { all, call, put, takeLatest } from 'redux-saga/effects'
import api from '../../../api'
import { CustomersTypescript } from '../../../typescript/Customers'
import * as CustomersActions from '../../actions/customers'
import * as types from '../../types'

const oneCustomerRequisicao = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
let allCustomersApi: CustomersTypescript[]
//first: 100 offset: 0
const allCustomersRequisicao = async () => {
  await api({
    method: 'post',
    data: {
      query: `
        query findAllCustomers {
          allCustomers {
            _id
            razao_social
            nome_fantasia
            endereco
            telefone
            email
            responsible
            latitude
            longitude
            icon
          }
        }`
    }
  }).then(({ data }) => {
    allCustomersApi = data.data.allCustomers
    return true
  })
}

function* oneCustomer() {
  try {
    yield call(oneCustomerRequisicao)
    yield put(CustomersActions.oneCustomerSuccess())
  } catch {
    yield put(CustomersActions.oneCustomerFailure())
  }
}
function* allCustomers() {
  try {
    yield call(allCustomersRequisicao)
    yield put(CustomersActions.allCustomersSuccess(allCustomersApi))
  } catch {
    yield put(CustomersActions.allCustomersFailure())
  }
}

export default all([
  takeLatest(types.ONE_CUSTOMER_REQUEST, oneCustomer),
  takeLatest(types.ALL_CUSTOMERS_REQUEST, allCustomers)
])
