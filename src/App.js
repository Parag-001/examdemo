import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
// import Main from './Route/Main'
import AllRoute from './Route/allRoute'
import Main from './Route/Main'
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