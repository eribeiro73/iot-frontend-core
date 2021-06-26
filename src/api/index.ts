import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://iot.appwb.com.br/backend/graphql'
  // baseURL: 'http://localhost:3000/graphql'
})

api.interceptors.request.use(async (_config: AxiosRequestConfig) => {
  return _config
})

export default api
