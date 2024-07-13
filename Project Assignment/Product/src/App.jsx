import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Addproduct'
import{Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <h1>Welcome to Product Management</h1>
      <Navbar/>
      {/* <br/>
      <Home/>
      <br/>
      <Add/>  */}
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>

      </Routes>
    </>
  )
}

export default App

