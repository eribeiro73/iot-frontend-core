import { CustomersTypescript } from '../../../typescript/Customers'
import * as types from '../../types'

const customer = {}

export function oneCustomerRequest(): {
  type: string
  payload: CustomersTypescript
} {
  return {
    type: types.ONE_CUSTOMER_REQUEST,
    payload: customer
  }
}
export function oneCustomerSuccess(): { type: string } {
  return {
    type: types.ONE_CUSTOMER_SUCCESS
  }
}
export function oneCustomerFailure(): { type: string } {
  return {
    type: types.ONE_CUSTOMER_FAILURE
  }
}

export function allCustomersRequest(): {
  type: string
  payload: CustomersTypescript
} {
  return {
    type: types.ALL_CUSTOMERS_REQUEST,
    payload: customer
  }
}
export function allCustomersSuccess(data: CustomersTypescript[]): {
  type: string
  payload: CustomersTypescript[]
} {
  return {
    type: types.ALL_CUSTOMERS_SUCCESS,
    payload: data
  }
}
export function allCustomersFill(data: {
  allCustomers: CustomersTypescript[]
}): {
  type: string
  data: CustomersTypescript[]
} {
  return {
    type: types.ALL_CUSTOMERS_FILL,
    data: data.allCustomers
  }
}
export function allCustomersFailure(): { type: string } {
  return {
    type: types.ALL_CUSTOMERS_FAILURE
  }
}
