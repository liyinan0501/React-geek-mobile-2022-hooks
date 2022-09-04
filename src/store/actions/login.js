import request from '@/utils/request'

export const sendValidationCode = (mobile) => {
  return async (dispatch) => {
    const res = await request({
      url: `/sms/codes/${mobile}`,
      method: 'GET',
    })
  }
}
