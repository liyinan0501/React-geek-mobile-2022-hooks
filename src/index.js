import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import store from '@/store'
import { Provider } from 'react-redux'

// import global style sheet
import '@/assets/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
