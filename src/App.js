import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'

const Login = lazy(() => import('@/pages/Login'))
const Layout = lazy(() => import('@/pages/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Forum = lazy(() => import('@/pages/Forum'))
const Video = lazy(() => import('@/pages/Video'))
const Profile = lazy(() => import('@/pages/Profile'))

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Layout />}>
              <Route path="/home" element={<Home />}></Route>
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
