import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './Components/Router'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='  '>
    <Router/>
    </div>
  )
}

export default App
