import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Add from './components/Add'
import Record from './components/Record'
import{Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <h1>Welcome to React Session</h1>
      <View/>
      {/* <Record/>
      <Add/> */}
      <Routes>
        <Route path='/' element={<Record/>}></Route>
        <Route path='/add' element={<Add person={{fname:"swathi",department:"english",semester:"s4"}}/>}></Route>

      </Routes>
      
  </>  
  )

}


  export default App
