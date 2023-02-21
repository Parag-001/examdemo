import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './Component/User/Login'
// import Main from './Route/Main'
import AllRoute from './Route/allRoute'
import Main from './Route/Main'
import StudRoute from './Route/StudRoute'
const App = () => {
  const  {data} = useSelector((stat) => stat.Login)
  return (
    <>
      <BrowserRouter>
        {/* <Routes >
          <Route path='/login' element={ <Login />} />
        </Routes>*/}
        {/* {
          data.role === "teacher" ? <AllRoute /> : <StudRoute />
         }  */}
        <AllRoute />
      </BrowserRouter>
    </>
  )
}

export default App