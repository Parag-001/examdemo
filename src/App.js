import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AllRoute from './Route/allRoute'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AllRoute />
      </BrowserRouter>
    </>
  )
}

export default App