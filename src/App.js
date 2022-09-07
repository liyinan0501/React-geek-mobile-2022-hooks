import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'

const Login = React.lazy(() => import('@/pages/Login'))
const Home = React.lazy(() => import('@/pages/Layout'))
const Forum = React.lazy(() => import('@/pages/Forum'))
const Video = React.lazy(() => import('@/pages/Video'))
const Profile = React.lazy(() => import('@/pages/Profile'))

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path="/home/forum" element={<Forum />}></Route>
              <Route path="/home/video" element={<Video />}></Route>
              <Route path="/home/profile" element={<Profile />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}
