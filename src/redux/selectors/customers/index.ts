import { createSelector } from 'reselect'
import { CustomersTypescript } from '../../../typescript/Customers'

const getCustomers = (state: {
  customers: { customers: CustomersTypescript[] }
}) => state.customers.customers
const getLoading = (state: { customers: { loading: boolean } }) =>
  state.customers.loading

export const geCustomersSelector = createSelector(
  getCustomers,
  (customers: CustomersTypescript[]) => customers
)

export const getLoadingSelector = createSelector(
  getLoading,
  (loading: boolean) => loading
)
