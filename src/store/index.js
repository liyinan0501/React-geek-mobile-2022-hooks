import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/store/reducers'
import { getTokenInfo } from '@/utils/storage'

const store = configureStore({
  reducer,
  preloadedState: { login: getTokenInfo() },
})

export default store
