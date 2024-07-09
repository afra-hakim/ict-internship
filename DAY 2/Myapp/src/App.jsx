import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React Session</h1>
      <View/>
      {/* <table> 
        <tr>
          <th>Name</th>
          <th>Department</th>
        </tr>
        <tr>
          <td>Afra</td>
          <td>English</td>
        </tr>
      </table> */}
  </>  
  )

}

export default App
