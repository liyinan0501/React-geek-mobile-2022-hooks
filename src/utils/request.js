import axios from 'axios'
import { Toast } from 'antd-mobile'
import { getTokenInfo } from './storage'

export const baseURL = 'http://toutiao.itheima.net/v1_0/'
// export const baseURL = 'http://geek.itheima.net/v1_0/'

const request = axios.create({
  timeout: 5000,
  baseURL,
})

// Request interceptor
request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getTokenInfo().token
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Response interceptor
request.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      Toast.show({
        icon: 'fail',
        content: error.response.data.message,
        maskClickable: false,
      })
    } else {
      Toast.show({
        icon: 'fail',
        content: 'Server Busy',
        maskClickable: false,
      })
    }
    return Promise.reject(error)
  }
)

export default request
