import React from 'react'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'


const App = () => {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home></Home> : <Navigate to='/login'></Navigate>}></Route>
        <Route path="/login" element={authUser ? <Navigate to='/'></Navigate> : <Login></Login>}></Route>
        <Route path="/signup" element={authUser ? <Navigate to='/'></Navigate> : <SignUp></SignUp>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
