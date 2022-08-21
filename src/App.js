import React from 'react'
import { Button, Toast } from 'antd-mobile'
import './App.scss'

export default function App() {
  return (
    <div>
      <Button
        block
        color="primary"
        onClick={() => {
          Toast.show({
            icon: 'loading',
            content: 'Loading',
          })
        }}
      >
        Primary
      </Button>
      <div className="box">Hello</div>
    </div>
  )
}
