import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const apiInstance = axios.create({
  baseURL: publicRuntimeConfig.apigBaseUrl,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 60000,
  validateStatus: () => true
})

export const getAllPlans = () => apiInstance.get('/plans')

export const getAllServices = () => apiInstance.get('/services')
