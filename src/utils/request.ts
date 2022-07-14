import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL as string
  // baseURL: '/admin'
})

// request 不支持泛型
// request get\post\put\delete 支持响应数据泛型
// 由于我们的后端又包装了数据 data，导致我们访问数据比较麻烦

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  const status = response.data.status
  // 同意处理接口相应错误， 比如 token 过期无效、服务端异常等
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (!status || status === 200) {
    return response
  }
  if (status && status !== 200) {
    ElMessage.error(response.data.msg || '请求失败，请稍后重试')
    return Promise.reject(response.data.msg)
  }
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
