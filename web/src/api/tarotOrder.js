
import service from '@/utils/request'

export const getTarotOrderList = (params) => {
  return service({url: '/to/getTarotOrderList', method: 'get',params})
}
export const createDataPack = (data) => {
  return service({url: '/dp/createDataPack', method: 'post',data})
}