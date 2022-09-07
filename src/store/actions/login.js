import request from '@/utils/request'

export const sendValidationCode = (mobile) => {
  console.log(mobile)
  return async (dispatch) => {
    await request({
      method: 'GET',
      url: `/sms/codes/${mobile}`,
    })
  }
}

/**
 * Login
 * @param {*} data
 * @returns
 */
export const loginAction = (data) => {
  return async (dispatch) => {
    const res = await request({
      method: 'POST',
      url: '/authorizations',
      data,
    })
    // Saving token to redux
    dispatch(saveTokenAction(res.data))
  }
}

export const saveTokenAction = (payload) => {
  return {
    type: 'login/token',
    payload,
  }
}
