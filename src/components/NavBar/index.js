import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'

import { useNavigate } from 'react-router-dom'

function NavBar({ children, extra }) {
  let navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }

  return (
    <div className={styles.root}>
      {/* Header */}
      {/* back bottom */}
      <div className="left">
        <Icon type="iconfanhui" onClick={back} />
      </div>
      {/* middle title */}
      <div className="title">{children}</div>
      {/* right title */}
      <div className="right">{extra}</div>
    </div>
  )
}

export default NavBar
