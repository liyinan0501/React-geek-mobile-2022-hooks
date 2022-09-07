const TOKEN_KEY = 'geek-mobile'

/**
 * Save Token to localStorage
 * @param {Object} tokenInfo 从后端获取到的 Token 信息
 */
export const setTokenInfo = (tokenInfo) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenInfo))
}

/**
 * Get Token from localStorage
 */
export const getTokenInfo = () => {
  return JSON.parse(localStorage.getItem(TOKEN_KEY)) || {}
}

/**
 * Delete Token from localStorage
 */
export const removeTokenInfo = () => {
  localStorage.removeItem(TOKEN_KEY)
}

/**
 * Whether or not there is a Token
 */
export const hasToken = () => {
  return !!getTokenInfo().token
}
