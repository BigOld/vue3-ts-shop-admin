/*
* 公共基础接口封装
*/

import request from '@/utils/request'

import { ILoginInfo, ILoginResponse } from './types/common'

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })

  // return request({
  //   method: 'GET',
  //   url: '/login/info'
  // })
  // return request.get<ResponseData<{
  //   logo_square: string
  //   logo_rectangle: string
  //   login_logo: string
  //   slide: string[]
  // }>>('/login/info').then(res => {
  //   return res.data.data
  // })
}

export const getCaptcha = () => {
  return request <Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now() // 防止浏览器缓存
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request<ILoginResponse>({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
