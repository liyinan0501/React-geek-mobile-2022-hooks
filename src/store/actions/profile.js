import request from '@/utils/request'
import { SAVE_USER } from '../action_types/profile'

/**
 * Save User Info
 * @returns
 */
export const saveUser = (payload) => {
  return {
    type: SAVE_USER,
    payload,
  }
}

/**
 * Get User Info
 * @returns Promise
 */
export const getUser = () => {
  return async (dispatch) => {
    const res = await request({
      method: 'GET',
      url: '/user',
    })
    dispatch(saveUser(res.data))
  }
}
