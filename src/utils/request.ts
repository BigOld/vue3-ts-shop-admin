import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { store } from '@/store'
import router from '@/router/' // 加一个 / 会识别成目录，否则会优先识别成router.d.ts

const request = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL as string
  // baseURL: '/admin'
})

// 控制登录过期的锁
let isRefreshing = false

// request 不支持泛型
// request get\post\put\delete 支持响应数据泛型
// 由于我们的后端又包装了数据 data，导致我们访问数据比较麻烦

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  const user = store.state.user
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
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

  if (status === 410000) {
    if (isRefreshing) return Promise.reject(response)
    isRefreshing = true
    ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，确认重新登录', '登录过期', {
      confirmButtonText: '确认',
      cancelButtonText: '取消'
    }).then(() => {
      store.commit('setUser', null)
      router.push({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath // 查询参数，为了登录之后能回到这里
        }
      })
    }).finally(() => {
      isRefreshing = false
    })
    return Promise.reject(response)
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
