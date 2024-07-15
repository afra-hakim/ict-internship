import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import{Routes,Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <h1>Welcome to Product Management</h1>
      <Navbar/>
      {/* <br/>
      <View/>
      <br/>
      <Add/>  */}
       <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>

      </Routes>
    </>
  )
}

export default App

