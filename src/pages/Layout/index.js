import React from 'react'
import styles from './index.module.scss'
import Icon from '@/components/Icon'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const tabBar = [
  {
    title: 'Home',
    icon: 'iconbtn_home',
    path: '/home',
  },
  {
    title: 'Forum',
    icon: 'iconbtn_qa',
    path: '/home/forum',
  },
  {
    title: 'Video',
    icon: 'iconbtn_video',
    path: '/home/video',
  },
  {
    title: 'My',
    icon: 'iconbtn_mine',
    path: '/home/profile',
  },
]
export default function Home() {
  let navigate = useNavigate()
  let location = useLocation()

  return (
    <div className={styles.root}>
      {/* 区域一：点击按钮切换显示内容的区域 */}
      <div className="tab-content">
        <Outlet></Outlet>
      </div>
      {/* 区域二：按钮区域，会使用固定定位显示在页面底部 */}
      <div className="tabbar">
        {tabBar.map((item) => (
          <div
            className={classNames(
              'tabbar-item',
              location.pathname === item.path ? 'tabbar-item-active' : ''
            )}
            onClick={() => navigate(item.path)}
            key={item.title}
          >
            <Icon
              type={
                location.pathname === item.path ? item.icon + '_sel' : item.icon
              }
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
