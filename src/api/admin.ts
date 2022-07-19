import { Admin, AdminPostData, IListParams } from '@/api/types/admin'
import { IFormData } from '@/api/types/form'
import request from '@/utils/request'

export const getAdmins = (params: IListParams) => {
  return request<{
    count : number,
    list: Admin[]
  }>({
    method: 'GET',
    url: '/setting/admin',
    params
  })
}

export const createAdmin = (data: AdminPostData) => {
  return request({
    method: 'POST',
    url: '/setting/admin',
    data
  })
}

export const editAdmin = (id: number, data: AdminPostData) => {
  return request({
    method: 'PUT',
    url: `/setting/admin/${id}`,
    data
  })
}

export const deleteAdmin = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/setting/admin/${id}`
  })
}

export const updateAdminStatus = (id: number, status: number) => {
  return request({
    method: 'PUT',
    url: `/setting/set_status/${id}/${status}`
  })
}

export const getRoles = () => {
  return request<IFormData>({
    method: 'GET',
    url: '/setting/admin/create'
  }).then(data => {
    const roles = data.rules.find(item => item.field === 'roles')
    if (roles && roles.options) {
      return roles.options
    }
    return []
  })
}

export const getAdmin = (id: number) => {
  return request<IFormData>({
    method: 'GET',
    url: `/setting/admin/${id}/edit`
  }).then(data => {
    const obj: Record<string, any> = {}
    data.rules.forEach(item => {
      obj[item.field] = item.value
    })
    return obj as AdminPostData
  })
}
