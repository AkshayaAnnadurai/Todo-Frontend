import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from '../pages/Todos'
import Home from '../pages/Home'
import Login from '../pages/Login'
import RequireAuth from '../components/RequireAuth'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/login"  element={
               <RequireAuth>
            <Login/>
            </RequireAuth>} />
            <Route path="/todos"  element={
                <RequireAuth>
            <Todos/>
            </RequireAuth>} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
