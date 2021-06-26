/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CustomersTypescript } from '../../../typescript/Customers'
import * as types from '../../types'

export interface CustomerState {
  loading: boolean
  customer: CustomersTypescript
  customers: CustomersTypescript[]
  error: string | null
}

const initialState: CustomerState = {
  loading: false,
  customer: {
    _id: '',
    razao_social: '',
    nome_fantasia: '',
    endereco: '',
    telefone: '',
    email: '',
    responsible: '',
    latitude: '',
    longitude: '',
    icon: '',
    isPanic: false
  },
  customers: [],
  error: null
}

const customerReducer = (
  state = initialState,
  action: { type: string; payload: CustomersTypescript[] | CustomersTypescript }
) => {
  switch (action.type) {
    case types.ONE_CUSTOMER_REQUEST:
      console.log('Estou fazendo a requisição ONE_CUSTOMER_REQUEST')
      return { ...state, loading: true }

    case types.ONE_CUSTOMER_SUCCESS:
      console.log('Success requisição ONE_CUSTOMER_REQUEST')
      return { ...state, data: action.payload }

    case types.ONE_CUSTOMER_FILL:
      console.log('Success requisição ONE_CUSTOMER_REQUEST')
      return { ...state, data: action.payload }

    case types.ONE_CUSTOMER_FAILURE:
      console.log('Failure requisição ONE_CUSTOMER_REQUEST')
      return state

    case types.ALL_CUSTOMERS_REQUEST:
      console.log('Estou fazendo a requisição')
      return { ...state, loading: true }

    case types.ALL_CUSTOMERS_SUCCESS:
      console.log('pronta')
      return { ...state, customers: action.payload, loading: false }

    case types.ALL_CUSTOMERS_FILL:
      console.log('Success requisição - to no fill')
      return { ...state, action }

    case types.ALL_CUSTOMERS_FAILURE:
      console.log('Failure requisição')
      return state

    case types.UPD_CUSTOMER_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    case types.UPD_CUSTOMER_SUCCESS:
      console.log('Success requisição')
      return { ...state }

    case types.UPD_CUSTOMER_FAILURE:
      console.log('Failure requisição')
      return state

    case types.DEL_CUSTOMER_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    case types.DEL_CUSTOMER_SUCCESS:
      console.log('Success requisição')
      return { ...state }

    case types.DEL_CUSTOMER_FAILURE:
      console.log('Failure requisição')
      return state

    default:
      return { ...state }
  }
}
export default customerReducer
