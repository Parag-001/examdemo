import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AllRoute from './Route/allRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AllRoute />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App