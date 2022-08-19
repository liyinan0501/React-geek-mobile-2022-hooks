import React from 'react'
import { Button, Toast } from 'antd-mobile'

export default function App() {
  return (
    <div>
      App
      <Button
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
    </div>
  )
}
